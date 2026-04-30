import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Layers, Globe, Search, BarChart, Settings, Zap, Code, Cpu, Shield, TrendingUp, Mail, Monitor, Smartphone, Target, Cloud, Database, PieChart, BrainCircuit } from 'lucide-react';
import Footer from '../components/Footer';

/* ─── Intersection Observer hook for scroll reveal ─── */
function useScrollReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.12 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, visible];
}

/* ─── All services data ─── */
const ALL_SERVICES = [
    // Web Solutions
    {
        category: 'Web Solutions',
        title: 'Website Design & Development',
        icon: <Layers size={22} />,
        // gradient: 'linear-gradient(135deg, #c84b9e 0%, #6c2eb9 50%, #3b5ae8 100%)',
        imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80',
        features: ['Responsive, modern, fast websites', 'Custom brand-tailored design', 'CMS integration (WordPress, etc.)', 'Cross-browser compatibility'],
    },
    {
        category: 'Web Solutions',
        title: 'E-Commerce Website Development',
        icon: <BarChart size={22} />,
        // gradient: 'linear-gradient(135deg, #c84b9e 0%, #e84b4b 50%, #f59e0b 100%)',
        imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80',
        features: ['Product & inventory management', 'Secure payment gateway', 'Shopping cart & checkout flow', 'Order tracking system'],
    },
    {
        category: 'Web Solutions',
        title: 'Website Speed Optimization',
        icon: <Zap size={22} />,
        // gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #c84b9e 100%)',
        imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
        features: ['Image & asset compression', 'Caching & CDN configuration', 'Core Web Vitals improvement', 'Lighthouse score boost'],
    },
    // Mobile Development
    {
        category: 'Mobile Development',
        title: 'Mobile-Friendly Website Design',
        icon: <Globe size={22} />,
        // gradient: 'linear-gradient(135deg, #e84b4b 0%, #c84b9e 50%, #6c2eb9 100%)',
        imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
        features: ['Fully responsive design', 'Touch-friendly navigation', 'Fast loading on mobile', 'Mobile-first approach'],
    },
    {
        category: 'Mobile Development',
        title: 'Android & iOS App Development',
        icon: <Smartphone size={22} />,
        // gradient: 'linear-gradient(135deg, #6c2eb9 0%, #4b6ee8 50%, #22d3ee 100%)',
        imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80',
        features: ['Native & cross-platform apps', 'Intuitive UI/UX design', 'App Store & Play Store submission', 'Push notifications & analytics'],
    },
    // Digital Marketing
    {
        category: 'Digital Marketing',
        title: 'SEO Friendly Website Structure',
        icon: <Search size={22} />,
        // gradient: 'linear-gradient(135deg, #4b6ee8 0%, #6c2eb9 50%, #c84b9e 100%)',
        imageUrl: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=600&q=80',
        features: ['Built to rank better in Google', 'Meta tags optimization', 'Schema markup implementation', 'XML sitemap generation'],
    },
    {
        category: 'Digital Marketing',
        title: 'Social Media Marketing',
        icon: <TrendingUp size={22} />,
        // gradient: 'linear-gradient(135deg, #f43f5e 0%, #f97316 50%, #eab308 100%)',
        imageUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80',
        features: ['Content strategy & creation', 'Paid social ad campaigns', 'Audience targeting & growth', 'Performance analytics & reports'],
    },
    {
        category: 'Digital Marketing',
        title: 'Email Marketing Campaigns',
        icon: <Mail size={22} />,
        // gradient: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #a855f7 100%)',
        imageUrl: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=600&q=80',
        features: ['List segmentation & automation', 'A/B testing campaigns', 'Open & click rate optimization', 'Drip sequence design'],
    },
    // IT Infrastructure
    {
        category: 'IT Infrastructure',
        title: 'Website Maintenance & Support',
        icon: <Settings size={22} />,
        // gradient: 'linear-gradient(135deg, #6c2eb9 0%, #4b6ee8 50%, #22d3ee 100%)',
        imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
        features: ['Regular content & plugin updates', 'Security monitoring & backups', 'Bug fixing & performance tuning', '24/7 technical support'],
    },
    {
        category: 'IT Infrastructure',
        title: 'Cloud Solutions & Hosting',
        icon: <Cloud size={22} />,
        // gradient: 'linear-gradient(135deg, #22d3ee 0%, #4b6ee8 50%, #6c2eb9 100%)',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
        features: ['AWS, Azure & GCP management', 'Auto-scaling & load balancing', 'SSL & domain configuration', 'Managed cloud backups'],
    },
    {
        category: 'IT Infrastructure',
        title: 'Cybersecurity Services',
        icon: <Shield size={22} />,
        // gradient: 'linear-gradient(135deg, #10b981 0%, #0ea5e9 50%, #6366f1 100%)',
        imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80',
        features: ['Vulnerability assessments', 'Firewall & intrusion detection', 'Data encryption strategies', 'Compliance & audit support'],
    },
    // Data Analytics
    {
        category: 'Data Analytics',
        title: 'Business Intelligence & Reporting',
        icon: <BarChart size={22} />,
        // gradient: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #8b2fc9 100%)',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
        features: ['Interactive dashboards & KPI tracking', 'Power BI & Tableau integration', 'Automated scheduled reports', 'Data storytelling & visualization'],
    },
    {
        category: 'Data Analytics',
        title: 'Big Data Engineering',
        icon: <Database size={22} />,
        // gradient: 'linear-gradient(135deg, #10b981 0%, #0ea5e9 50%, #6366f1 100%)',
        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
        features: ['Data pipeline design & ETL', 'Data warehouse architecture', 'Real-time streaming (Kafka, Spark)', 'Data quality & governance'],
    },
    {
        category: 'Data Analytics',
        title: 'Predictive Analytics & ML',
        icon: <TrendingUp size={22} />,
        // gradient: 'linear-gradient(135deg, #f59e0b 0%, #10b981 50%, #0ea5e9 100%)',
        imageUrl: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?auto=format&fit=crop&w=600&q=80',
        features: ['ML model development & training', 'Customer churn & revenue forecasting', 'Recommendation engine design', 'Model deployment & monitoring'],
    },
    // Consulting Services
    {
        category: 'Consulting Services',
        title: 'IT Strategy Consulting',
        icon: <Target size={22} />,
        // gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b2fc9 100%)',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
        features: ['Digital transformation roadmap', 'Tech stack evaluation', 'Cost optimization strategies', 'Risk assessment & mitigation'],
    },
    {
        category: 'Consulting Services',
        title: 'Software Development Consulting',
        icon: <Code size={22} />,
        // gradient: 'linear-gradient(135deg, #8b2fc9 0%, #c84b9e 50%, #f43f5e 100%)',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
        features: ['Architecture design reviews', 'Code quality & best practices', 'Agile & scrum coaching', 'Team mentoring & upskilling'],
    },
];

