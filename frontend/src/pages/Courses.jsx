import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Monitor, Database, Search, Layers, Code, Globe,
    Clock, Users, Star, ArrowRight, BookOpen, Award, CheckCircle
} from 'lucide-react';
import Footer from '../components/Footer';

// ── Scroll-reveal wrapper ──────────────────────────────────────────────────
function RevealOnScroll({ children, delay = 0, className = '' }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
            { threshold: 0.12 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return (
        <div ref={ref} className={className} style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        }}>
            {children}
        </div>
    );
}

const allCourses = [
    {
        id: 1,
        category: 'development',
        title: 'Full Stack Web Development',
        icon: <Monitor className="w-7 h-7" />,
        color: 'from-blue-500 to-indigo-600',
        bg: 'bg-blue-50',
        iconColor: 'text-blue-600',
        duration: '6 Months',
        students: '2,400+',
        rating: 4.9,
        level: 'Beginner → Advanced',
        desc: 'Master React, Node.js, MongoDB & more. Build real production apps with industry mentors.',
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        price: 'Free',
    },
    {
        id: 2,
        category: 'data',
        title: 'Data Science & Machine Learning',
        icon: <Database className="w-7 h-7" />,
        color: 'from-purple-500 to-violet-600',
        bg: 'bg-purple-50',
        iconColor: 'text-purple-600',
        duration: '4 Months',
        students: '1,800+',
        rating: 4.8,
        level: 'Intermediate',
        desc: 'Learn Python, Pandas, Scikit-Learn, and deep learning to crack data science roles.',
        tags: ['Python', 'Pandas', 'ML', 'TensorFlow'],
        price: 'Free',
    },
    {
        id: 3,
        category: 'design',
        title: 'UI/UX Design',
        icon: <Layers className="w-7 h-7" />,
        color: 'from-pink-500 to-rose-600',
        bg: 'bg-pink-50',
        iconColor: 'text-pink-600',
        duration: '3 Months',
        students: '1,200+',
        rating: 4.9,
        level: 'Beginner',
        desc: 'Design stunning user interfaces and create delightful experiences using Figma and design principles.',
        tags: ['Figma', 'Wireframing', 'Prototyping', 'Research'],
        price: 'Free',
    },
    {
        id: 4,
        category: 'marketing',
        title: 'Digital Marketing & SEO',
        icon: <Search className="w-7 h-7" />,
        color: 'from-orange-500 to-amber-600',
        bg: 'bg-orange-50',
        iconColor: 'text-orange-600',
        duration: '2 Months',
        students: '950+',
        rating: 4.7,
        level: 'Beginner',
        desc: 'Drive growth with SEO, social media ads, Google Analytics and content marketing strategies.',
        tags: ['SEO', 'Google Ads', 'Analytics', 'Content'],
        price: 'Free',
    },
    {
        id: 5,
        category: 'development',
        title: 'Python Programming',
        icon: <Code className="w-7 h-7" />,
        color: 'from-cyan-500 to-teal-600',
        bg: 'bg-cyan-50',
        iconColor: 'text-cyan-600',
        duration: '2 Months',
        students: '3,100+',
        rating: 4.8,
        level: 'Beginner',
        desc: 'Start your programming journey with Python — the most versatile language in tech.',
        tags: ['Python', 'OOP', 'Automation', 'APIs'],
        price: 'Free',
    },
    {
        id: 6,
        category: 'development',
        title: 'Cloud & DevOps',
        icon: <Globe className="w-7 h-7" />,
        color: 'from-green-500 to-emerald-600',
        bg: 'bg-green-50',
        iconColor: 'text-green-600',
        duration: '3 Months',
        students: '780+',
        rating: 4.7,
        level: 'Intermediate',
        desc: 'Deploy scalable applications with AWS, Docker, Kubernetes, and CI/CD pipelines.',
        tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
        price: 'Free',
    },
];

const categories = [
    { key: 'all', label: 'All Courses' },
    { key: 'development', label: 'Development' },
    { key: 'data', label: 'Data Science' },
    { key: 'design', label: 'UI/UX Design' },
    { key: 'marketing', label: 'Marketing' },
];

