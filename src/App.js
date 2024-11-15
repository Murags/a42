import './App.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { useState } from 'react';

// Add these variants at the top of your file, after the imports
const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] // Custom easing curve for smoother motion
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.3 // Increased stagger time for more elegant reveal
    }
  }
};

// Add this new slideVariants definition
const slideVariants = {
  initial: (direction) => ({
    x: direction === "left" ? "-100%" : "100%",
    opacity: 0
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const services = [
  {
    title: 'Market Research & Analytics',
    description: 'Comprehensive market studies covering residential, commercial, retail, and industrial sectors. Our AI-powered analytics provide detailed supply-demand dynamics and future market trends.',
    icon: 'fa-chart-line'
  },
  {
    title: 'Financial Advisory',
    description: 'Sophisticated financial modeling and feasibility studies with detailed IRR, NPV, and sensitivity analyses. Custom solutions for development financing, including debt structuring and equity arrangements.',
    icon: 'fa-calculator'
  },
  {
    title: 'Development Consulting',
    description: 'Expert guidance on property development, including highest and best use studies, master planning support, and development partner procurement. Comprehensive feasibility assessments for optimal project outcomes.',
    icon: 'fa-building'
  },
  {
    title: 'Portfolio Strategy',
    description: 'Strategic portfolio optimization and restructuring services for institutional investors. Advanced analytics for portfolio composition, risk assessment, and performance enhancement.',
    icon: 'fa-chart-pie'
  },
  {
    title: 'Location Intelligence',
    description: 'Data-driven location advisory including catchment area analysis, demographic profiling, and strategic expansion planning. Specialized retail and commercial positioning strategies.',
    icon: 'fa-location-dot'
  },
  {
    title: 'Valuation Services',
    description: 'Professional property valuation utilizing proprietary models and comprehensive market data. Detailed asset valuation for investment, financing, and strategic decisions.',
    icon: 'fa-scale-balanced'
  },
  {
    title: 'Urban Planning & Sustainability',
    description: 'Innovative urban planning solutions and sustainability strategies. Net-zero consulting and environmental impact assessments for future-proof developments.',
    icon: 'fa-city'
  },
  {
    title: 'Investment Advisory',
    description: 'Strategic consultation for market entry, expansion, and investment opportunities. Comprehensive risk assessment and investment strategy development.',
    icon: 'fa-briefcase'
  },
  {
    title: 'Economic Impact Analysis',
    description: 'Detailed assessment of economic and social impacts of real estate projects, including employment effects, tax implications, and community benefits.',
    icon: 'fa-chart-column'
  }
];

// Add this image URL to the hero section
const heroImage = "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1600";

// Add this image URL to the about section
const aboutImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600";

// Add this to your services array
const projects = [
  {
    category: "Pension & Investment",
    title: "Multi-County Property Development Portfolio",
    value: "USD 15M",
    description: "Comprehensive market research and feasibility study for pension scheme properties across Nairobi and Mombasa counties, spanning residential, commercial, and industrial sectors.",
    location: "Nairobi & Mombasa"
  },
  {
    category: "Residential Development",
    title: "Middle-Income Rental Market Strategy",
    value: "USD 40M",
    description: "Strategic market research, product development, pricing optimization, and sales strategy for middle-income rental developments in Nairobi.",
    location: "Nairobi"
  },
  {
    category: "Government & Urban Development",
    title: "National Mixed-Use Urban Development",
    value: "USD 90M",
    description: "Comprehensive market research and business case for a government-led urban development project encompassing residential, retail, office, hospitality, and industrial sectors.",
    location: "Nairobi Metropolitan"
  },
  {
    category: "Financial Services",
    title: "Premium Residential Development",
    value: "USD 40M",
    description: "Feasibility study for 200-acre residential development in Upper Hill Area for a leading insurance firm.",
    location: "Nairobi"
  },
  {
    category: "Real Estate Development",
    title: "Exclusive Gated Community",
    value: "USD 24M",
    description: "Market research and feasibility study for premium gated community development, expanding Phase 1 offering for a leading local developer.",
    location: "Nairobi Surrounds"
  }
];

// Add this component for animated statistics
const AnimatedStat = ({ value, label, prefix = "", suffix = "" }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      className="relative p-8 border border-luxury-gold/10 hover:border-luxury-gold/30 transition-all duration-500 bg-luxury-navy/30 backdrop-blur-sm"
    >
      <div className="absolute top-0 right-0 w-12 h-12">
        <div className="w-full h-full border-t border-r border-luxury-gold/20"></div>
      </div>
      <div className="text-center">
        <div className="text-3xl sm:text-4xl font-serif text-luxury-gold mb-2">
          {inView && (
            <CountUp
              start={0}
              end={parseFloat(value)}
              duration={2.5}
              prefix={prefix}
              suffix={suffix}
              decimals={value % 1 !== 0 ? 1 : 0}
            />
          )}
        </div>
        <p className="text-luxury-cream/60 text-sm uppercase tracking-wider">{label}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-12 h-12">
        <div className="w-full h-full border-b border-l border-luxury-gold/20"></div>
      </div>
    </motion.div>
  );
};

// Add this Footer component at the end of your App component
const Footer = () => (
  <footer className="bg-luxury-navy py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="text-luxury-gold text-2xl font-serif">A42 Consultants</div>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="#about" className="text-luxury-cream/80 hover:text-luxury-gold transition-colors duration-300">About Us</a>
          <a href="#services" className="text-luxury-cream/80 hover:text-luxury-gold transition-colors duration-300">Services</a>
          <a href="#projects" className="text-luxury-cream/80 hover:text-luxury-gold transition-colors duration-300">Projects</a>
          <a href="#contact" className="text-luxury-cream/80 hover:text-luxury-gold transition-colors duration-300">Contact</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-luxury-cream/60 text-sm">
        © {new Date().getFullYear()} A42 Consultants Limited. All rights reserved.
      </div>
    </div>
  </footer>
);

// First, add this helper function at the top of your file
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Update the mobile menu implementation
const MobileMenu = ({ isOpen, onClose }) => {
  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
    onClose(); // Close menu after clicking
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        y: isOpen ? 0 : -20
      }}
      transition={{ duration: 0.3 }}
      className={`${
        isOpen ? 'block' : 'hidden'
      } md:hidden absolute top-full left-0 right-0 bg-luxury-navy/95 backdrop-blur-lg border-b border-luxury-gold/10`}
    >
      <div className="px-4 py-2 space-y-1">
        <button
          onClick={() => handleClick('about')}
          className="block w-full text-left py-3 px-4 text-luxury-cream hover:text-luxury-gold hover:bg-luxury-navy/50 transition-all duration-300 uppercase text-sm tracking-widest"
        >
          About
        </button>
        <button
          onClick={() => handleClick('services')}
          className="block w-full text-left py-3 px-4 text-luxury-cream hover:text-luxury-gold hover:bg-luxury-navy/50 transition-all duration-300 uppercase text-sm tracking-widest"
        >
          Services
        </button>
        <button
          onClick={() => handleClick('projects')}
          className="block w-full text-left py-3 px-4 text-luxury-cream hover:text-luxury-gold hover:bg-luxury-navy/50 transition-all duration-300 uppercase text-sm tracking-widest"
        >
          Portfolio
        </button>
        <button
          onClick={() => handleClick('contact')}
          className="block w-full text-left py-3 px-4 text-luxury-cream hover:text-luxury-gold hover:bg-luxury-navy/50 transition-all duration-300 uppercase text-sm tracking-widest"
        >
          Contact
        </button>
      </div>
    </motion.div>
  );
};