const CATEGORIES = ['All Services', 'Web Solutions', 'Mobile Development', 'Digital Marketing', 'Data Analytics', 'IT Infrastructure', 'Consulting Services'];

function ServiceCard({ service, visible, delay }) {
    const navigate = useNavigate();
    const handleLearnMore = () => {
        navigate('/contact#contact-form');
    };
    return (
        <div
            style={{
                borderRadius: '1.25rem',
                overflow: 'hidden',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                transition: `transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease ${delay}ms, translateY 0.5s ease ${delay}ms`,
                display: 'flex',
                flexDirection: 'column',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(139,47,201,0.18)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
            }}
        >
            {/* Gradient image top */}
            <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <img
                    src={service.imageUrl}
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: service.gradient, opacity: 0.78 }}></div>
                {/* Decorative dots */}
                <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.85)' }}></div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }}></div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }}></div>
                </div>
                {/* Category tag */}
                <div style={{ position: 'absolute', bottom: '12px', right: '12px', padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '600', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                    {service.category}
                </div>
            </div>

            {/* Card body */}
            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ color: '#2f79c9', flexShrink: 0, marginTop: '2px' }}>{service.icon}</div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '700', color: '#2f79c9', lineHeight: '1.3', margin: 0 }}>
                        {service.title}
                    </h3>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', margin: 0, padding: 0, listStyle: 'none', flex: 1 }}>
                    {service.features.map((f, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                            <CheckCircle size={15} style={{ color: '#2f79c9', flexShrink: 0, marginTop: '2px' }} />
                            {f}
                        </li>
                    ))}
                </ul>

                <button
                    style={{
                        marginTop: '0.5rem',
                        padding: '0.65rem 1.75rem',
                        background: 'linear-gradient(90deg, #2f79c9, #8b2fc9)',
                        color: 'white',
                        borderRadius: '9999px',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'opacity 0.25s ease, transform 0.25s ease',
                        alignSelf: 'flex-start',
                    }}
                    onClick={handleLearnMore}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                    Learn More
                </button>
            </div>
        </div>
    );
}

