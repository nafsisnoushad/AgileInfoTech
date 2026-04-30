import React, { useEffect, useRef, useState } from 'react';
import { Users, Target, Eye, Award, BookOpen, Briefcase, CheckCircle, TrendingUp, Globe, Zap, Heart, Shield, Code, Cpu, Terminal, Mail, Phone, MapPin, Send } from 'lucide-react';
import Footer from '../components/Footer';

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

function Contact() {
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
                    {/* Main Row */}
                    <div
                        ref={heroRef}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: '10rem',
                            alignItems: 'start',
                            justifyContent: 'space-between',
                            opacity: heroVisible ? 1 : 0,
                            transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 0.8s ease, transform 0.8s ease'
                        }}
                    >
                        {/* Left Column: Title */}
                        <div style={{ flex: '1 1 300px', maxWidth: '500px' }}>
                            <h1 className="section-title" style={{
                                fontSize: 'clamp(3rem, 6vw, 5rem)',
                                letterSpacing: '-0.04em',
                                marginBottom: '1rem',
                                lineHeight: '1',
                                fontWeight: '800'
                            }}>
                                Contact <br /> <span className="text-gradient">Us</span>
                            </h1>

                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '400px', marginTop: '1.5rem', lineHeight: '1.6' }}>
                                We're here to help you on your tech journey. Reach out to us through any of these channels for inquiries, support, or collaboration.
                            </p>

                            <div style={{ width: '60px', height: '6px', background: 'var(--accent-base)', borderRadius: 'var(--border-radius-full)', marginTop: '2rem' }}></div>
                        </div>

                        {/* Right Column: Contact Info Cards */}
                        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="glass card" style={{ padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', border: '2px solid var(--accent-base)', }}>
                                <div style={{ width: '56px', height: '56px', borderRadius: '16px', border: '2px solid var(--accent-base)', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-base)', flexShrink: 0 }}>
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Our Location</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                                        AGILEINFOTECH, Thycaud,<br />
                                        Thiruvananthapuram, 605014
                                    </div>
                                </div>
                            </div>

                            <div className="glass card" style={{ padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', border: '2px solid var(--accent-base)' }}>
                                <div style={{ width: '56px', height: '56px', borderRadius: '16px', border: '2px solid var(--accent-base)', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-base)', flexShrink: 0 }}>
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Call Us</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                                        +91 7907248735<br />
                                        +91 9847301349 (Support)
                                    </div>
                                </div>
                            </div>

                            <div className="glass card" style={{ padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', border: '2px solid var(--accent-base)' }}>
                                <div style={{ width: '56px', height: '56px', borderRadius: '16px', border: '2px solid var(--accent-base)', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-base)', flexShrink: 0 }}>
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Email Us</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                                        info@agileinfoz.com<br />
                                        support@agileinfoz.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="contact-form"
                className="section bg-dark-blue"
                style={{
                    padding: '6rem 0',
                    background: '#020617', // Deep dark background
                    color: 'white',
                    position: 'relative'
                }}
            >
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        {/* Left Side: Content & Shapes */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div>
                                <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                                    We at <span style={{ color: 'var(--accent-base)' }}>AgileInfoTech</span> <br /> got you covered...
                                </h2>
                                <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#38bdf8', maxWidth: '450px' }}>
                                    Tell us your business goals and we'll see how we can create something amazing together.
                                </p>
                            </div>

                            {/* Decorative Shapes (matching the image) */}
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end', marginTop: '2rem' }}>
                                <div style={{
                                    width: '140px',
                                    height: '140px',
                                    background: '#94a3b8', // Muted slate from image
                                    borderRadius: '30px 30px 60px 30px',
                                    opacity: 0.6
                                }}></div>
                                <div style={{
                                    width: '200px',
                                    height: '200px',
                                    border: '4px solid #38bdf8',
                                    borderRadius: '60px 30px 30px 30px',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{ width: '80%', height: '80%', background: '#0f172a', borderRadius: '40px 20px 20px 20px' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Modern Form */}
                        <div className="glass" style={{
                            padding: '3rem',
                            borderRadius: '50px 50px 80px 50px',
                            background: 'rgba(148, 163, 184, 0.2)', // Light grayish blue with transparency
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#cbd5e1' }}>Name</label>
                                        <input type="text" style={{ padding: '0.875rem', borderRadius: '12px', border: 'none', background: 'white', color: '#0f172a' }} required />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#cbd5e1' }}>Email Address</label>
                                        <input type="email" style={{ padding: '0.875rem', borderRadius: '12px', border: 'none', background: 'white', color: '#0f172a' }} required />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#cbd5e1' }}>Phone Number</label>
                                        <input type="tel" style={{ padding: '0.875rem', borderRadius: '12px', border: 'none', background: 'white', color: '#0f172a' }} required />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#cbd5e1' }}>Interested In</label>
                                        <select style={{ padding: '0.875rem', borderRadius: '12px', border: 'none', background: 'white', color: '#0f172a', appearance: 'none' }} required>
                                            <option>All Services</option>
                                            <option>Website Audit</option>
                                            <option>New Website Development</option>
                                            <option>Website Redesign</option>
                                            <option>SEO Optimization</option>
                                            <option>E-commerce Website</option>

                                        </select>
                                    </div>
                                </div>



                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#cbd5e1' }}>Message</label>
                                    <textarea rows="4" style={{ padding: '0.875rem', borderRadius: '12px', border: 'none', background: 'white', color: '#0f172a', resize: 'none' }}></textarea>
                                </div>

                                <button type="submit" style={{
                                    width: '60px',
                                    height: '60px',
                                    background: '#0ea5e9',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    transition: 'transform 0.3s',
                                    cursor: 'pointer',
                                    marginTop: '1rem'
                                }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                    <Send size={28} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MAP SECTION ── */}
            <section
                className="section"
                style={{
                    padding: '4rem 0',
                    background: 'var(--bg-main)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                            Find Us <span className="text-gradient">On Map</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                            Visit our office for a coffee and a chat about your next big project.
                        </p>
                    </div>

                    <div className="glass" style={{
                        width: '100%',
                        height: '450px',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        position: 'relative'
                    }}>
                        <iframe
                            title="Office Location"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3802.2227013542883!2d76.953545!3d8.490573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbe77a93dec9%3A0xf3b55d6bc5b20e78!2sAgileinfo%20Techytern%20Solutions%20LLP!5e1!3m2!1sen!2sin!4v1777224605395!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        {/* Overlay for premium feel */}
                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '20px',
                            background: 'rgba(15, 23, 42, 0.8)',
                            backdropFilter: 'blur(10px)',
                            padding: '1rem 1.5rem',
                            borderRadius: '16px',
                            color: 'white',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            zIndex: 1,
                            pointerEvents: 'none'
                        }}>
                            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-base)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Main HQ</div>
                            <div style={{ fontWeight: '600' }}>Thycaud, Thiruvananthapuram</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}

export default Contact;
