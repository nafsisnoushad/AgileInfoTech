import React, { useEffect, useRef, useState } from 'react';
import { Users, Target, Eye, Award, BookOpen, Briefcase, CheckCircle, TrendingUp, Globe, Zap, Heart, Shield, Code, Cpu, Terminal, MapPin, Clock, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import careerCtaBg from '../assets/career-cta-bg.png';

/* ─── Intersection Observer hook for scroll reveal ─── */
function useScrollReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.15 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, visible];
}

function Careers() {
    const [heroRef, heroVisible] = useScrollReveal();


    return (
        <main style={{ paddingTop: '70px' }}>
            {/* ── HERO BANNER (MODEL DESIGN) ── */}
            <section
                className="section bg-blue-theme"
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '85vh',
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '100px'
                }}
            >
                {/* Background Decorative Elements */}
                <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div
                        ref={heroRef}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '4rem',
                            alignItems: 'start',
                            opacity: heroVisible ? 1 : 0,
                            transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 0.8s ease, transform 0.8s ease'
                        }}
                    >
                        {/* Left Column: Heading */}
                        <div >
                            <div style={{
                                display: 'inline-block', padding: '0.5rem 1.25rem',
                                background: 'var(--accent-light)', color: 'var(--accent-base)',
                                borderRadius: 'var(--border-radius-full)', fontSize: '0.875rem',
                                fontWeight: 700, marginBottom: '1.5rem',
                                border: '1px solid rgba(14,165,233,0.2)'
                            }}>
                                🚀 Join Our Team
                            </div>

                            <h1 className="section-title" style={{
                                fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                                letterSpacing: '-0.04em',
                                marginBottom: '1rem',
                                lineHeight: '0.9',
                                fontWeight: '800'
                            }}>
                                Build Your <br /> <span className="text-gradient">Career</span>
                            </h1>

                            <div style={{ width: '60px', height: '6px', background: 'var(--accent-base)', borderRadius: 'var(--border-radius-full)', marginTop: '2rem' }}></div>
                        </div>

                        {/* Right Column: Paragraphs */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="glass card" style={{ padding: '2.5rem', borderLeft: '4px solid var(--accent-base)' }}>
                                <p style={{ fontSize: '1.5rem', lineHeight: '1.5', color: 'var(--text-primary)', fontWeight: '600', letterSpacing: '-0.01em', margin: 0 }}>
                                    Join a community of innovators, thinkers, and builders who are shaping the future of technology.
                                </p>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '0 1rem' }}>
                                <p style={{ fontSize: '1.125rem', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
                                    At AgileInfoTech, we believe that our people are our greatest asset. We offer a collaborative and inclusive work environment where you can grow your skills, take on challenging projects, and make a real impact.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── JOIN THE TEAM CTA ── */}
            <section
                style={{
                    position: 'relative',
                    height: '500px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `url(${careerCtaBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden'
                }}
            >
                {/* Dark Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.7)',
                    zIndex: 1
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: '900',
                        color: 'white',
                        marginBottom: '2.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        lineHeight: '1.2'
                    }}>
                        BE A PART OF THE <br /> <span className="text-gradient">AGILEINFOTECH TEAM!</span>
                    </h2>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                        <button className="button-primary moving-btn" style={{
                            padding: '1.25rem 3rem',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            borderRadius: '12px',
                            minWidth: '200px',
                            background: 'var(--accent-base)',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            Internship
                        </button>
                        <button className="button-primary moving-btn" style={{
                            padding: '1.25rem 3rem',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            borderRadius: '12px',
                            minWidth: '200px',
                            background: 'var(--accent-base)',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            animationDelay: '1.5s'
                        }}>
                            Full time
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default Careers;
