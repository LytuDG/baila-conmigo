import { useState } from 'react';
import { X } from 'lucide-react';
import galery1 from './assets/galery.jpg';
import galery2 from './assets/galery2.jpg';
import galery3 from './assets/galery3.jpg';
import galery4 from './assets/galery4.jpg';

interface GalleryImage {
    src: string;
    alt: string;
    title: string;
}

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const images: GalleryImage[] = [
        { src: galery1, alt: "Dance Academy - Moment 1", title: "Passion in Motion" },
        { src: galery2, alt: "Dance Academy - Moment 2", title: "Movement & Rhythm" },
        { src: galery3, alt: "Dance Academy - Moment 3", title: "Class in Action" },
        { src: galery4, alt: "Dance Academy - Moment 4", title: "Expert Instruction" },
    ];

    return (
        <>
            <section className="py-24 bg-neutral-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 reveal">
                        <span className="text-red-600 uppercase tracking-widest text-sm font-bold">Our Academy</span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 text-white mb-4">Gallery</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Captured moments of passion, rhythm, and community that make Baila Conmigo special.
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden cursor-pointer reveal h-72"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="w-full p-6">
                                        <h3 className="font-serif text-xl text-white font-bold">{image.title}</h3>
                                        <p className="text-yellow-600 text-sm mt-2">Click to enlarge</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-10 right-0 text-white hover:text-red-600 transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-full h-auto max-h-[80vh] object-contain"
                        />
                        <h3 className="text-center text-white font-serif text-2xl mt-4">{selectedImage.title}</h3>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;