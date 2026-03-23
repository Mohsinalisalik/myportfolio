import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-darker pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
                    <div className="text-center md:text-left">
                        <a href="#" className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center font-bold text-xl">
                                M
                            </div>
                            <span className="font-display font-bold text-2xl tracking-tight">
                                Salik<span className="text-primary-500">.</span>
                            </span>
                        </a>
                        <p className="text-white/40 max-w-sm">
                            Designing and developing premium digital experiences for forward-thinking clients and brands.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all text-white/60 hover:text-white">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/mohsin-ali-salik-a1143a284" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all text-white/60 hover:text-white">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all text-white/60 hover:text-white">
                                <Twitter size={20} />
                            </a>
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="btn-outline px-4 py-2 flex items-center gap-2 group text-sm"
                        >
                            Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-white/40 text-sm">
                        © {new Date().getFullYear()} Mohsin Ali Salik. All rights reserved.
                    </div>
                    <div className="flex items-center gap-1.5 text-white/40 text-sm">
                        Made with <Heart size={14} className="text-primary-500 fill-primary-500" /> by Mohsin
                    </div>
                    <div className="flex gap-6 text-sm text-white/40">
                        <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
