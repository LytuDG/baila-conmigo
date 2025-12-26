import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import express from "express";
import compression from "express-compression";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isProd = process.env.NODE_ENV === "production";
const root = process.cwd();

async function createServer() {
  const app = express();
  app.use(compression());

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite;
  if (!isProd) {
    vite = await (
      await import("vite")
    ).createServer({
      root,
      logLevel: "info",
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
        },
      },
      appType: "custom",
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    app.use(
      (await import("serve-static")).default(
        path.resolve(__dirname, "dist/client"),
        {
          index: false,
        }
      )
    );
  }

  app.use(async (req, res, next) => {
    try {
      const url = req.originalUrl;

      let template, render;
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(path.resolve(root, "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
      } else {
        template = fs.readFileSync(
          path.resolve(root, "dist/client/index.html"),
          "utf-8"
        );
        const serverEntryPath = pathToFileURL(
          path.resolve(root, "dist/server/entry-server.js")
        ).href;
        render = (await import(serverEntryPath)).render;
      }

      const { html: appHtml } = await render(url);

      const html = template.replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app, vite };
}

export { createServer };

if (process.env.NODE_ENV !== "test" && !process.env.NETLIFY) {
  const port = process.env.PORT || 5173;

  createServer().then(({ app }) => {
    const server = app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });

    server.on("error", (e) => {
      if (e.code === "EADDRINUSE") {
        console.error(
          `Port ${port} is already in use. Please stop other servers or use a different port.`
        );
      } else {
        console.error("Server error:", e);
      }
      process.exit(1);
    });
  });
}
