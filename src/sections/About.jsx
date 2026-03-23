import React from 'react';
import { motion } from 'framer-motion';
import { Download, User, Briefcase, GraduationCap } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const About = () => {
    const stats = [
        { label: 'Years Experience', value: '2+' },
        { label: 'Projects Completed', value: '15+' },
        { label: 'Happy Clients', value: '10+' },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-dark">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-primary-500/20 rounded-2xl blur-2xl group-hover:bg-primary-500/30 transition-colors" />
                            <div className="relative aspect-square md:aspect-video lg:aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 glass">
                                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10" />
                                <img
                                    src={profileImg}
                                    alt="Mohsin Ali Salik"
                                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            {/* Floating Stat Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl border border-white/10 hidden md:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                                        <Briefcase size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold">Software Engineer</h4>
                                        <p className="text-white/40 text-sm">Full-Time Freelancer</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary-500 font-display font-medium uppercase tracking-[0.2em] mb-4 block">
                                Who Am I?
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                                Crafting Digital <span className="gradient-text">Experiences</span> With Passion
                            </h2>
                            <p className="text-white/60 text-lg mb-8 leading-relaxed">
                                I am Mohsin Ali Salik, a dedicated Software Engineer with a passion for building scalable and maintainable web applications. With expertise in Front-End Development and a keen eye for design, I bridge the gap between complex backend logic and beautiful frontend interfaces.
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
                                {stats.map((stat, i) => (
                                    <div key={stat.label} className="p-4 rounded-xl glass border border-white/5">
                                        <h3 className="text-3xl font-bold text-primary-400 mb-1">{stat.value}</h3>
                                        <p className="text-white/40 text-xs uppercase tracking-wider">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-500 flex-shrink-0 mt-1">
                                        <GraduationCap size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold">Education</h4>
                                        <p className="text-white/50 text-sm italic">Bachelors in Software Engineering</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-500 flex-shrink-0 mt-1">
                                        <Briefcase size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold">Current Status</h4>
                                        <p className="text-white/50 text-sm">Available for Full-time Roles & Projects</p>
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary flex items-center gap-2 px-8 py-3 text-lg"
                            >
                                Download CV <Download size={20} />
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