function Services() {
    const [heroRef, heroVisible] = useScrollReveal();
    const [gridRef, gridVisible] = useScrollReveal();
    const [activeCategory, setActiveCategory] = useState('All Services');

    const filtered = activeCategory === 'All Services'
        ? ALL_SERVICES
        : ALL_SERVICES.filter(s => s.category === activeCategory);

    return (
        <main style={{ paddingTop: '70px' }}>

            {/* ── HERO BANNER ── */}
            <section
                className="section bg-blue-theme"
                style={{ position: 'relative', overflow: 'hidden', minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '100px', paddingBottom: '80px' }}
            >
                <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(15,23,42,0.05) 1px, transparent 1px)', backgroundSize: '30px 30px', zIndex: 0, pointerEvents: 'none' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div
                        ref={heroRef}
                        style={{
                            opacity: heroVisible ? 1 : 0,
                            transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 0.8s ease, transform 0.8s ease'
                        }}
                    >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1.25rem', background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.25)', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: '600', color: 'var(--accent-base)', marginBottom: '1.25rem' }}>
                            <Zap size={14} /> Premium Services
                        </div>
                        <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.04em', marginBottom: '1.25rem', lineHeight: '1.05', fontWeight: '800' }}>
                            Our <span className="text-gradient">Services</span>
                        </h1>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.85', color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto' }}>
                            At AgileInfoTech, we provide a wide range of services designed to help businesses thrive in the digital age — from custom software development to strategic digital marketing.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── FILTER TABS ── */}
            <div style={{ background: 'var(--bg-color)', padding: '2.5rem 1.5rem 0', position: 'sticky', top: '68px', zIndex: 10, borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', paddingBottom: '1.25rem', overflowX: 'auto' }}>
                        {CATEGORIES.map(cat => {
                            const isActive = activeCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    style={{
                                        padding: '0.55rem 1.4rem',
                                        borderRadius: '9999px',
                                        fontWeight: '600',
                                        fontSize: '0.9rem',
                                        border: isActive ? 'none' : '1.5px solid var(--border-color)',
                                        background: isActive
                                            ? 'linear-gradient(90deg, #2f79c9, #8b2fc9)'
                                            : 'var(--card-bg)',
                                        color: isActive ? 'white' : 'var(--text-secondary)',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s ease',
                                        whiteSpace: 'nowrap',
                                        boxShadow: isActive ? '0 4px 14px rgba(139,47,201,0.35)' : 'none',
                                    }}
                                    onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = '#2f79c9'; e.currentTarget.style.color = '#2f79c9'; } }}
                                    onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-secondary)'; } }}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ── SERVICES GRID ── */}
            <section className="section" style={{ paddingTop: '4rem', paddingBottom: '6rem', background: 'var(--bg-color)', position: 'relative', overflow: 'hidden' }}>
                {/* Bg blobs */}
                <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }}></div>
                <div style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,47,201,0.07) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }}></div>

                <div ref={gridRef} className="container" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Result count */}
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: '500' }}>
                        Showing <strong style={{ color: 'var(--text-primary)' }}>{filtered.length}</strong> service{filtered.length !== 1 ? 's' : ''}
                        {activeCategory !== 'All Services' && <> in <span style={{ color: '#2f79c9', fontWeight: '600' }}>{activeCategory}</span></>}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                        {filtered.map((service, idx) => (
                            <ServiceCard
                                key={`${activeCategory}-${idx}`}
                                service={service}
                                visible={gridVisible}
                                delay={idx * 80}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default Services;