// Update your header component to include the mobile menu
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-luxury-navy/90 backdrop-blur-sm border-b border-luxury-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-luxury-gold text-2xl font-serif">A42</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* ... your existing desktop nav ... */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-luxury-cream hover:text-luxury-gold transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // Close icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Menu icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Mobile Menu */}
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
};

// Update the Contact Section with email functionality
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    // Create mailto link
    const mailtoLink = `mailto:getrude@a42.co.ke?subject=Website Inquiry from ${formData.name}&body=${encodeURIComponent(emailBody)}`;

    // Open default email client
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-24 sm:py-32 bg-luxury-navy relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <span className="text-luxury-gold uppercase tracking-[0.2em] text-sm">Contact Us</span>
          <h2 className="mt-3 text-4xl font-serif text-luxury-cream">
            Get in Touch
          </h2>
          <div className="w-24 h-[2px] bg-luxury-gold mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-luxury-cream text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-luxury-gold/20 rounded-lg bg-luxury-cream/10 text-luxury-cream focus:outline-none focus:border-luxury-gold"
                required
              />
            </div>
            <div>
              <label className="block text-luxury-cream text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-luxury-gold/20 rounded-lg bg-luxury-cream/10 text-luxury-cream focus:outline-none focus:border-luxury-gold"
                required
              />
            </div>
            <div>
              <label className="block text-luxury-cream text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-luxury-gold/20 rounded-lg bg-luxury-cream/10 text-luxury-cream focus:outline-none focus:border-luxury-gold"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-luxury-gold text-luxury-navy rounded-lg hover:bg-luxury-cream transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Details */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            <div>
              <h5 className="text-2xl font-serif text-luxury-gold">Contact Information</h5>
              <p className="text-luxury-cream/80 leading-relaxed mt-4">
                For direct inquiries, please email us at:
              </p>
              <a
                href="mailto:getrude@a42.co.ke"
                className="text-luxury-gold mt-2 hover:text-luxury-cream transition-colors duration-300 block"
              >
                getrude@a42.co.ke
              </a>
            </div>
            <div>
              <h5 className="text-2xl font-serif text-luxury-gold">Office Location</h5>
              <p className="text-luxury-cream/80 leading-relaxed mt-4">
                Nairobi, Kenya
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

