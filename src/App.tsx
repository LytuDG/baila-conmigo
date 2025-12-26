import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Music,
  Check,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  ChevronDown,
  Calendar,
  Star,
  User,
  Award,
  Sparkles,
} from "lucide-react";
import RacheJpg from "./assets/rachel.jpg";
import Logo from "./assets/logo-transparent.png";
import Gallery from "./Gallery";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Reveal animation logic
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-neutral-950 text-slate-50 font-sans antialiased selection:bg-red-700 selection:text-white overflow-x-hidden">
      {/* Styles for fonts and custom animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Lato', sans-serif; }
        
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .texture-overlay {
          background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
        }
        
        .logo-visibility {
          filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 2px rgba(255, 255, 255, 0.3));
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-b border-white/10 ${
          scrolled
            ? "bg-neutral-950/95 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src={Logo}
                alt="Ahora Baila"
                className="h-16 w-auto object-contain logo-visibility transition-transform duration-300 group-hover:scale-110"
              />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white group-hover:text-red-500 transition-colors duration-300">
                  AHORA
                </span>
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-red-600 group-hover:text-white transition-colors duration-300">
                  BAILA
                </span>
              </div>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {[
                { name: "Home", href: "#home" },
                { name: "Biography", href: "#the-all-star" },
                { name: "Philosophy", href: "#concept" },
                { name: "Classes", href: "#classes" },
                { name: "Membership", href: "#membership" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-2 border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black transition-all duration-300 text-sm uppercase tracking-widest font-bold"
              >
                Book Now
              </a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-red-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="w-8 h-8" />
                ) : (
                  <Menu className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-white/10 animate-fadeIn">
            <div className="px-4 pt-2 pb-8 space-y-4 flex flex-col items-center">
              {[
                { name: "Home", href: "#home" },
                { name: "Biography", href: "#the-all-star" },
                { name: "Philosophy", href: "#concept" },
                { name: "Classes", href: "#classes" },
                { name: "Membership", href: "#membership" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium hover:text-red-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516651029879-1996715f019b?q=80&w=1920&auto=format&fit=crop')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-neutral-950 texture-overlay"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 animate-fade-in-up">
          <p className="text-yellow-600 tracking-[0.3em] uppercase text-sm md:text-base mb-4">
            Salsa Dance Academy
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 drop-shadow-2xl">
            To Dance is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 italic">
              to Live
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light drop-shadow-md">
            Share the rhythm, technique, and authentic essence of salsa with{" "}
            <strong className="text-white">Rachel Ortiz</strong>. At Ahora
            Baila, dancing is much more than movement.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="#membership"
              className="px-8 py-4 bg-red-700 text-white font-bold uppercase tracking-widest hover:bg-red-600 transition-all shadow-lg shadow-red-900/50 transform hover:-translate-y-1"
            >
              View Plans
            </a>
            <a
              href="#the-all-star"
              className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Meet Rachel
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown className="w-8 h-8" />
        </div>
      </header>

      {/* About Rachel */}
      <section
        id="the-all-star"
        className="py-24 bg-neutral-950 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-900/50 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative reveal">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-yellow-600/50"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-yellow-600/50"></div>
              <img
                src={RacheJpg}
                alt="Rachel Ortiz - Fundadora de Ahora Baila"
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />

              <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur px-6 py-4 border-l-4 border-red-600">
                <p className="text-2xl font-serif italic text-white">
                  Rachel Ortiz
                </p>
                <p className="text-yellow-600 text-xs tracking-widest uppercase">
                  Founder & Head Instructor
                </p>
              </div>
            </div>
            <div className="reveal">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-red-600"></span>
                <span className="text-red-600 uppercase tracking-widest text-sm font-bold">
                  Biography
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
                Passion, Art and{" "}
                <span className="text-yellow-600">Salsa Culture</span>
              </h2>
              <div className="text-gray-400 mb-6 leading-relaxed space-y-4">
                <p>
                  From a very young age, Rachel discovered her deep connection
                  with music, dance, and culture. Her training began in
                  childhood, taking ballet classes and later joining companies
                  of flamenco, popular dance, gymnastics, and aerobics.
                </p>
                <p>
                  In 2011, she joined the prestigious{" "}
                  <strong>All Stars Santiago de Cuba</strong>, starting her
                  professional career. She has participated in national and
                  international shows and competitions, touring Europe, the USA,
                  and Latin America.
                </p>
                <p>
                  Rachel has shared the stage with figures like El Canario, El
                  Septeto Santiaguero, and Habana de Primera. Today, she
                  channels her passion into <strong>Ahora Baila</strong>,
                  sharing the authentic essence of salsa.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-3xl font-serif text-white">14+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                    Years of Experience
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-white">200+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                    Students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section
        id="concept"
        className="py-24 bg-neutral-900 texture-overlay relative"
      >
        <div className="max-w-4xl mx-auto px-4 text-center reveal">
          <Sparkles className="w-10 h-10 text-yellow-600 mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-white">
            Our Philosophy
          </h2>
          <p className="text-xl text-gray-300 font-light italic mb-12">
            "At Ahora Baila, to dance is to live."
          </p>
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg text-justify md:text-center">
            <p>
              <strong>Ahora Baila</strong> was born from a deep vision: to share
              the love for dance as an experience that transforms, liberates,
              and connects. Its essence is founded on roots formed during a
              14-year career, where energy was lived to the maximum and dance
              was much more than movement: it was passion, dedication, and love.
            </p>
            <p>
              For us, dance is therapy for the soul. Each class is a space to
              enjoy, socialize, laugh, and reconnect. It is a safe place to make
              mistakes and discover the satisfaction of reaching goals.
            </p>
            <p>
              We believe in dance as a bridge that unites people. Here, friends
              are made and a healthy recreational environment is fostered, where
              good humor, joy, and camaraderie are essential.
            </p>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section
        id="classes"
        className="py-24 bg-neutral-950 texture-overlay border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <Music className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Dance Levels
            </h2>
            <p className="text-gray-400">
              Develop your skills step by step, from basics to stage mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Class Card 1 - Foundations */}
            <div className="group relative bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border border-yellow-600/30 hover:border-yellow-600/60 transition-all duration-300 overflow-hidden reveal p-8 rounded-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-600 rounded-full opacity-5 -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-yellow-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-600/40 transition-colors">
                  <Music className="w-7 h-7 text-yellow-600" />
                </div>
                <p className="text-yellow-600 text-xs font-bold tracking-widest uppercase mb-2">
                  Beginner
                </p>
                <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-yellow-600 transition-colors">
                  Salsa Fundamentals
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Learn the essential steps, timing, and rhythms. Perfect for
                  starting your dance journey with no prior experience.
                </p>
                <ul className="space-y-2 mb-6 text-gray-400 text-sm">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />{" "}
                    Basic steps
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />{" "}
                    Partner positioning
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />{" "}
                    Musical timing
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="inline-block text-white border-b border-yellow-600 pb-1 hover:text-yellow-600 transition-colors font-bold"
                >
                  Explore &rarr;
                </a>
              </div>
            </div>

            {/* Class Card 2 - Intermediate */}
            <div className="group relative bg-gradient-to-br from-red-950 via-neutral-950 to-neutral-900 border-2 border-red-600/50 hover:border-red-600 transition-all duration-300 overflow-hidden reveal p-8 rounded-lg">
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-600 rounded-full opacity-10 -mr-20 -mt-20 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-red-600/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600/50 transition-colors">
                  <Sparkles className="w-7 h-7 text-red-600" />
                </div>
                <p className="text-red-600 text-xs font-bold tracking-widest uppercase mb-2">
                  Intermediate
                </p>
                <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-red-400 transition-colors">
                  Social Style
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Develop complex combinations and sophisticated styling. Gain
                  confidence to dance socially with better technique.
                </p>
                <ul className="space-y-2 mb-6 text-gray-300 text-sm">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />{" "}
                    Complex turns
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />{" "}
                    Styling and body movement
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />{" "}
                    Social dancing skills
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="inline-block text-white border-b border-red-600 pb-1 hover:text-red-400 transition-colors font-bold"
                >
                  Explore &rarr;
                </a>
              </div>
            </div>

            {/* Class Card 3 - All-Star Mastery */}
            <div className="group relative bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border border-red-700/30 hover:border-red-600/60 transition-all duration-300 overflow-hidden reveal p-8 rounded-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-700 rounded-full opacity-5 -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-red-700/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-700/40 transition-colors">
                  <Award className="w-7 h-7 text-red-600" />
                </div>
                <p className="text-red-600 text-xs font-bold tracking-widest uppercase mb-2">
                  Advanced
                </p>
                <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-red-400 transition-colors">
                  All-Star Mastery
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Master elite techniques and stage excellence with Rachel.
                  Perfect for dancers ready for competition.
                </p>
                <ul className="space-y-2 mb-6 text-gray-400 text-sm">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />{" "}
                    Competition choreography
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />{" "}
                    Stage presence
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />{" "}
                    Advanced technical refinement
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="inline-block text-white border-b border-red-600 pb-1 hover:text-red-600 transition-colors font-bold"
                >
                  Explore &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Membership & Pricing */}
      <section id="membership" className="py-24 bg-neutral-950 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="text-red-600 uppercase tracking-widest text-sm font-bold">
              Invest in Yourself
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 text-white">
              Pricing & Plans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Drop-in */}
            <div className="bg-neutral-900 border border-white/10 p-8 hover:border-white/30 transition-all reveal group">
              <div className="mb-4 bg-neutral-800 w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-red-600 transition-colors">
                <Calendar className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Single Class
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-serif text-yellow-500">$15</span>
                <span className="text-gray-500 ml-2">/ class</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-400 text-sm">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600" /> Pay per visit
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600" /> Access to Level 1
                  or 2
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600" /> Valid for 30 days
                </li>
              </ul>
              <button
                onClick={() => {
                  window.location.href = "#contact";
                }}
                className="w-full py-3 border border-white/20 text-white uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-all"
              >
                Select
              </button>
            </div>

            {/* Monthly Membership - Highlighted */}
            <div className="bg-neutral-800 border-2 border-red-600/50 p-8 relative transform md:-translate-y-4 shadow-2xl shadow-red-900/20 reveal">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                Recommended
              </div>
              <div className="mb-4 bg-red-900/30 w-12 h-12 flex items-center justify-center rounded-full">
                <Star className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Unlimited Access
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-serif text-white">$50</span>
                <span className="text-gray-400 ml-2">/ month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-yellow-500" /> Unlimited Group
                  Classes
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-yellow-500" /> Priority Booking
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-yellow-500" /> Access to
                  Socials
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-yellow-500" /> Cancel anytime
                </li>
              </ul>
              <button
                onClick={() => {
                  window.location.href = "#contact";
                }}
                className="w-full py-3 bg-red-600 text-white uppercase tracking-widest text-xs font-bold hover:bg-red-700 transition-all"
              >
                Join the Family
              </button>
            </div>

            {/* Private */}
            <div className="bg-neutral-900 border border-white/10 p-8 hover:border-yellow-600/50 transition-all reveal group">
              <div className="mb-4 bg-neutral-800 w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-yellow-600 transition-colors">
                <User className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Private Coaching
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-xl font-serif text-white italic">
                  Custom Quote
                </span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-400 text-sm">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-yellow-600" /> 1 on 1 with
                  Rachel
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-yellow-600" /> Personalized
                  Choreography
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-yellow-600" /> Competition Prep
                </li>
              </ul>
              <button
                onClick={() => {
                  window.location.href = "#contact";
                }}
                className="w-full py-3 border border-yellow-600 text-yellow-600 uppercase tracking-widest text-xs font-bold hover:bg-yellow-600 hover:text-black transition-all"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Quote Divider */}
      <div
        className="h-40 bg-fixed bg-center bg-cover flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515234520935-7734898495a9?q=80&w=1920&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-red-900/80 mix-blend-multiply"></div>
        <h2 className="relative z-10 font-serif text-3xl md:text-5xl text-white italic text-center px-4">
          "To dance is to live."
        </h2>
      </div>

      {/* Gallery Section */}
      <Gallery />

      {/* NEW SECTION: Follow Us */}
      <section className="py-16 bg-neutral-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3" />
            Stay Connected
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Follow Our Journey
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Get daily inspiration, class highlights, and join our growing
            community of dance lovers on social media.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.instagram.com/ahora_baila93"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-linear-to-tr from-yellow-400 via-red-500 to-purple-500 text-white font-bold rounded-lg shadow-xl hover:scale-105 transition-transform"
            >
              <Instagram className="w-6 h-6" />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/1Cf2vGp3sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#1877F2] text-white font-bold rounded-lg shadow-xl hover:scale-105 transition-transform"
            >
              <Facebook className="w-6 h-6" />
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Booking */}
      <section
        id="contact"
        className="py-24 bg-neutral-900 border-t border-white/5 relative"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-black border border-white/10 p-8 md:p-12 shadow-2xl reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <span className="text-red-600 uppercase tracking-widest text-sm font-bold">
                  Join Us
                </span>
                <h2 className="font-serif text-4xl text-white mb-6">
                  Start Your Journey
                </h2>
                <p className="text-gray-400 mb-8">
                  Ready to start? Fill out the form to schedule your first class
                  or consultation with Rachel.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="text-white font-bold">Location</h4>
                      <p className="text-gray-500">
                        IGUANA BARKANIA SPORT BAR <br />
                        4824 14TH'ST W, BRADENTON, FL 34208
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="text-white font-bold">Email</h4>
                      <p className="text-gray-500">
                        ortizreyesrachel@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Redirect Section */}
              <div className="flex flex-col justify-center items-center bg-neutral-900/50 p-8 border border-white/5 rounded-lg text-center reveal">
                <Music className="w-12 h-12 text-red-600 mb-6 animate-pulse" />
                <h3 className="text-2xl font-serif text-white mb-4">
                  Chat with us on WhatsApp
                </h3>
                <p className="text-gray-400 mb-8 max-w-sm">
                  The fastest way to book your class or get a private quote is
                  by messaging Rachel directly.
                </p>
                <a
                  href="https://wa.me/19417206619?text=Hello%20Rachel!%20I'm%20interested%20in%20learning%20salsa%20with%20Ahora%20Baila."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] text-white font-bold uppercase tracking-widest rounded shadow-lg hover:shadow-[#25D366]/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.011c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.877 1.213 3.075.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Message Rachel
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-6 group cursor-pointer">
            <img
              src={Logo}
              alt="Ahora Baila"
              className="h-16 w-auto object-contain mb-4 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 logo-visibility"
            />
            <div className="flex gap-2">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white group-hover:text-red-500 transition-colors duration-300">
                AHORA
              </span>
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-red-600 group-hover:text-white transition-colors duration-300">
                BAILA
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-6">
            &copy; 2025 Ahora Baila. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/share/1Cf2vGp3sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/ahora_baila93"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
