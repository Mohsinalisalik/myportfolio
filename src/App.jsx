import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time for initial assets
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Preloader />
            <ScrollProgressBar />
            {!loading && (
                <div className="bg-dark min-h-screen selection:bg-primary-500/30 selection:text-primary-200">
                    <Navbar />
                    <main>
                        <Hero />
                        <About />
                        <Skills />
                        <Services />
                        <Projects />
                        <Experience />
                        <Contact />
                    </main>
                    <Footer />
                </div>
            )}
        </>
    );
}

export default App;
