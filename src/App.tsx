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
  Youtube,
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
  const [bookingType, setBookingType] = useState("group"); // 'group' or 'private'

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
                alt="Baila Conmigo"
                className="h-16 w-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
              />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white group-hover:text-red-500 transition-colors duration-300">
                  BAILA
                </span>
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-red-600 group-hover:text-white transition-colors duration-300">
                  CONMIGO
                </span>
              </div>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {["Home", "The All-Star", "Classes", "Membership", "Studio"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors duration-300"
                  >
                    {item}
                  </a>
                )
              )}
              <a
                href="#contact"
                className="px-6 py-2 border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black transition-all duration-300 text-sm uppercase tracking-widest font-bold"
              >
                Book Class
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
              {["Home", "The All-Star", "Classes", "Membership", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="block px-3 py-2 text-base font-medium hover:text-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
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
            US Salsa Academy
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 drop-shadow-2xl">
            Feel the Rhythm, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 italic">
              Ignite the Soul
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light drop-shadow-md">
            Experience world-class salsa instruction led by{" "}
            <strong className="text-white">All-Star Rachel Ortiz</strong>. Where
            technique meets passion on the dance floor.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="#membership"
              className="px-8 py-4 bg-red-700 text-white font-bold uppercase tracking-widest hover:bg-red-600 transition-all shadow-lg shadow-red-900/50 transform hover:-translate-y-1"
            >
              View Plans
            </a>
            <a
              href="#about"
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
                alt="Rachel Ortiz - Professional Salsa Dancer and Founder of Baila Conmigo Dance Academy in Bradenton Florida"
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
                  The Visionary
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
                From the <span className="text-yellow-600">All-Star</span> Stage{" "}
                <br />
                to Your Studio
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                With over 15 years of professional experience competing on
                global stages, Rachel Ortiz brings the precision of a competitor
                and the soul of a true Salsera to her students.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                After retiring from the All-Star circuit, Rachel founded{" "}
                <em>Baila Conmigo</em> in the heart of the USA with a simple
                mission: to empower students to find their own style through the
                art of Salsa.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-3xl font-serif text-white">15+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                    Years Experience
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-white">200+</p>{" "}
                  {/* Fixed: changed class="text-3xl" to className="text-3xl" */}
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                    Students Taught
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section id="classes" className="py-24 bg-neutral-900 texture-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <Music className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Dance Levels
            </h2>
            <p className="text-gray-400">
              Three progressive levels to develop your salsa skills from
              beginner to advanced.
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
                  Salsa Foundations
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Learn the essential steps, timing, and rhythms. Perfect for
                  those starting their salsa journey with no prior dance
                  experience.
                </p>
                <ul className="space-y-2 mb-6 text-gray-400 text-sm">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />{" "}
                    Basic step patterns
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
                  Social Flow
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Develop complex combinations and sophisticated styling. Build
                  confidence to dance socially with advanced techniques.
                </p>
                <ul className="space-y-2 mb-6 text-gray-300 text-sm">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />{" "}
                    Complex turn sequences
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />{" "}
                    Styling & body movement
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
                  Master elite techniques and performance excellence taught by
                  Rachel. Perfect for dancers ready for competition.
                </p>
                <ul className="space-y-2 mb-6 text-gray-400 text-sm">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />{" "}
                    Competition choreography
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />{" "}
                    Performance mastery
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />{" "}
                    Advanced technique refinement
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
              Class Pricing
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
                  <Check className="w-4 h-4 text-red-600" /> Pay as you go
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
                  setBookingType("group");
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
                Best Value
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
                  setBookingType("group");
                  window.location.href = "#contact";
                }}
                className="w-full py-3 bg-red-600 text-white uppercase tracking-widest text-xs font-bold hover:bg-red-700 transition-all"
              >
                Join Family
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
                  <Check className="w-4 h-4 text-yellow-600" /> 1-on-1 with
                  Rachel
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-yellow-600" /> Personalized
                  choreography
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-yellow-600" /> Competition prep
                </li>
              </ul>
              <button
                onClick={() => {
                  setBookingType("private");
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
          "Dance is the hidden language of the soul."
        </h2>
      </div>

      {/* Gallery Section */}
      <Gallery />

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
                  Join the Family
                </span>
                <h2 className="font-serif text-4xl text-white mb-6">
                  Start Your Journey
                </h2>
                <p className="text-gray-400 mb-8">
                  Ready to step onto the floor? Fill out the form to schedule
                  your first class or consultation with Rachel.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="text-white font-bold">Studio Location</h4>
                      <p className="text-gray-500">
                        IGUANA BARKANIA SPORT BAR <br />
                        4824 14TH'ST W, BRADENTON, FL 34208
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="text-white font-bold">Email Us</h4>
                      <p className="text-gray-500">racheldance251@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Form */}
              <form className="space-y-4">
                {/* Service Type Toggle */}
                <div className="flex mb-6 bg-neutral-900 p-1 rounded border border-white/10">
                  <button
                    type="button"
                    onClick={() => setBookingType("group")}
                    className={`flex-1 py-2 text-xs uppercase font-bold tracking-widest transition-all ${
                      bookingType === "group"
                        ? "bg-red-700 text-white shadow"
                        : "text-gray-500 hover:text-white"
                    }`}
                  >
                    Group Class
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingType("private")}
                    className={`flex-1 py-2 text-xs uppercase font-bold tracking-widest transition-all ${
                      bookingType === "private"
                        ? "bg-yellow-600 text-black shadow"
                        : "text-gray-500 hover:text-white"
                    }`}
                  >
                    Private Quote
                  </button>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                {/* Conditional Fields based on booking type */}
                {bookingType === "group" ? (
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Interested Plan
                    </label>
                    <select className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-red-600 transition-colors">
                      <option value="dropin">Single Class ($15)</option>
                      <option value="monthly">Monthly Membership ($50)</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Goal / Request
                    </label>
                    <textarea
                      className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-yellow-600 transition-colors h-24"
                      placeholder="E.g. Preparing for a wedding dance or competition..."
                    ></textarea>
                  </div>
                )}

                <button
                  type="button"
                  className={`w-full font-bold uppercase tracking-widest py-4 mt-4 transition-all shadow-lg hover:translate-y-px ${
                    bookingType === "group"
                      ? "bg-gradient-to-r from-red-600 to-red-800 text-white hover:shadow-red-900/40"
                      : "bg-gradient-to-r from-yellow-600 to-yellow-700 text-black hover:shadow-yellow-900/40"
                  }`}
                >
                  {bookingType === "group" ? "Book Now" : "Request Quote"}
                </button>
              </form>
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
              alt="Baila Conmigo"
              className="h-16 w-auto object-contain mb-4 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
            />
            <div className="flex gap-2">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white group-hover:text-red-500 transition-colors duration-300">
                BAILA
              </span>
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-red-600 group-hover:text-white transition-colors duration-300">
                CONMIGO
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-6">
            &copy; 2025 Baila Conmigo Dance Academy. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61572234943840&sk=photos&locale=ms_MY"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
