import { Mail, MapPin, Phone, Award, Briefcase, Camera, Globe, Share2, Send, Bot } from 'lucide-react';
import logo from '../assets/FOOTER.png';

function Footer() {
    return (
        <footer style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
            color: 'white',
            padding: '5rem 0 2rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Subtle background decoration */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '4rem'
                }}>

                    {/* Column 1: Brand & About */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem', maxWidth: '320px', margin: '0 auto' }}>
                        <div style={{ width: '100%' }}>
                            <img src={logo} alt="AgileInfoTech Logo" style={{ height: '100px', width: 'auto', objectFit: 'contain' }} />
                            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: '#94a3b8', marginTop: '0.5rem', maxWidth: '280px', margin: '0.5rem auto 0' }}>
                                Leading the way in digital innovation and professional tech training. We empower businesses and individuals to thrive in the modern technological landscape.
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {[
                                { icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', url: 'https://www.facebook.com/Agileinfoz', name: 'Facebook' },
                                { icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z', url: 'https://x.com/agileinfo_tech', name: 'Twitter' },
                                { icon: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01', url: 'https://www.instagram.com/agileinfo_techytern_', name: 'Instagram', viewBox: '0 0 24 24', isInsta: true },
                                { icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z', url: 'https://www.instagram.com/agileinfo_techytern_', name: 'LinkedIn' },
                                { icon: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z M9.75 15.02V8.98L15.45 12l-5.7 3.02z', url: 'https://www.youtube.com/@AgileinfoTechyternLLP', name: 'YouTube' }
                            ].map((social, i) => (
                                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" style={{
                                    width: '34px',
                                    height: '34px',
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#94a3b8',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--accent-base)';
                                    e.currentTarget.style.color = 'white';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(37, 99, 235, 0.3)';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.color = '#94a3b8';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox={social.viewBox || "0 0 24 24"}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={social.isInsta ? {} : { fill: 'currentColor', stroke: 'none' }}
                                    >
                                        {social.isInsta ? (
                                            <>
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                <path d={social.icon}></path>
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                            </>
                                        ) : (
                                            <path d={social.icon} />
                                        )}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 style={{ fontWeight: '700', marginBottom: '1.5rem', fontSize: '1.2rem', color: 'white', textAlign: 'center' }}>
                            Services
                        </h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center', listStyle: 'none', padding: 0, margin: 0 }}>
                            {['Web Development',
                                'Mobile App Development',
                                'SEO Optimization',
                                'Domain & Hosting',
                                'IT Consultations'].map((item, i) => (
                                <li key={i}>
                                    <a href="#" style={{ color: '#94a3b8', fontSize: '1rem', transition: 'color 0.3s' }} onMouseEnter={(e) => { e.target.style.color = 'white'; }} onMouseLeave={(e) => { e.target.style.color = '#94a3b8'; }}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Navigation */}
                    <div>
                        <h3 style={{ fontWeight: '700', marginBottom: '1.5rem', fontSize: '1.2rem', color: 'white', textAlign: 'center' }}>
                            Quick Links
                        </h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center', listStyle: 'none', padding: 0, margin: 0 }}>
                            {['Home', 'About', 'Services', 'Portfolio', 'Careers', 'Contact'].map((item, i) => (
                                <li key={i}>
                                    <a href="#" style={{ color: '#94a3b8', fontSize: '1rem', transition: 'color 0.3s' }} onMouseEnter={(e) => { e.target.style.color = 'white'; }} onMouseLeave={(e) => { e.target.style.color = '#94a3b8'; }}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 style={{ fontWeight: '700', marginBottom: '1.5rem', fontSize: '1.2rem', color: 'white', textAlign: 'center' }}>
                            Contact Us
                        </h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', listStyle: 'none', padding: 0, margin: 0 }}>
                            {[
                                { icon: MapPin, text: <>AGILEINFOTECH, Thycaud,<br />Thiruvananthapuram, 605014</> },
                                { icon: Mail, text: 'info@agileinfoz.com' },
                                { icon: Phone, text: '+91 7907248735' },
                                { icon: Bot, text: '+91 9847301349 (Support)' }
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', textAlign: 'center' }}>
                                    <item.icon size={18} color="var(--accent-base)" style={{ flexShrink: 0 }} />
                                    <span style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div style={{
                    paddingTop: '2.5rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1.5rem'
                }}>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                        &copy; {new Date().getFullYear()} <span style={{ fontWeight: '600', color: 'white' }}>AgileInfoTech</span>. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ fontSize: '0.85rem', color: '#94a3b8' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Privacy Policy</a>
                        <a href="#" style={{ fontSize: '0.85rem', color: '#94a3b8' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
