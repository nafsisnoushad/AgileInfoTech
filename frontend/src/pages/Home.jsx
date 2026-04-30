import React, { useRef } from 'react';
import { BookOpen, Star, Briefcase, Award, Gift, Monitor, BarChart, Database, ChevronLeft, ChevronRight, Globe, Zap, Search, Settings, Code, Layers, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import logoEGAC from '../assets/EGAC.png';
import logoIAF from '../assets/international-accreditation-forum-iaf-logo-png_seeklogo-572393.png';
import logoMSME from '../assets/msme-logo.png';
import logoOro from '../assets/oro_partner.png';
import logoIso from '../assets/pngtree-iso-9001-certified-company-.png';
import logoStartupIndia from '../assets/Startup-India-Hub-Logo-Vector.svg-.png';
import logoKsum from '../assets/ksum.png';

function Home() {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    };

    const scrollRight = () => {
        if (sliderRef.current) sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    };

    const courses = [
        {
            title: "Full Stack",
            icon: <Monitor color="var(--accent-base)" size={20} />,
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
            desc: "Front-end & Back-end mastery."
        },
        {
            title: "Data Science",
            icon: <Database color="var(--accent-base)" size={20} />,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
            desc: "Data analysis capabilities."
        },
        {
            title: "Full Stack and Data Science",
            icon: <BarChart color="var(--accent-base)" size={20} />,
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80",
            desc: "Machine learning analytics."
        },
        {
            title: "Marketing",
            icon: <Briefcase color="var(--accent-base)" size={20} />,
            image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80",
            desc: "SEO and paid campaigns."
        },
        {
            title: "MERN Stack",
            icon: <BookOpen color="var(--accent-base)" size={20} />,
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
            desc: "MongoDB, Express, React, Node."
        },
    ];

    const reviews = [
        // New reviews added as requested
        { name: "Good Will Team", text: "AGILEINFOTECH crafted a beautiful static website for Travelmate Holidays that perfectly captures our travel experiences. The visuals are breathtaking, the layout is clean, and the performance is top-notch. Highly recommended for design-focused projects.", rating: 4 },
        { name: "Trivandrum Smart Cabs", text: "AGILEINFOTECH helped boost our online visibility through targeted SEO strategies and provided valuable IT consultation that improved our operations. We've seen a clear increase in customer inquiries since partnering with them.", rating: 5 },
        { name: "Almarkazi Telecommunication", text: "AGILEINFOTECH delivered a dynamic website that streamlined our service offerings and improved user engagement. The backend is robust, and the interface is intuitive. Their technical expertise and attention to detail truly impressed us.", rating: 5 },
        { name: "Lekshmi Bakers", text: "AGILEINFOTECH created a delightful static website for Lekshmi Bakers that perfectly reflects our brand and menu. The design is simple, attractive, and loads quickly — exactly what we needed to connect with our local customers.", rating: 4 },
        { name: "Travelmate Holidays Team", text: "AGILEINFOTECH crafted a beautiful static website for Travelmate Holidays that perfectly captures our travel experiences. The visuals are breathtaking, the layout is clean, and the performance is top-notch. Highly recommended for design-focused projects.", rating: 4 },
        { name: "Subbiah Team", text: "AGILEINFOTECH built a stunning eCommerce platform for our jewelry brand, Subbiah Jewellers. The site is elegant, fast, and easy to manage â€” exactly what we needed to showcase our collections. Their team was collaborative and exceeded every promise.", rating: 5 },
    ];

    const placements = [
        { name: "Anu", company: "TCS", role: "Software Engineer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
        { name: "Vishnu", company: "Infosys", role: "Backend Developer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
        { name: "Nayana", company: "Wipro", role: "Frontend Dev", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" },
        { name: "Rahul", company: "Cognizant", role: "Full Stack Engineer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80" },
        { name: "Sneha", company: "Accenture", role: "UI/UX Designer", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" },
        { name: "Kiran", company: "IBM", role: "Data Scientist", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=600&q=80" },
        { name: "Pooja", company: "Capgemini", role: "Cloud Architect", image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=600&q=80" },
        { name: "Arun", company: "Tech Mahindra", role: "DevOps Engineer", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80" },
    ];

    const partnerLogos = [
        { src: logoEGAC, alt: 'EGAC Certified', height: '90px', width: '100%' },
        { src: logoIAF, alt: 'IAF Accredited', height: '90px', width: '100%' },
        { src: logoMSME, alt: 'MSME Registered', height: '90px', width: '100%' },
        { src: logoOro, alt: 'Oro Partner', height: '90px', width: '100%' },
        { src: logoIso, alt: 'ISO 9001 Certified', height: '90px', width: '100%' },
        { src: logoStartupIndia, alt: 'Startup India', height: '55px' },
        { src: logoKsum, alt: 'KSUM Partner', height: '90px', width: '100%' },
    ];

    return (
        <main>
            {/* Creative Hero Section */}
            <section className="section bg-blue-theme" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px', position: 'relative', overflow: 'hidden' }}>
                {/* Background Decorative Elements */}
                <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(15,23,42,0.05) 1px, transparent 1px)', backgroundSize: '30px 30px', zIndex: 0, pointerEvents: 'none' }}></div>

                <div className="container" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '4rem', zIndex: 1, position: 'relative' }}>
                    {/* Left Typography */}
                    <div className="animate-fade-in" style={{ zIndex: 2, flex: '1 1 45%', minWidth: '300px', display: 'flex', flexDirection: 'column' }}>

                        <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 3vw, 4.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                            We Build High-Converting Websites Thats Grow Your <span className="text-gradient">Business </span>
                        </h1>
                        <p className="section-subtitle" style={{ margin: '0 0 2.5rem', fontSize: '1.125rem', maxWidth: '90%' }}>
                            We design modern, fast, and SEO-friendly websites that attract the right customers, build trust, and increase your revenue — 24×7.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <button className="btn btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1.125rem' }}>
                                GET FREE CONSULTATION
                            </button>
                            <Link to="/services">
                                <button className="btn btn-outline" style={{ padding: '0.875rem 2rem', fontSize: '1.125rem' }}>
                                    VIEW OUR SERVICES
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Highlight - Attractive Design */}
                    <div className="animate-fade-in stagger-2 relative" style={{ perspective: '1000px', flex: '1 1 45%', minWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Glow effect behind */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', height: '90%', background: 'var(--accent-base)', opacity: 0.15, filter: 'blur(80px)', zIndex: 0 }}></div>

                        {/* Hero Image Container */}
                        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '500px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                                alt="Website Design and Development"
                                style={{ width: '100%', height: 'auto', borderRadius: '1.5rem', boxShadow: 'var(--shadow-lg)', objectFit: 'cover', border: '1px solid var(--border-color)' }}
                            />

                            {/* Floating Badge */}
                            <div className="glass" style={{ position: 'absolute', bottom: '-5%', right: '-5%', padding: '1rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', animation: 'float 5s ease-in-out infinite', boxShadow: 'var(--shadow-lg)' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-light)', color: 'var(--accent-base)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>100%</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>Responsive Design</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* ── OUR SERVICES SECTION ── */}
            <section className="section" style={{ background: 'var(--bg-color)', paddingTop: '5rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
                {/* Subtle background blobs */}
                <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }}></div>
                <div style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1.2rem', background: 'linear-gradient(90deg, rgba(37,99,235,0.1), rgba(99,102,241,0.1))', border: '1px solid rgba(37,99,235,0.2)', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: '600', color: 'var(--accent-base)', marginBottom: '1rem' }}>
                            <Zap size={14} /> OUR SERVICES
                        </div>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                            What We <span className="text-gradient">Offer</span>
                        </h2>
                        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto', lineHeight: '1.75' }}>
                            Discover our premium services designed to elevate your experience. Each service is crafted with attention to detail and tailored to meet your specific needs.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            {
                                title: 'Website Design & Development',
                                icon: <Layers size={22} />,
                                // gradient: 'linear-gradient(135deg, #c84b9e 0%, #6c2eb9 50%, #3b5ae8 100%)',
                                features: ['Responsive, modern, fast, and user-friendly websites', 'Custom design tailored to your brand identity', 'CMS integration (WordPress, etc.)', 'Cross-browser compatibility'],
                                imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80'
                            },
                            {
                                title: 'Mobile-Friendly Website Design',
                                icon: <Globe size={22} />,
                                // gradient: 'linear-gradient(135deg, #e84b4b 0%, #c84b9e 50%, #6c2eb9 100%)',
                                features: ['Fully responsive design', 'Touch-friendly navigation', 'Fast loading on mobile devices', 'Mobile-first approach'],
                                imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80'
                            },
                            {
                                title: 'SEO Friendly Website Structure',
                                icon: <Search size={22} />,
                                // gradient: 'linear-gradient(135deg, #4b6ee8 0%, #6c2eb9 50%, #c84b9e 100%)',
                                features: ['Built to rank better in Google', 'Meta tags optimization', 'Schema markup implementation', 'XML sitemap generation'],
                                imageUrl: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=600&q=80'
                            },
                            {
                                title: 'E-Commerce Website Development',
                                icon: <BarChart size={22} />,
                                // gradient: 'linear-gradient(135deg, #c84b9e 0%, #e84b4b 50%, #f59e0b 100%)',
                                features: ['Product & inventory management', 'Secure payment gateway integration', 'Shopping cart & checkout flow', 'Order tracking system'],
                                imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80'
                            },
                            {
                                title: 'Website Maintenance & Support',
                                icon: <Settings size={22} />,
                                // gradient: 'linear-gradient(135deg, #6c2eb9 0%, #4b6ee8 50%, #22d3ee 100%)',
                                features: ['Regular content & plugin updates', 'Security monitoring & backups', 'Bug fixing & performance tuning', '24/7 technical support'],
                                imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80'
                            },
                            {
                                title: 'Website Speed Optimization',
                                icon: <Zap size={22} />,
                                // gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #c84b9e 100%)',
                                features: ['Image & asset compression', 'Caching & CDN configuration', 'Core Web Vitals improvement', 'Lighthouse score boost'],
                                imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80'
                            },
                        ].map((service, idx) => (
                            <div
                                key={idx}
                                style={{
                                    borderRadius: '1.25rem',
                                    overflow: 'hidden',
                                    background: 'var(--card-bg)',
                                    border: '1px solid var(--border-color)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(37,99,235,0.15)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'; }}
                            >
                                {/* Card Image / Gradient Top */}
                                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                                    <img
                                        src={service.imageUrl}
                                        alt={service.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: service.gradient, opacity: 0.75 }}></div>
                                    {/* Decorative dots on image */}
                                    <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px' }}>
                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.8)' }}></div>
                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }}></div>
                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }}></div>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                                    {/* Title with icon */}
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                        <div style={{ color: '#2f79c9', flexShrink: 0, marginTop: '2px' }}>{service.icon}</div>
                                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '700', color: '#2f79c9', lineHeight: '1.3', margin: 0 }}>
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Bullet Features */}
                                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', margin: 0, padding: 0, listStyle: 'none', flex: 1 }}>
                                        {service.features.map((f, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                                                <CheckCircle size={16} style={{ color: '#2f79c9', flexShrink: 0, marginTop: '2px' }} />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Learn More Button */}
                                    <Link
                                        to="/services"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: '0.5rem',
                                            padding: '0.65rem 1.75rem',
                                            background: 'linear-gradient(90deg, #2f79c9,  #8b2fc9)',
                                            color: 'white',
                                            borderRadius: '9999px',
                                            fontWeight: '600',
                                            fontSize: '0.9rem',
                                            textDecoration: 'none',
                                            transition: 'opacity 0.25s ease, transform 0.25s ease',
                                            alignSelf: 'flex-start',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All Services CTA */}
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link
                            to="/services"
                            className="btn btn-outline"
                            style={{ padding: '0.875rem 2.5rem', fontSize: '1rem', borderColor: 'var(--accent-base)', color: 'var(--accent-base)' }}
                        >
                            View All Services →
                        </Link>
                    </div>
                </div>
            </section>



            {/* ── REVIEWS MARQUEE SECTION ── */}
            <section style={{
                padding: '5rem 0',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
                overflow: 'hidden',
                position: 'relative',
            }}>
                {/* Decorative glow */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(59,130,246,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />

                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '999px', padding: '6px 18px', color: '#93c5fd', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
                        <Star size={14} style={{ fill: '#93c5fd' }} /> What Our Clients Say
                    </div>
                    <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, margin: 0 }}>
                        Real Stories. <span style={{ background: 'linear-gradient(90deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Real Results.</span>
                    </h2>
                </div>

                {/* Row 1 — scrolls LEFT */}
                <div style={{ overflow: 'hidden', marginBottom: '1.25rem', maskImage: 'linear-gradient(to right, transparent, 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                    <div style={{ display: 'flex', gap: '1.25rem', width: 'max-content', animation: 'reviewScroll 35s linear infinite' }}>
                        {[...reviews, ...reviews, ...reviews].map((r, i) => (
                            <div key={i} style={{
                                minWidth: '320px', maxWidth: '320px',
                                background: 'rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '1rem',
                                padding: '1.5rem',
                                flexShrink: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: '250px',
                            }}>
                                <div style={{ display: 'flex', gap: '3px', marginBottom: '0.75rem' }}>
                                    {[...Array(r.rating)].map((_, s) => <Star key={s} size={15} style={{ fill: '#fbbf24', color: '#fbbf24' }} />)}
                                </div>
                                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem', fontStyle: 'italic', flex: 1 }}>"{r.text}"</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>
                                        {r.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>{r.name}</div>
                                        <div style={{ color: '#64748b', fontSize: '0.78rem' }}>Happy Client</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 — scrolls RIGHT (reverse) */}
                <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                    <div style={{ display: 'flex', gap: '1.25rem', width: 'max-content', animation: 'reviewScroll 40s linear infinite reverse' }}>
                        {[...[...reviews].reverse(), ...[...reviews].reverse(), ...[...reviews].reverse()].map((r, i) => (
                            <div key={i} style={{
                                minWidth: '320px', maxWidth: '320px',
                                background: 'rgba(59,130,246,0.08)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(99,102,241,0.25)',
                                borderRadius: '1rem',
                                padding: '1.5rem',
                                flexShrink: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: '250px',
                            }}>
                                <div style={{ display: 'flex', gap: '3px', marginBottom: '0.75rem' }}>
                                    {[...Array(r.rating)].map((_, s) => <Star key={s} size={15} style={{ fill: '#fbbf24', color: '#fbbf24' }} />)}
                                </div>
                                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem', fontStyle: 'italic', flex: 1 }}>"{r.text}"</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>
                                        {r.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>{r.name}</div>
                                        <div style={{ color: '#64748b', fontSize: '0.78rem' }}>Happy Client</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
                    @keyframes reviewScroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-33.333%); }
                    }
                `}</style>
            </section>
            {/* Connections Section - Scrolling Logo Marquee */}
            <section className="section glass" style={{ padding: '2rem 0', borderRadius: '0', borderLeft: 'none', borderRight: 'none', overflow: 'hidden' }}>
                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, i) => (
                            <div key={i} className="marquee-item">
                                <img src={logo.src} alt={logo.alt} style={{ height: logo.height || '55px', width: 'auto', objectFit: 'contain', filter: 'grayscale(0%)', opacity: 1, transition: 'all 0.4s ease' }} onMouseOver={e => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.5'; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseOut={e => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default Home;
