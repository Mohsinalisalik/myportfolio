import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, ExternalLink } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            <nav className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'
                }`}>
                <div className={`flex items-center justify-between rounded-full px-6 py-2 transition-all duration-300 ${isScrolled ? 'glass-dark shadow-lg' : 'bg-transparent border border-white/5'
                    }`}>
                    {/* Logo */}
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center font-bold text-lg group-hover:rotate-12 transition-transform">
                            M
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
                            Salik<span className="text-primary-500">.</span>
                        </span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Socials & CTA */}
                    <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-8">
                        <a href="https://github.com/MohsinAliSalik" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/mohsin-ali-salik-a1143a284" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#contact" className="btn-primary text-sm flex items-center gap-2">
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-white/70 hover:text-white transition-colors"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-4 right-4 mt-2 md:hidden glass-dark rounded-2xl border border-white/10 overflow-hidden shadow-2xl z-50"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6 items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-white/70 hover:text-primary-500 transition-colors w-full text-center py-2 cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-8 mt-2 pt-6 border-t border-white/10 w-full justify-center">
                                <a href="https://github.com/MohsinAliSalik" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors cursor-pointer p-2">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/mohsin-ali-salik-a1143a284" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors cursor-pointer p-2">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary w-full text-center mt-2 cursor-pointer relative z-50">
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
