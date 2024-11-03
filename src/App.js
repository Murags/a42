import './App.css';
import { motion } from 'framer-motion';

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

function App() {
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
          <button className="md:hidden text-luxury-cream">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-sm tracking-widest">
            <a href="#" className="text-luxury-cream hover:text-luxury-gold transition-colors duration-300 uppercase">Services</a>
            <a href="#" className="text-luxury-cream hover:text-luxury-gold transition-colors duration-300 uppercase">Portfolio</a>
            <a href="#" className="text-luxury-cream hover:text-luxury-gold transition-colors duration-300 uppercase">Contact</a>
          </div>
        </div>
        {/* Mobile Navigation Menu (hidden by default) */}
        <div className="hidden md:hidden px-4 py-2 bg-luxury-navy/95">
          <a href="#" className="block py-2 text-luxury-cream hover:text-luxury-gold transition-colors duration-300 uppercase text-sm tracking-widest">Services</a>
          <a href="#" className="block py-2 text-luxury-cream hover:text-luxury-gold transition-colors duration-300 uppercase text-sm tracking-widest">Portfolio</a>
          <a href="#" className="block py-2 text-luxury-cream hover:text-luxury-gold transition-colors duration-300 uppercase text-sm tracking-widest">Contact</a>
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="max-w-7xl mx-auto py-16 sm:py-32 px-4 sm:px-6 relative"
      >
        {/* Services content with variants */}
        <motion.div
          variants={revealVariants}
          custom={0}
          className="text-center mb-16 sm:mb-24 space-y-4"
        >
          <span className="text-luxury-gold uppercase tracking-[0.2em] text-xs sm:text-sm">Our Expertise</span>
          <h3 className="text-3xl sm:text-4xl font-serif text-luxury-navy">Comprehensive Property Intelligence</h3>
          <div className="w-16 sm:w-24 h-[2px] bg-luxury-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12">
          {[
            {
              title: 'Market Research & Analytics',
              description: "In-depth analysis of Kenya's property markets, utilizing advanced data analytics to provide actionable insights and trend forecasting."
            },
            {
              title: 'Investment Advisory',
              description: 'Strategic consultation for property investments in Kenya, including market entry strategies, portfolio optimization, and risk assessment.'
            },
            {
              title: 'Property Valuation',
              description: 'Professional property valuation services backed by comprehensive market data and local expertise across residential and commercial sectors.'
            }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              variants={revealVariants}
              custom={index + 1}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white p-8 sm:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-luxury-sand/20 relative"
            >
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 border-t-2 border-r-2 border-luxury-gold/20 group-hover:border-luxury-gold/40 transition-colors duration-300"></div>
              <div className="w-8 sm:w-12 h-[1px] bg-luxury-gold mb-6 sm:mb-8 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300"></div>
              <span className="text-luxury-gold/40 text-3xl sm:text-5xl font-serif absolute top-6 sm:top-8 right-6 sm:right-8">0{index + 1}</span>
              <h4 className="text-lg sm:text-xl font-serif text-luxury-navy mb-3 sm:mb-4">{service.title}</h4>
              <p className="text-sm sm:text-base text-luxury-charcoal/80 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* About Us Section */}
      <motion.div
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
              <div className="aspect-[4/3] relative z-10 overflow-hidden bg-gradient-to-br from-luxury-navy via-luxury-navy/95 to-luxury-navy">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Decorative elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-32 h-32 border border-luxury-gold/30 rotate-45"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="absolute w-48 h-48 border border-luxury-gold/20 -rotate-45"
                  />
                  <span className="absolute text-luxury-gold text-4xl sm:text-5xl font-serif">A42</span>
                </div>
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
            <div className="space-y-10">
              <motion.div
                variants={revealVariants}
                custom={2}
                className="space-y-8"
              >
                <h4 className="text-3xl sm:text-4xl font-serif text-luxury-cream font-light">
                  East Africa's Premier
                  <span className="block text-luxury-gold mt-2">Analytics Authority</span>
                </h4>
                <div className="w-16 h-[1px] bg-gradient-to-r from-luxury-gold via-luxury-gold to-transparent"></div>
                <p className="text-luxury-cream/80 leading-relaxed text-lg">
                  At A42, we combine cutting-edge analytics with deep market knowledge to deliver unparalleled property intelligence services. Our team of experts provides strategic insights and advisory services to investors, developers, and property stakeholders across Kenya's dynamic real estate market.
                </p>
              </motion.div>

              {/* Enhanced Statistics */}
              <motion.div
                variants={revealVariants}
                custom={3}
                className="grid grid-cols-2 gap-8 sm:gap-12 pt-8"
              >
                {[
                  { number: "50+", label: "Market Reports Generated" },
                  { number: "KSh 2B+", label: "Portfolio Value Analyzed" },
                  { number: "15+", label: "Corporate Partnerships" },
                  { number: "4", label: "Major Counties Covered" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="group relative p-6 border border-luxury-gold/10 hover:border-luxury-gold/30 transition-colors duration-500"
                  >
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-luxury-gold/20 group-hover:border-luxury-gold/40 transition-colors duration-300"></div>
                    <p className="text-luxury-gold text-4xl sm:text-5xl font-serif mb-2">{stat.number}</p>
                    <p className="text-luxury-cream/60 text-sm uppercase tracking-wider">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default App;
