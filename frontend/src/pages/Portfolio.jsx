import React, { useEffect, useRef, useState } from 'react';
import { Users, Target, Eye, Award, BookOpen, Briefcase, CheckCircle, TrendingUp, Globe, Zap, Heart, Shield, Code, Cpu, Terminal, ExternalLink, Layout, Smartphone, Database } from 'lucide-react';
import Footer from '../components/Footer';
import travelmate from '../assets/travalmate.png';
import Arjangroup from '../assets/Arjan.png';
import goodwillImg from '../assets/Good Will.webp';
import lekshmiImg from '../assets/lekshmi.webp';
import tscImg from '../assets/TSC Crop.webp';
import tthImg from '../assets/TTh 2.webp';
import agTechnosImg from '../assets/AG_Technos.webp';
import subbiahImg from '../assets/subbiah.webp';

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

function Portfolio() {
    const [heroRef, heroVisible] = useScrollReveal();
    const [activeTab, setActiveTab] = useState('Clientele'); // 'Clientele' or 'Websites'

    const websites = [
        {
            title: "The Travelmate Holidays",
            location: "Kerala, IND",
            image: travelmate,
            link: "https://www.travelmateholidays.com/"
        },
        {
            title: "Arjan Group",
            location: "Kerala, IND",
            image: Arjangroup,
            link: "https://arjangroup.in/"
        },
        {
            title: "Lekshmi Bakers",
            location: "Kerala, IND",
            image: lekshmiImg,
            link: "#"
        },
        {
            title: "Good Will Holidays",
            location: "Kerala, IND",
            image: goodwillImg,
            link: "#"
        },
        {
            title: "Trivandrum Smart Cabs",
            location: "Kerala, IND",
            image: tscImg,
            link: "#"
        },
        // {
        //     title: "Lekshmi Electricals",
        //     location: "Kerala, IND",
        //     image: tthImg,
        //     link: ""
        // },
        {
            title: "Subbiah Jewellers",
            location: "Kerala, IND",
            image: subbiahImg,
            link: "#"
        }
    ];

    const clientele = [
        { name: "Good Will", logo: goodwillImg },
        { name: "Lekshmi", logo: lekshmiImg },
        { name: "TSC", logo: tscImg },
        { name: "TTh", logo: tthImg },
        { name: "AG Technos", logo: agTechnosImg },
        { name: "Subbiah Jewellers", logo: subbiahImg }

    ];

    return (
        <main style={{ paddingTop: '70px' }}>
            {/* ── HERO BANNER (MODEL DESIGN) ── */}
            <section
                className="section"
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '60vh', // Reduced height as it might be the 'white portion'
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '100px',
                    paddingBottom: '0',
                    background: 'white'
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
                        <div style={{ left: '0', top: '0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <h1 className="section-title" style={{
                                fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                                letterSpacing: '-0.04em',
                                marginBottom: '1rem',
                                lineHeight: '0.9',
                                fontWeight: '800'
                            }}>
                                Our <br /> <span className="text-gradient">Portfolio</span>
                            </h1>

                            <div style={{ width: '60px', height: '6px', background: 'var(--accent-base)', borderRadius: 'var(--border-radius-full)', marginTop: '2rem' }}></div>
                        </div>

                        {/* Right Column: Paragraphs */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="glass card" style={{ padding: '2.5rem', borderLeft: '4px solid var(--accent-base)' }}>
                                <p style={{ fontSize: '1.5rem', lineHeight: '1.5', color: 'var(--text-primary)', fontWeight: '600', letterSpacing: '-0.01em', margin: 0 }}>
                                    A showcase of our digital excellence, innovation, and successful client collaborations.
                                </p>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1rem 1rem' }}>
                                <p style={{ fontSize: '1.125rem', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
                                    Our portfolio reflects our commitment to quality and our ability to tackle diverse challenges across various industries. Each project is a testament to our technical prowess and our focus on delivering exceptional user experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROJECTS GRID (New Section) ── */}
            <section id="projects" className="section" style={{ background: 'linear-gradient(135deg, #0785ca 0%, #0036b5 100%)', color: 'white' }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginBottom: '4rem',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                        paddingBottom: '2.5rem'
                    }}>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <button
                                onClick={() => setActiveTab('Clientele')}
                                style={{
                                    padding: '0.75rem 2.25rem',
                                    borderRadius: '16px',
                                    border: activeTab === 'Clientele' ? '3px solid #0891b2' : '3px solid rgba(255,255,255,0.2)',
                                    background: activeTab === 'Clientele' ? 'white' : 'transparent',
                                    color: activeTab === 'Clientele' ? '#0891b2' : 'white',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontSize: '1rem',
                                    boxShadow: activeTab === 'Clientele' ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
                                }}
                            >
                                Clientele
                            </button>
                            <button
                                onClick={() => setActiveTab('Websites')}
                                style={{
                                    padding: '0.75rem 2.25rem',
                                    borderRadius: '16px',
                                    border: activeTab === 'Websites' ? '3px solid #0891b2' : '3px solid rgba(255,255,255,0.2)',
                                    background: activeTab === 'Websites' ?  'white' : 'transparent', // Slightly different blue if needed, but the mockup shows solid blue
                                    color:  activeTab === 'Websites' ? '#0891b2' : 'white',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontSize: '1rem',
                                    boxShadow: activeTab === 'Websites' ? '0 4px 12px rgba(8,145,178,0.3)' : 'none'
                                }}
                            >
                                Websites
                            </button>
                        </div>
                    </div>

                    {activeTab === 'Websites' ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                            {websites.map((project, index) => (
                                <a
                                    key={index}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass card"
                                    style={{
                                        padding: '0',
                                        overflow: 'hidden',
                                        border: '2px solid rgba(37, 99, 235, 0.1)',
                                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
                                        transition: 'all 0.4s ease',
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        display: 'block'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.4)';
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.1)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                                    }}
                                >
                                    <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                                        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6))', opacity: 0.8 }}></div>
                                        <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'var(--accent-base)', color: 'white', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <ExternalLink size={16} />
                                        </div>
                                    </div>
                                    <div style={{ padding: '2rem' }}>
                                        <div style={{ color: '#322d28', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                            <Globe size={14} /> {project.location}
                                        </div>
                                        <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'black', margin: 0 }}>{project.title}</h4>
                                    </div>
                                </a>
                            ))}
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                            {clientele.map((client, index) => (
                                <div
                                    key={index}
                                    style={{
                                        background: 'black',
                                        backdropFilter: 'blur(16px)',
                                        borderRadius: '32px',
                                        padding: '3rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        height: '260px',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.background = 'black';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.background = 'black';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                    }}
                                >
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        style={{ 
                                            maxWidth: '90%', 
                                            maxHeight: '90%', 
                                            objectFit: 'contain',
                                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' 
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default Portfolio;