export default function Courses() {
    const [active, setActive] = useState('all');

    const filtered = active === 'all'
        ? allCourses
        : allCourses.filter(c => c.category === active);

    return (
        <main style={{ fontFamily: 'Inter, sans-serif', background: '#f8fafc', minHeight: '100vh', paddingTop: '90px' }}>

            {/* ── HERO ── */}
            <section style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #4f46e5 100%)',
                padding: '5rem 1.5rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)',
                }} />
                <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.25)',
                        borderRadius: '999px', padding: '6px 16px',
                        color: '#fff', fontSize: '0.85rem', fontWeight: 600,
                        marginBottom: '1.5rem',
                    }}>
                        <BookOpen size={14} /> 100% Free Training Programs
                    </div>
                    <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
                        Explore Our Courses
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                        Hands-on, industry-aligned courses with expert mentors and 100% placement assistance — all completely free.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
                        {[['6+', 'Courses'], ['10k+', 'Learners'], ['100%', 'Placement Help']].map(([val, label]) => (
                            <div key={label} style={{ textAlign: 'center' }}>
                                <div style={{ color: '#fff', fontSize: '2rem', fontWeight: 800 }}>{val}</div>
                                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FILTER TABS ── */}
            <section style={{ padding: '2.5rem 1.5rem 0', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {categories.map(cat => (
                        <button
                            key={cat.key}
                            onClick={() => setActive(cat.key)}
                            style={{
                                padding: '0.5rem 1.4rem',
                                borderRadius: '999px',
                                border: active === cat.key ? 'none' : '1px solid #e2e8f0',
                                background: active === cat.key
                                    ? 'linear-gradient(135deg, #1e40af, #4f46e5)'
                                    : '#fff',
                                color: active === cat.key ? '#fff' : '#475569',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                boxShadow: active === cat.key ? '0 4px 14px rgba(79,70,229,0.35)' : '0 1px 3px rgba(0,0,0,0.06)',
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* ── COURSE CARDS ── */}
            <section style={{ padding: '3rem 1.5rem 5rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                    gap: '1.75rem',
                }}>
                    {filtered.map((course, idx) => (
                        <RevealOnScroll key={course.id} delay={idx * 80}>
                            <div style={{
                                background: '#fff',
                                borderRadius: '1.25rem',
                                border: '1px solid #e9eef6',
                                overflow: 'hidden',
                                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
                                }}
                            >
                                {/* Card Header */}
                                <div style={{
                                    background: `linear-gradient(135deg, ${course.color.replace('from-', '').replace(' to-', ', ')})`,
                                    padding: '1.75rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                }}>
                                    <div style={{
                                        width: '52px', height: '52px',
                                        background: 'rgba(255,255,255,0.2)',
                                        backdropFilter: 'blur(8px)',
                                        borderRadius: '14px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#fff',
                                        flexShrink: 0,
                                    }}>
                                        {course.icon}
                                    </div>
                                    <div>
                                        <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>{course.title}</h3>
                                        <span style={{
                                            display: 'inline-block', marginTop: '4px',
                                            background: 'rgba(255,255,255,0.25)',
                                            color: '#fff', fontSize: '0.75rem', fontWeight: 600,
                                            padding: '2px 10px', borderRadius: '999px',
                                        }}>{course.price}</span>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
                                    <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>{course.desc}</p>

                                    {/* Tags */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {course.tags.map(tag => (
                                            <span key={tag} style={{
                                                background: '#f1f5f9', color: '#475569',
                                                fontSize: '0.78rem', fontWeight: 600,
                                                padding: '4px 10px', borderRadius: '6px',
                                            }}>{tag}</span>
                                        ))}
                                    </div>

                                    {/* Meta */}
                                    <div style={{
                                        display: 'flex', gap: '1.25rem', flexWrap: 'wrap',
                                        paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9',
                                        color: '#64748b', fontSize: '0.85rem',
                                    }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <Clock size={14} /> {course.duration}
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <Users size={14} /> {course.students}
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f59e0b' }}>
                                            <Star size={14} style={{ fill: '#f59e0b' }} /> {course.rating}
                                        </span>
                                    </div>

                                    <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
                                        <Link
                                            to="/contact"
                                            style={{
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                                width: '100%', padding: '0.85rem',
                                                background: 'linear-gradient(135deg, #1e40af, #4f46e5)',
                                                color: '#fff', borderRadius: '12px',
                                                fontWeight: 700, fontSize: '0.95rem',
                                                textDecoration: 'none',
                                                transition: 'opacity 0.2s',
                                                boxShadow: '0 4px 14px rgba(79,70,229,0.3)',
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                        >
                                            Enroll Now <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </section>

            {/* ── WHY FREE CTA ── */}
            <section style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
                padding: '5rem 1.5rem',
                textAlign: 'center',
            }}>
                <RevealOnScroll>
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '999px', padding: '6px 16px',
                            color: '#93c5fd', fontSize: '0.85rem', fontWeight: 600,
                            marginBottom: '1.5rem',
                        }}>
                            <Award size={14} /> Why Our Courses Are Free
                        </div>
                        <h2 style={{ color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem' }}>
                            Education Should Have No Price Tag
                        </h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                            We believe talent shouldn't be gated by money. Our courses are free because we're invested in your success — we earn when you do.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center', marginBottom: '2.5rem' }}>
                            {['No hidden fees or subscriptions', '100% placement assistance included', 'Real projects reviewed by experts'].map(item => (
                                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0', fontSize: '1rem' }}>
                                    <CheckCircle size={18} style={{ color: '#34d399', flexShrink: 0 }} /> {item}
                                </div>
                            ))}
                        </div>
                        <Link
                            to="/contact"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                padding: '1rem 2.5rem',
                                background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                                color: '#fff', borderRadius: '14px',
                                fontWeight: 700, fontSize: '1rem',
                                textDecoration: 'none',
                                boxShadow: '0 8px 24px rgba(99,102,241,0.4)',
                                transition: 'transform 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            Get Started Today <ArrowRight size={18} />
                        </Link>
                    </div>
                </RevealOnScroll>
            </section>

            <Footer />
        </main>
    );
}
