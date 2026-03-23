import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Smartphone, Search, Paintbrush, ArrowUpRight } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Front-End Development',
            description: 'Building responsive, high-performance web applications using modern frameworks and best practices.',
            icon: <Code />,
        },
        {
            title: 'Responsive Web Design',
            description: 'Ensuring your website looks and works perfectly on all devices, from mobile to 4K desktops.',
            icon: <Smartphone />,
        },
        {
            title: 'Figma to HTML',
            description: 'Pixel-perfect conversion of designs from Figma, XD, or Sketch into clean, optimized code.',
            icon: <Layout />,
        },
        {
            title: 'Website Redesign',
            description: 'Modernizing legacy websites to improve performance, SEO, and overall user experience.',
            icon: <ArrowUpRight />,
        },
        {
            title: 'SEO Optimization',
            description: 'Implementing technical SEO best practices to improve your visibility on search engines.',
            icon: <Search />,
        },
        {
            title: 'UI/UX Enhancement',
            description: 'Improving user engagement through intuitive design patterns and smooth micro-interactions.',
            icon: <Paintbrush />,
        },
    ];

    return (
        <section id="services" className="py-24 bg-dark relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary-500 font-display font-medium uppercase tracking-[0.2em] mb-4 block">
                            Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            What I <span className="gradient-text">Offer</span>
                        </h2>
                        <p className="text-white/50 text-lg">
                            Providing end-to-end digital solutions tailored to your business needs and goals.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl glass border border-white/5 group hover:border-primary-500/30 transition-all"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary-600/10 flex items-center justify-center text-primary-500 mb-6 group-hover:scale-110 transition-transform">
                                {React.cloneElement(service.icon, { size: 32 })}
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                            <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
