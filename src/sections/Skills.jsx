import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Front-End Development',
            skills: [
                { name: 'HTML5 / CSS3', level: 95 },
                { name: 'JavaScript (ES6+)', level: 90 },
                { name: 'React.js', level: 85 },
                { name: 'Tailwind CSS', level: 95 },
                { name: 'Bootstrap / jQuery', level: 85 },
            ],
        },
        {
            title: 'Backend & Tools',
            skills: [
                { name: '.NET', level: 60 },
                { name: 'Git / GitHub', level: 85 },
                { name: 'Figma to HTML', level: 98 },
                { name: 'Responsive Design', level: 100 },
                { name: 'Website Redesign', level: 90 },
            ],
        },
    ];

    return (
        <section id="skills" className="py-24 bg-dark-darker relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/5 blur-[120px] rounded-full" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary-500 font-display font-medium uppercase tracking-[0.2em] mb-4 block">
                            Expertise
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            My Technical <span className="gradient-text">Skillset</span>
                        </h2>
                        <p className="text-white/50 text-lg">
                            I'm constantly learning and expanding my toolkit to stay ahead of the curve in the ever-evolving tech landscape.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    {skillCategories.map((category, catIdx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, x: catIdx === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-4">
                                <span className="w-8 h-8 rounded-lg bg-primary-600/20 text-primary-500 flex items-center justify-center text-sm font-bold">
                                    {catIdx + 1}
                                </span>
                                {category.title}
                            </h3>

                            <div className="space-y-8">
                                {category.skills.map((skill, i) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="font-medium text-white/80">{skill.name}</span>
                                            <span className="text-sm font-bold text-primary-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.1 * i, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-primary-600 to-primary-400 shadow-[0_0_10px_rgba(14,165,233,0.3)]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Experience Icons/Marquee could go here */}
                <div className="mt-24 pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                    {/* These would be logos of some tech */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="h-10 text-xl font-bold font-display">REACT</div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="h-10 text-xl font-bold font-display">HTML5</div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="h-10 text-xl font-bold font-display">CSS3</div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="h-10 text-xl font-bold font-display">JS</div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="h-10 text-xl font-bold font-display">TAILWIND</div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="h-10 text-xl font-bold font-display">.NET</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
