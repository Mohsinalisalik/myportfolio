import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

import mohsinVideo from '../assets/Mohsin project.mp4';

const Projects = () => {
    const projects = [
        {
            title: 'Huderra Fragrances',
            description: 'A premium ecommerce platform for luxury fragrances and perfumes, featuring an elegant UI and seamless shopping experience.',
            tech: ['React', 'E-commerce', 'Web Design'],
            github: '#',
            link: 'http://huderrafragrances.com/',
            icon: <Code />,
        },
        {
            title: 'Ecommerce Web App',
            description: 'A modern, high-performance ecommerce platform with secure payments, real-time inventory tracking, and an intuitive shopping experience.',
            tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
            github: '#',
            link: '#',
            icon: <Code />,
            video: mohsinVideo,
        },
        {
            title: 'Parking Management System',
            description: 'Automated parking slot allocation and billing system with IoT integration concepts.',
            tech: ['JavaScript', 'Bootstrap', 'Firebase', 'CSS'],
            github: '#',
            link: '#',
            icon: <Code />,
        },
        {
            title: 'Smart Ambulance System',
            description: 'Emergency response optimization system that helps ambulances find the fastest routes to hospitals.',
            tech: ['.NET', 'C#', 'SQL Server', 'React'],
            github: '#',
            link: '#',
            icon: <Code />,
        },
        {
            title: 'Typing Test Website',
            description: 'A professional platform to test and improve typing speed with detailed performance analytics.',
            tech: ['JavaScript', 'HTML5', 'CSS3', 'Framer Motion'],
            github: '#',
            link: '#',
            icon: <Code />,
        },
    ];

    return (
        <section id="projects" className="py-24 bg-dark-darker relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary-500 font-display font-medium uppercase tracking-[0.2em] mb-4 block">
                                Portfolio
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                                Featured <span className="gradient-text">Projects</span>
                            </h2>
                            <p className="text-white/50 text-lg">
                                A selection of my recent works across different industries and technologies.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <a href="https://github.com/MohsinAliSalik" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
                            Explore More on GitHub <ExternalLink size={18} />
                        </a>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="group relative rounded-3xl overflow-hidden glass border border-white/5 hover:border-primary-500/30 transition-all duration-500"
                        >
                            {/* Project Media Wrapper */}
                            <div className="aspect-video bg-dark-light overflow-hidden relative">
                                {project.video ? (
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                                            <Code size={100} className="text-primary-500/20" />
                                        </div>
                                    </>
                                )}

                                {/* Overlay for Tech Badges visibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60" />

                                {/* Tech Badges */}
                                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-dark/80 backdrop-blur-md rounded-full border border-white/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-display font-bold mb-4">{project.title}</h3>
                                <p className="text-white/40 mb-8 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                                    <a href={project.github} className="flex items-center gap-2 text-white/40 hover:text-primary-400 transition-colors">
                                        <Github size={18} />
                                        <span className="text-sm font-medium">Source</span>
                                    </a>
                                    <a href={project.link} className="flex items-center gap-2 text-white/40 hover:text-primary-400 transition-colors">
                                        <ExternalLink size={18} />
                                        <span className="text-sm font-medium">Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