function App() {
  // Add this state at the top of your App component
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add this inside your App component
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: custom * 0.3
      }
    })
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-luxury-cream"
    >
      {/* Navigation - Smoother animation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
        className="bg-luxury-navy/95 backdrop-blur-sm fixed w-full z-50"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5">
          <h1 className="text-luxury-gold text-2xl sm:text-3xl font-serif tracking-wider">A42</h1>
          {/* Mobile Menu Button (you'll need to implement the toggle functionality) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-luxury-cream"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-sm tracking-widest">
            <button
              onClick={() => scrollToSection('services')}
              className="text-luxury-cream hover:text-luxury-gold transition-colors duration-300 uppercase"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-luxury-cream hover:text-luxury-gold transition-colors duration-300 uppercase"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-luxury-cream hover:text-luxury-gold transition-colors duration-300 uppercase"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-luxury-cream hover:text-luxury-gold transition-colors duration-300 uppercase"
            >
              Contact
            </button>
          </div>
        </div>
        {/* Mobile Navigation Menu (hidden by default) */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden px-4 py-2 bg-luxury-navy/95`}>
          <button
            onClick={() => scrollToSection('services')}
            className="block py-2 text-luxury-cream hover:text-luxury-gold transition-colors duration-300 uppercase text-sm tracking-widest"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block py-2 text-luxury-cream hover:text-luxury-gold transition-colors duration-300 uppercase text-sm tracking-widest"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="block py-2 text-luxury-cream hover:text-luxury-gold transition-colors duration-300 uppercase text-sm tracking-widest"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block py-2 text-luxury-cream hover:text-luxury-gold transition-colors duration-300 uppercase text-sm tracking-widest"
          >
            Contact
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-0">
        {/* Diagonal backgrounds with smoother animation */}
        <motion.div
          variants={slideVariants}
          custom="left"
          initial="initial"
          animate="animate"
          className="absolute top-0 left-0 w-1/2 h-screen bg-luxury-cream"
        />
        <motion.div
          variants={slideVariants}
          custom="right"
          initial="initial"
          animate="animate"
          className="absolute top-0 -right-1/4 w-2/3 h-screen bg-luxury-navy transform -skew-x-12"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-0 z-20"
        >
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <motion.span
              variants={fadeInUp}
              custom={1}
              className="text-luxury-gold uppercase tracking-[0.2em] text-xs sm:text-sm"
            >
              Premier Property Analytics & Advisory in Kenya
            </motion.span>

            <motion.div
              variants={fadeInUp}
              custom={2}
              className="relative"
            >
              <h2 className="text-[3.5rem] sm:text-[5rem] font-serif leading-[1.1] font-light relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 1.2
                  }}
                  className="relative inline-block"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-luxury-cream/80 to-transparent -z-10 blur-sm"></span>
                  <span className="text-luxury-navy relative z-10">Strategic Real</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 1.4
                  }}
                  className="relative inline-block"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-luxury-cream/80 to-transparent -z-10 blur-sm"></span>
                  <span className="text-luxury-gold relative z-10">Estate Intelligence</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 1.6
                  }}
                  className="relative inline-block"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-luxury-cream/80 to-transparent -z-10 blur-sm"></span>
                  <span className="text-luxury-cream relative z-10">& Advisory</span>
                </motion.div>
              </h2>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.8 }}
              className="h-[1px] bg-luxury-gold origin-left"
            />

            <motion.p
              variants={fadeInUp}
              custom={4}
              className="relative inline-block text-luxury-charcoal/90 text-lg sm:text-xl font-light max-w-xl z-10"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-luxury-cream/90 to-luxury-cream/50 -z-10 blur-sm"></span>
              <span className="relative z-10">
                Transforming Kenya's real estate landscape through data-driven insights, strategic analysis, and expert advisory services
              </span>
            </motion.p>

            <motion.button
              variants={fadeInUp}
              custom={5}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 sm:mt-8 border border-luxury-gold text-luxury-gold px-8 sm:px-12 py-3 sm:py-4 hover:bg-luxury-gold hover:text-luxury-navy transition-all duration-300 uppercase tracking-wider text-xs sm:text-sm"
            >
              Schedule Private Consultation
            </motion.button>
          </div>
        </motion.div>

        {/* Decorative elements with improved animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 45 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 1.4
          }}
          className="hidden sm:block absolute top-40 right-40 w-64 h-64 border border-luxury-gold/20"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: -45 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 1.6
          }}
          className="hidden sm:block absolute bottom-40 left-40 w-96 h-96 border border-luxury-gold/20"
        />
      </div>

      {/* Services Section with scroll animations */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 sm:py-32 bg-luxury-cream relative overflow-hidden"
      >
        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: -45 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-96 h-96 border border-luxury-gold/10"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <span className="text-luxury-gold uppercase tracking-[0.2em] text-sm">What We Do</span>
            <h2 className="mt-3 text-4xl font-serif text-luxury-navy">
              Our Services
            </h2>
            <div className="w-24 h-[2px] bg-luxury-gold mx-auto mt-6"></div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1
                    }
                  }
                }}
                className="group bg-white/70 backdrop-blur-sm p-8 hover:bg-white transition-all duration-500 border border-luxury-gold/20 hover:border-luxury-gold/40 rounded-lg"
              >
                {/* Service Icon */}
                <div className="w-12 h-12 bg-luxury-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-luxury-navy/10 transition-colors duration-300">
                  <i className={`fas ${service.icon} text-luxury-gold text-xl`}></i>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-serif text-luxury-navy mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-luxury-charcoal/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.div
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        className="relative bg-gradient-to-br from-luxury-navy via-luxury-navy/95 to-luxury-navy py-24 sm:py-32 overflow-hidden"
      >
        {/* Enhanced decorative elements */}
        <motion.div
          initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 45, scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="absolute top-0 right-0 w-[40rem] h-[40rem] border border-luxury-gold/10"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
          animate={{ opacity: 1, rotate: -45, scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          className="absolute bottom-0 left-0 w-[40rem] h-[40rem] border border-luxury-gold/10"
        />
        {/* Additional decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-navy via-luxury-navy/95 to-luxury-navy"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            variants={revealVariants}
            custom={0}
            className="text-center mb-20 sm:mb-28 space-y-4"
          >
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs sm:text-sm">About A42</span>
            <h3 className="text-4xl sm:text-5xl font-serif text-luxury-cream">
              <span className="block mb-2">Redefining Property</span>
              <span className="text-luxury-gold">Intelligence</span>
            </h3>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-8 h-[1px] bg-luxury-gold/30"></div>
              <div className="w-2 h-2 rotate-45 border border-luxury-gold"></div>
              <div className="w-24 h-[1px] bg-luxury-gold"></div>
              <div className="w-2 h-2 rotate-45 border border-luxury-gold"></div>
              <div className="w-8 h-[1px] bg-luxury-gold/30"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-24 items-center">
            {/* Enhanced Image Column */}
            <motion.div
              variants={revealVariants}
              custom={1}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Modern Analytics Office"
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-navy/30 to-transparent"></div>
              </div>
              {/* Decorative frames */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -right-6 w-48 h-48 border border-luxury-gold/30 z-0"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="absolute -top-6 -left-6 w-32 h-32 border border-luxury-gold/20 z-0"
              />
            </motion.div>

            {/* Enhanced Content Column */}
            <div className="space-y-8">
              {/* Mission Statement */}
              <div className="space-y-6">
                <h5 className="text-2xl font-serif text-luxury-gold">Our Mission</h5>
                <p className="text-luxury-cream/90 leading-relaxed text-lg">
                  Our mission is to deliver unparalleled market research services that enable our clients to achieve their strategic objectives in the real estate sector.
                </p>
              </div>

              {/* Vision Statement */}
              <div className="space-y-6">
                <h5 className="text-2xl font-serif text-luxury-gold">Our Vision</h5>
                <p className="text-luxury-cream/90 leading-relaxed text-lg">
                  We are committed to upholding the highest standards of accuracy, integrity, and professionalism in all our endeavors.
                </p>
              </div>

              {/* Key Figures Section */}
              <motion.div
                variants={fadeInUp}
                className="pt-12 border-t border-luxury-gold/10"
              >
                <h5 className="text-2xl font-serif text-luxury-gold mb-8 text-center">Our Impact</h5>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  <AnimatedStat
                    value={2}
                    prefix="KSh "
                    suffix="B+"
                    label="Portfolio Value Analyzed"
                  />
                  <AnimatedStat
                    value={50}
                    suffix="+"
                    label="Market Reports Generated"
                  />
                  <AnimatedStat
                    value={15}
                    suffix="+"
                    label="Corporate Partnerships"
                  />
                  <AnimatedStat
                    value={4}
                    label="Major Counties Covered"
                  />
                </div>
              </motion.div>

              {/* Company Overview */}
              <div className="space-y-6 pt-12 border-t border-luxury-gold/10">
                <p className="text-luxury-cream/80 leading-relaxed">
                  A42 Consultants Limited is a premier real estate consulting firm specializing in comprehensive market research and analysis.
                </p>

                <p className="text-luxury-cream/80 leading-relaxed">
                  Through our extensive network and data-driven approach, we've established ourselves as East Africa's leading property analytics authority, delivering customized research that aligns with each client's unique needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 sm:py-32 bg-luxury-cream relative overflow-hidden"
      >
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 45 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-96 h-96 border border-luxury-gold/10"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <span className="text-luxury-gold uppercase tracking-[0.2em] text-sm">Portfolio</span>
            <h2 className="mt-3 text-4xl font-serif text-luxury-navy">
              Notable Projects
            </h2>
            <div className="w-24 h-[2px] bg-luxury-gold mx-auto mt-6"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.2
                    }
                  }
                }}
                className="group bg-white/70 backdrop-blur-lg p-8 hover:bg-white transition-all duration-500 border border-luxury-gold/20 hover:border-luxury-gold/40 shadow-lg rounded-lg"
              >
                {/* Project Category and Value */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-luxury-gold text-sm uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-luxury-navy font-serif">
                    {project.value}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-serif text-luxury-navy mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-luxury-charcoal/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Location - Now as a simple footer */}
                <div className="pt-4 border-t border-luxury-gold/10">
                  <span className="text-luxury-charcoal/60 text-sm">
                    {project.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <ContactSection />
      <Footer />
    </motion.div>
  );
}

export default App;
