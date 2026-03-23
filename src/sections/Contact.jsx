import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-dark-darker relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary-500 font-display font-medium uppercase tracking-[0.2em] mb-4 block">
                            Reach Out
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Let's Work <span className="gradient-text">Together</span>
                        </h2>
                        <p className="text-white/50 text-lg">
                            Have a project in mind or want to say hello? I'm always open to discussing new opportunities.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Info Side */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="p-8 rounded-3xl glass border border-white/5 space-y-10"
                        >
                            <div>
                                <h3 className="text-2xl font-display font-bold mb-6">Contact Info</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Email Me</p>
                                            <a href="mailto:mohsinalisalik2002@gmail.com" className="text-lg font-medium hover:text-primary-400 transition-colors">
                                                mohsinalisalik2002@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Call Me</p>
                                            <p className="text-lg font-medium">+92 3487147639</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Location</p>
                                            <p className="text-lg font-medium tracking-wide">Islamabad, Pakistan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-display font-bold mb-4">Follow Me</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all">
                                        <Github size={20} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/mohsin-ali-salik-a1143a284" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all">
                                        <Twitter size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-3">
                        <motion.form
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="p-8 md:p-12 rounded-3xl glass border border-white/5 space-y-6"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/60 ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary-500 focus:outline-none transition-colors"
                                        placeholder="Mohsin Ali Salik"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/60 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary-500 focus:outline-none transition-colors"
                                        placeholder="mohsinalisalik2002@gmail.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/60 ml-1">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary-500 focus:outline-none transition-colors"
                                    placeholder="How can I help you?"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/60 ml-1">Message</label>
                                <textarea
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary-500 focus:outline-none transition-colors min-h-[150px] resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-primary w-full py-5 text-lg font-bold flex items-center justify-center gap-3 group"
                            >
                                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
