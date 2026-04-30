import React, { useEffect, useRef, useState } from 'react';
import { Users, Target, Eye, Award, BookOpen, Briefcase, CheckCircle, TrendingUp, Globe, Zap, Heart, Shield } from 'lucide-react';
import aboutImg from '../assets/image.png';
import agilelogo from '../assets/agilelogo.png';
import shabna from '../assets/Shabna.webp';
import archana from '../assets/archana.webp';
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

/* ─── Animated counter component ─── */
function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1800;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Value Card ─── */
function ValueCard({ icon: Icon, title, desc, delay }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className="glass card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem',
        border: '2px solid rgba(37, 99, 235, 0.1)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.5)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(37, 99, 235, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.1)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.04)';
      }}
    >
      <div style={{
        width: '52px', height: '52px', borderRadius: '14px',
        background: 'var(--accent-light)', color: 'var(--accent-base)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0
      }}>
        <Icon size={24} />
      </div>
      <div>
        <h4 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>{title}</h4>
        <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>{desc}</p>
      </div>
    </div>
  );
}

/* ─── Team Member Card ─── */
function TeamCard({ name, role, initials, color, delay }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className="glass card text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        padding: '2rem 1.5rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'
      }}
    >
      <div style={{
        width: '72px', height: '72px', borderRadius: '50%',
        background: `hsl(${color}, 65%, 55%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.5rem', fontWeight: 800, color: 'white',
        boxShadow: `0 6px 20px hsla(${color}, 65%, 55%, 0.4)`
      }}>
        {initials}
      </div>
      <div>
        <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{name}</h4>
        <p style={{ fontSize: '0.82rem', color: 'var(--accent-base)', margin: 0, fontWeight: 600 }}>{role}</p>
      </div>
    </div>
  );
}

/* ─── Main About Component ─── */
function About() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [storyRef, storyVisible] = useScrollReveal();
  const [missionRef, missionVisible] = useScrollReveal();

  const stats = [
    { label: 'Students Trained', value: 500, suffix: '+', icon: Users },
    { label: 'Placements', value: 100, suffix: '+', icon: Briefcase },
    { label: 'Courses Offered', value: 10, suffix: '+', icon: BookOpen },
    { label: 'Years Experience', value: 5, suffix: '+', icon: TrendingUp },
  ];

  const values = [
    { icon: Award, title: 'Excellence', desc: 'We deliver the highest quality in everything we do, setting new standards of success.' },
    { icon: Shield, title: 'Integrity', desc: 'Our decisions, actions, and relationships are guided by honesty and transparency.' },
    { icon: Zap, title: 'Innovation', desc: 'We continuously push boundaries to transform ideas into reality.' },
    { icon: Heart, title: 'Client-Centricity', desc: 'Your success is our priority. We focus on delivering exceptional value to our clients.' },
    { icon: Users, title: 'Teamwork', desc: 'We foster a collaborative culture to achieve shared goals and overcome challenges.' },
  ];

  const pillars = [
    { text: 'Custom Software Development' },
    { text: 'Web & Mobile Applications' },
    { text: 'UI/UX Design' },
    { text: 'Cloud Solutions' },
    { text: 'Agile Methodology' },
    { text: 'Dedicated Support' },
  ];

  const leadership = [
    {
      name: 'Shabna B S',
      role: 'CEO & Founder',
      desc: 'With over 15 years of industry experience, Shabna leads our vision with passion and innovation.',
      image: shabna
    },
    {
      name: 'Sunil',
      role: 'Manager',
      desc: 'Expert in operational excellence and student success. Manages end-to-end training programs ensuring quality and consistency across all departments.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Archana Ajith',
      role: 'Project Manager',
      desc: 'Highly organized leader overseeing real-world project integrations. Bridges the gap between industrial requirements and student internship projects.',
      image: archana
    },
  ];

  const teamMembers = [
    {
      name: 'Nikhil',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Abhijith',
      role: 'Data Scientist',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: '#name',
      role: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80'
    },
  ];

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
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(15,23,42,0.05) 1px, transparent 1px)', backgroundSize: '30px 30px', zIndex: 0, pointerEvents: 'none' }}></div>

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
            <div style={{ left: '0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              <h1 className="section-title" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', letterSpacing: '-0.04em', marginBottom: '1rem', lineHeight: '0.9', fontWeight: '800' }}>
                About <br /> <span className="text-gradient">Us</span>
              </h1>
            </div>

            {/* Right Column: Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '0 1rem' }}>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
                  At AGIEINFOTECH, we're more than just a tech company. We're a team of passionate innovators, problem-solvers, and tech enthusiasts committed to transforming businesses through cutting-edge technology solutions. Since our founding, we've been dedicated to pushing boundaries and exceeding expectations.</p>
                {/* 
                                <p style={{ fontSize: '1.125rem', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
                                    Our journey began with a simple mission: to foster a community of skilled professionals by providing high-quality, real-world project exposure and dedicated placement support. From full-stack development to AI, we cover the tech stacks that matter most in today's market.
                                </p>

                                <p style={{ fontSize: '1.125rem', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
                                    We believe that education should be more than just theory. That's why our programs are built around the concept of "Learning by Doing." Our students don't just study code; they build products, solve problems, and prepare for the careers they've always dreamed of.
                                </p> */}

                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--accent-base)' }}>500+</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '700' }}>Students</div>
                  </div>
                  <div style={{ width: '1px', background: 'var(--border-color)' }}></div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--accent-base)' }}>100%</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '700' }}>Support</div>
                  </div>
                  <div style={{ width: '1px', background: 'var(--border-color)' }}></div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--accent-base)' }}>10+</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '700' }}>Courses</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                  <a href="/courses" className="btn btn-primary" style={{ padding: '0.875rem 2.5rem' }}>View Courses</a>
                  <a href="/contact" className="btn btn-outline" style={{ padding: '0.875rem 2.5rem' }}>Get in Touch</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: 'var(--accent-base)', padding: '3rem 1.5rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem' }}>
          {stats.map(({ label, value, suffix, icon: Icon }, i) => (
            <div key={i} className="text-center" style={{ color: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Icon size={22} opacity={0.8} />
              </div>
              <div style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, fontFamily: 'var(--font-heading)', lineHeight: 1, marginBottom: '0.4rem' }}>
                <AnimatedCounter target={value} suffix={suffix} />
              </div>
              <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontWeight: 500, fontSize: '0.95rem' }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR STORY (White Background) ── */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div
            ref={storyRef}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem', alignItems: 'center',
              opacity: storyVisible ? 1 : 0,
              transform: storyVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            {/* Left — Image */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: '-16px', background: 'linear-gradient(135deg, var(--accent-base), #6366f1)', borderRadius: '1.75rem', opacity: 0.15, filter: 'blur(20px)', zIndex: 0 }} />
              <div style={{ position: 'relative', zIndex: 1, borderRadius: '1.5rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', maxWidth: '440px', width: '100%' }}>
                <img src={aboutImg} alt="AgileInfoTech Training" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
                {/* Floating badge */}
                <div className="glass" style={{
                  position: 'absolute', bottom: '1.5rem', left: '1.5rem',
                  padding: '0.875rem 1.25rem', borderRadius: '1rem',
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  animation: 'float 6s ease-in-out infinite'
                }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-base)' }}>
                    <Award size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>ISO 9001 Certified</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Trusted Quality Training</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Story Text */}
            <div>
              <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'var(--accent-light)', color: 'var(--accent-base)', borderRadius: 'var(--border-radius-full)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                Our Story
              </div>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Who We Are
              </h2>
              <p style={{ lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>
                At our development company, we are passionate about harnessing the power of technology to drive innovation and solve complex challenges. With a diverse team of experts spanning various disciplines, we thrive on collaboration and creativity to deliver cutting-edge solutions.
              </p>
              <p style={{ lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>
                We are an MSME-registered, ISO-certified, and Startup India-recognised organization. We partner with clients to transform their ideas into robust, scalable digital products that stand out in the modern digital landscape.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {pillars.map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle size={18} color="var(--accent-base)" />
                    <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)' }}>{p.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="section"style={{ background:'linear-gradient(130deg, var(--accent-light) 0%, var(--accent-base) 100%)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <h2 className="section-title">Our <span className="text-gradient">Purpose</span></h2>
            <p className="section-subtitle">Everything we do is driven by a clear mission and a bold vision.</p>
          </div>

          <div
            ref={missionRef}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              opacity: missionVisible ? 1 : 0,
              transform: missionVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            {/* Mission */}
            <div className="glass card" style={{
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
              border: '2px solid rgba(37, 99, 235, 0.2)',
              boxShadow: '0 15px 35px -10px rgba(37, 99, 235, 0.25)'
            }}>
              <div style={{ position: 'absolute', top: '-30%', right: '-20%', width: '60%', height: '60%', background: 'var(--accent-base)', borderRadius: '50%', opacity: 0.08, filter: 'blur(40px)', pointerEvents: 'none' }} />
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-base)', marginBottom: '1.5rem' }}>
                <Target size={28} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Our Mission</h3>
              <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We strive to be the catalyst that transforms ideas into reality and challenges into opportunities              </p>
            </div>

            {/* Vision */}
            <div className="glass card" style={{
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
              border: '2px solid rgba(37, 99, 235, 0.2)',
              boxShadow: '0 15px 35px -10px rgba(37, 99, 235, 0.25)'
            }}>
              <div style={{ position: 'absolute', top: '-30%', right: '-20%', width: '60%', height: '60%', background: '#6366f1', borderRadius: '50%', opacity: 0.08, filter: 'blur(40px)', pointerEvents: 'none' }} />
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(99,102,241,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1', marginBottom: '1.5rem' }}>
                <Eye size={28} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Our Vision</h3>
              <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
To become the global leader in technological innovation, setting new standards of excellence and creating solutions that positively impact businesses and communities worldwide              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES (White Background) ── */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--accent-base) 0%, var(--accent-hover) 100%)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'var(--accent-light)', color: 'var(--accent-base)', borderRadius: 'var(--border-radius-full)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem' }}>
              What Drives Us
            </div>
            <h2 className="section-title">Our Core <span style={{ color: 'white' }}>Values</span></h2>
            <p className="section-subtitle"style={{ color: 'white' }}>Excellence, Integrity, Innovation, Client-Centricity, and Teamwork form the foundation of our culture. These principles guide our decisions, actions, and relationships, ensuring we deliver the highest quality in everything we do.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <ValueCard key={i} {...v} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM SECTION ── */}
      <section className="section" >
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', padding: '0.4rem 1.25rem', background: 'var(--accent-light)', color: 'var(--accent-base)', borderRadius: 'var(--border-radius-full)', fontSize: '0.875rem', fontWeight: 700, marginBottom: '1rem' }}>
              Our Visionaries
            </div>
            <h2 className="section-title">Leadership <span className="text-gradient">Team</span></h2>
            <p className="section-subtitle">The driving force behind AgileInfoTech's commitment to excellence.</p>
          </div>

          {/* Leadership Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
            {leadership.map((member, i) => {
              const [ref, visible] = useScrollReveal();
              return (
                <div
                  key={i}
                  ref={ref}
                  className="glass card"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.6s ease ${i * 100}ms`,
                    padding: '0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '2px solid rgba(37, 99, 235, 0.1)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-10px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ height: '280px', overflow: 'hidden' }}>
                    <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                  </div>
                  <div style={{ padding: '2rem' }}>
                    <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{member.name}</h4>
                    <p style={{ color: 'var(--accent-base)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>{member.role}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{member.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Core <span style={{ color: 'var(--accent-base)' }}>Experts</span></h3>
          </div>

          {/* Core Team Cards (Less Highlighted) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {teamMembers.map((member, i) => {
              const [ref, visible] = useScrollReveal();
              return (
                <div
                  key={i}
                  ref={ref}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.6s ease ${i * 100}ms`,
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    margin: '0 auto 1.5rem',
                    overflow: 'hidden',
                    border: '4px solid white',
                    boxShadow: 'var(--shadow-md)',
                    transition: 'transform 0.3s ease'
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>{member.name}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '500' }}>{member.role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--accent-base) 0%, #6366f1 100%)',
        padding: '5rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '70%', height: '200%', background: 'rgba(255,255,255,0.04)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            Ready to Transform Your Career?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', margin: '0 auto 2.5rem', maxWidth: '560px', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Join hundreds of students who turned their ambitions into thriving tech careers with AgileInfoTech.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/courses" className="btn" style={{ background: 'white', color: 'var(--accent-base)', fontWeight: 700, padding: '0.9rem 2.25rem', fontSize: '1rem' }}>
              Start Your Journey
            </a>
            <a href="/contact" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', padding: '0.9rem 2.25rem', fontSize: '1rem' }}>
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default About;