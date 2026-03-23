import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, ArrowRight, Download } from 'lucide-react';
import Scene from '../components/Scene';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* 3D Scene Background */}
            <Scene />

            {/* Background Animated Gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-700" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary-400 uppercase glass rounded-full border border-primary-500/20">
                        Available for Projects
                    </span>
                    <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
                        Hi, I'm <span className="gradient-text">Mohsin Ali Salik</span>
                    </h1>
                    <h2 className="text-xl md:text-3xl font-medium text-white/80 mb-8 h-10">
                        <span className="text-white/60">I am a </span>
                        <span className="text-primary-400">
                            <Typewriter
                                words={['Software Engineer', 'Front-End Developer', 'Full-Stack Developer', 'UI/UX Enthusiast']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-white/60 text-lg mb-10 leading-relaxed">
                        I craft modern, high-performance, and visually stunning web applications with a focus on user experience and clean architecture.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary flex items-center gap-2 text-lg px-8 py-3"
                        >
                            View My Work <ArrowRight size={20} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-outline flex items-center gap-2 text-lg px-8 py-3"
                        >
                            Contant Me
                        </motion.a>
                    </div>

                    <div className="flex items-center justify-center gap-6">
                        <a href="#" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
                            <Github size={20} />
                            <span className="text-sm font-medium">GitHub</span>
                        </a>
                        <div className="w-1 h-1 bg-white/10 rounded-full" />
                        <a href="#" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
                            <Linkedin size={20} />
                            <span className="text-sm font-medium">LinkedIn</span>
                        </a>
                        <div className="w-1 h-1 bg-white/10 rounded-full" />
                        <a href="#" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
                            <span className="text-sm font-medium">Fiverr</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-6 h-10 border-2 border-white/10 rounded-full p-1">
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-primary-500 rounded-full mx-auto"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
