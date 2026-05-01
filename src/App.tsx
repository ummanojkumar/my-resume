
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronRight,
  Send,
  MessageCircle,
  Award,
  BookOpen,
  Code,
  Briefcase,
  Menu,
  X,
  // Added missing Database import
  Database
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  USER_INFO, 
  EXPERIENCES, 
  PROJECTS, 
  SKILL_GROUPS, 
  CAPABILITIES,
  EDUCATION 
} from './utils/constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative min-h-screen">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 bg-slate-950 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">
                M
              </div>
              <span className="hidden sm:block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                U M Manoj Kumar
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium capitalize transition-all duration-300 ${
                      activeSection === item ? 'text-sky-400 bg-sky-400/10' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2 text-slate-400 hover:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-slate-800"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {['home', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 capitalize"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                Available for New Opportunities
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight">
                Backend <span className="text-sky-400">Architect.</span><br />
                Full Stack <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500">Visionary.</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                I'm <span className="text-white font-semibold">U M Manoj Kumar</span>, a Senior Java Backend Developer at PayPal (via Aditi) with 4+ years of experience building mission-critical fintech systems for DBS Bank and beyond.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#contact" className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-bold transition-all flex items-center gap-2 shadow-lg shadow-sky-500/25">
                  Hire Me <ChevronRight size={18} />
                </a>
                <div className="flex items-center gap-4">
                  <a href={USER_INFO.socials.github} target="_blank" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-all">
                    <FaGithub size={20} />
                  </a>
                  <a href={USER_INFO.socials.linkedin} target="_blank" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-all">
                    <FaLinkedin size={20} />
                  </a>
                  <a href={USER_INFO.socials.whatsapp} target="_blank" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-all">
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-3xl rotate-6 opacity-20 blur-2xl"></div>
                <div className="relative z-10 w-full h-full bg-slate-800 border-2 border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/manoj/600/600" 
                    alt="U M Manoj Kumar" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 to-transparent">
                    <p className="text-xs font-mono text-sky-400 mb-1">&gt; Current_Role</p>
                    <p className="text-white font-bold">Java Backend Developer II @ PayPal</p>
                  </div>
                </div>
                {/* Floatings items */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 p-4 bg-slate-900 border border-slate-700 rounded-2xl shadow-xl z-20"
                >
                  <Code className="text-sky-400" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }} 
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 p-4 bg-slate-900 border border-slate-700 rounded-2xl shadow-xl z-20"
                >
                  <Database className="text-indigo-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-sky-400 font-mono text-sm tracking-widest uppercase mb-2">Professional Path</h2>
                <h3 className="text-4xl font-bold">Work Experience</h3>
              </div>
              <div className="text-slate-500 font-mono">Total 4+ Years Experience</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="group bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/50 p-8 rounded-3xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Briefcase size={80} />
                  </div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                      <p className="text-sky-400 font-bold">{exp.period}</p>
                      <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                      <div className="flex items-center gap-2 text-slate-400">
                        <span className="font-semibold text-slate-300">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  {exp.client && (
                    <div className="mb-4 inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
                      Client: {exp.client}
                    </div>
                  )}
                  <p className="text-slate-400 leading-relaxed mb-6 italic">
                    {exp.description}
                  </p>
                  <div className="flex items-center gap-2 text-sky-400 text-sm font-semibold cursor-pointer group-hover:gap-4 transition-all">
                    View Project Details <ChevronRight size={16} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Capabilities / Specialties */}
        <section className="py-24 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4">Technical Prowess</h3>
              <p className="text-slate-400 max-w-2xl mx-auto">Beyond just coding, I focus on engineering principles that ensure high availability, scalability, and security.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CAPABILITIES.map((cap, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:bg-slate-800 transition-colors"
                >
                  <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-400 mb-4">
                    {cap.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{cap.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-sky-400 font-mono text-sm tracking-widest uppercase mb-2">My Works</h2>
              <h3 className="text-4xl font-bold">Featured Projects</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-sky-500/30 transition-all group"
                >
                  <div className="h-48 bg-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-slate-700 group-hover:text-sky-500/40 transition-colors">{idx + 1}</span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex-1">
                      <span className="text-sky-400 font-mono text-xs uppercase font-bold tracking-tighter mb-2 block">{project.subtitle}</span>
                      <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                      <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3 italic">
                        "{project.description}"
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-800 text-slate-400 rounded text-[10px] font-mono border border-slate-700 uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-slate-900/50 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
             <div className="mb-16 text-center">
                <h2 className="text-4xl font-bold">Skills & Technologies</h2>
                <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {SKILL_GROUPS.map((group, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 bg-slate-950 border border-slate-800 rounded-3xl"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      {group.icon}
                      <h4 className="text-lg font-bold">{group.title}</h4>
                    </div>
                    <div className="space-y-3">
                      {group.skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-2 group">
                          <div className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-sky-400 transition-colors"></div>
                          <span className="text-slate-400 group-hover:text-white transition-colors">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
             </div>

             <div className="mt-20 p-12 bg-gradient-to-r from-sky-900/20 to-indigo-900/20 border border-slate-700 rounded-3xl flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 space-y-4">
                  <h4 className="text-2xl font-bold flex items-center gap-2">
                    <Award className="text-amber-400" /> Certifications
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-slate-300 font-medium">
                    <li className="flex items-center gap-3"><ChevronRight size={14} className="text-sky-400"/> Spring, SpringBoot & Hibernate</li>
                    <li className="flex items-center gap-3"><ChevronRight size={14} className="text-sky-400"/> AWS Cloud Practitioner</li>
                    <li className="flex items-center gap-3"><ChevronRight size={14} className="text-sky-400"/> MicroServices with Spring Cloud</li>
                    <li className="flex items-center gap-3"><ChevronRight size={14} className="text-sky-400"/> Python & JavaScript</li>
                    <li className="flex items-center gap-3"><ChevronRight size={14} className="text-sky-400"/> Docker & Figma</li>
                  </ul>
                </div>
                <div className="flex-1 space-y-4 border-l border-slate-700 pl-0 md:pl-10">
                  <h4 className="text-2xl font-bold flex items-center gap-2">
                    <BookOpen className="text-sky-400" /> Education
                  </h4>
                  {EDUCATION.map((edu, i) => (
                    <div key={i} className="space-y-1">
                      <p className="text-white font-bold">{edu.degree}</p>
                      <p className="text-slate-400 text-sm">{edu.school} • {edu.period}</p>
                      <p className="text-sky-400 font-mono text-xs">{edu.score}</p>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-sky-400 font-mono text-sm uppercase tracking-widest mb-2">Get in touch</h2>
                  <h3 className="text-5xl font-extrabold text-white mb-6">Let's Build Something <span className="text-sky-400">Epic.</span></h3>
                  <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                    Interested in working together or just want to chat about Spring Boot and Microservices? Drop me a message!
                  </p>
                </div>

                <div className="space-y-6">
                  <a href={`mailto:${USER_INFO.email}`} className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-sky-500/50 transition-all group">
                    <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Email Me</p>
                      <p className="text-white font-bold">{USER_INFO.email}</p>
                    </div>
                  </a>

                  <a href={`tel:${USER_INFO.phone}`} className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-all group">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Call Me</p>
                      <p className="text-white font-bold">{USER_INFO.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-2xl group">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Current Location</p>
                      <p className="text-white font-bold">{USER_INFO.location}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-4">Find me on social</p>
                  <div className="flex flex-wrap gap-4">
                    <a href={USER_INFO.socials.whatsapp} target="_blank" className="p-3 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white rounded-full transition-all">
                      <MessageCircle size={24} />
                    </a>
                    <a href={USER_INFO.socials.linkedin} target="_blank" className="p-3 bg-sky-500/10 hover:bg-sky-500 text-sky-400 hover:text-white rounded-full transition-all">
                      <FaLinkedin size={24} />
                    </a>
                    <a href={USER_INFO.socials.instagram} target="_blank" className="p-3 bg-pink-500/10 hover:bg-pink-500 text-pink-400 hover:text-white rounded-full transition-all">
                      <FaInstagram size={24} />
                    </a>
                    <a href={USER_INFO.socials.facebook} target="_blank" className="p-3 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white rounded-full transition-all">
                      <FaFacebook size={24} />
                    </a>
                    <a href={USER_INFO.socials.github} target="_blank" className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-full transition-all">
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl relative"
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-400 ml-1">Full Name</label>
                      <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-all text-white" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-400 ml-1">Email Address</label>
                      <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-all text-white" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-400 ml-1">Subject</label>
                    <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-all text-white" placeholder="Project Consultation" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-400 ml-1">Message</label>
                    <textarea rows={5} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-all text-white resize-none" placeholder="Hey Manoj, I have a project in mind..."></textarea>
                  </div>
                  <button className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20">
                    Send Message <Send size={18} />
                  </button>
                </form>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-500/10 blur-3xl -z-10 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
             <div className="w-8 h-8 bg-sky-500 rounded flex items-center justify-center font-bold text-white">M</div>
             <span className="text-xl font-bold">U M Manoj Kumar</span>
          </div>
          <p className="text-slate-500 text-sm italic">"Designing systems today that handle the scale of tomorrow."</p>
          <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-900">
            <p className="text-slate-500 text-xs">© 2026 U M Manoj Kumar. All rights reserved.</p>
            <a href={USER_INFO.socials.blog} target="_blank" className="text-xs text-sky-400 hover:underline flex items-center gap-1">Visit Blog <ExternalLink size={10} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
