import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: 'Software Engineer Intern',
            company: 'Vantage Soft Pvt Ltd',
            period: '2023 - Present',
            description: 'Developing scalable web applications using React.js and ASP.NET Core. Built RESTful APIs, implemented real-time features using SignalR, and designed responsive user interfaces. Worked in a collaborative team environment following clean architecture principles.',
            type: 'Internship',
        },
        {
            role: 'Freelance Frontend Developer',
            company: 'Fiverr',
            period: '2023 - Present',
            description: 'Providing freelance services including Figma/XD to HTML conversion, responsive website design, and UI fixes. Delivered multiple client projects with a focus on clean code, performance, and modern UI/UX standards.',
            type: 'Freelance',
        },
        {
            role: 'Full Stack Developer (Academic Projects)',
            company: 'DPL / Personal Projects',
            period: '2023',
            description: 'Developed full-stack applications including a Ground Booking System and Smart Ambulance System using .NET, Flutter, and Firebase. Implemented APIs, authentication, and real-time functionalities.',
            type: 'Project',
        },
        {
            role: 'Web Development Trainee',
            company: 'PTCL (Pakistan Telecommunication Company Limited)',
            period: '2022 - 2023',
            description: 'Gained hands-on experience in web development using HTML, CSS, JavaScript, and Bootstrap. Learned debugging, system workflows, and basic backend integration in a professional environment.',
            type: 'Traineeship',
        },
        {
            role: 'Frontend Developer Trainee',
            company: 'NAVTTC (National Vocational and Technical Training Commission)',
            period: '2022',
            description: 'Completed intensive training in frontend development, focusing on responsive design, JavaScript fundamentals, and UI/UX best practices. Built multiple projects to strengthen practical skills.',
            type: 'Training',
        },
    ];

    return (
        <section id="experience" className="py-24 bg-dark relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary-500 font-display font-medium uppercase tracking-[0.2em] mb-4 block">
                            Journey
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Professional <span className="gradient-text">Experience</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-600 via-primary-500/20 to-transparent transform -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.role + exp.company}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`relative flex flex-col md:flex-row items-center justify-between gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-dark border-4 border-primary-600 rounded-full transform -translate-x-1/2 z-10 hidden md:flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-[45%] p-8 rounded-3xl glass border border-white/5 hover:border-primary-500/20 transition-all group">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-primary-600/10 rounded-xl flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform">
                                            <Briefcase size={22} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold font-display">{exp.role}</h3>
                                            <div className="flex items-center gap-2 text-white/40 text-sm mt-1">
                                                <Building2 size={14} />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-white/50 mb-6 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-white/60 text-xs font-semibold tracking-wide uppercase border border-white/10">
                                        <Calendar size={12} />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                {/* Spacer for MD screens */}
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
