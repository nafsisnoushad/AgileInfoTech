import React, { useEffect, useState } from 'react';
import { MapPin, Clock, Briefcase, ChevronRight, CheckCircle, ArrowLeft, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function JobCard({ job }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className="glass card"
            style={{
                padding: '2rem',
                marginBottom: '2rem',
                borderLeft: '4px solid var(--accent-base)',
                transition: 'all 0.3s ease'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-base)', textTransform: 'uppercase' }}>AGILEINFOTECH</span>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#94a3b8' }}></span>
                        <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Posted {job.posted}</span>
                    </div>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>{job.title}</h3>

                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <MapPin size={16} color="var(--accent-base)" />
                            {job.location}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <Clock size={16} color="var(--accent-base)" />
                            {job.type}
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {job.tags.map((tag, i) => (
                        <span key={i} style={{ padding: '0.4rem 0.8rem', background: 'var(--accent-light)', color: 'var(--accent-base)', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>{tag}</span>
                    ))}
                </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{job.description}</p>

            {expanded && (
                <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem', animation: 'fadeIn 0.5s ease' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={18} color="var(--accent-base)" /> Requirements
                            </h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
                                {job.requirements.map((req, i) => (
                                    <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--accent-base)', marginTop: '4px' }}>•</span>
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Briefcase size={18} color="var(--accent-base)" /> Responsibilities
                            </h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
                                {job.responsibilities.map((resp, i) => (
                                    <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--accent-base)', marginTop: '4px' }}>•</span>
                                        {resp}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div style={{ marginTop: '2rem' }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>Benefits</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {job.benefits.map((benefit, i) => (
                                <div key={i} style={{ padding: '0.75rem 1.25rem', background: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                                    {benefit}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem', textAlign: 'center', padding: '2.5rem', background: 'var(--accent-light)', borderRadius: '16px' }}>
                        <h4 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-base)' }}>Ready to join us?</h4>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Send your resume and portfolio to our hiring team.</p>
                        <a href={`mailto:info@agileinfoz.com?subject=Application for ${job.title}`} className="btn btn-primary" style={{ padding: '0.875rem 2.5rem' }}>Apply via Email</a>
                    </div>
                </div>
            )}

            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a
                    href={`mailto:info@agileinfoz.com?subject=Application for ${job.title}`}
                    className="btn btn-primary"
                    style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}
                >
                    Apply Now
                </a>

                <button
                    onClick={() => setExpanded(!expanded)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--accent-base)',
                        fontWeight: 700,
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        fontSize: '0.95rem'
                    }}
                >
                    {expanded ? 'Show Less' : 'View Full Details'}
                    <ChevronRight size={18} style={{ transform: expanded ? 'rotate(-90deg)' : 'rotate(90deg)', transition: 'transform 0.3s ease' }} />
                </button>
            </div>
        </div>
    );
}

function FullTimeCareers() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const jobs = [
        {
            title: "UI/UX Developer",
            posted: "2 days ago",
            location: "Kerala, Thiruvananthapuram (Office)",
            type: "Full Time",
            description: "We're a growing startup looking for passionate UI/UX developers to join our team in Kerala. As part of our in-house training program, interns will receive mentorship and real-world experience in creating intuitive user experiences.",
            tags: ["Figma", "UI Design", "UX Research", "Prototyping", "Design Systems"],
            requirements: [
                "0-1 year of experience in UX/UI development",
                "Basic knowledge of design tools like Figma, Sketch, Adobe XD",
                "Portfolio or sample projects showcasing user interface work",
                "Understanding of design systems and UI components",
                "Good communication and team collaboration skills"
            ],
            responsibilities: [
                "Assist in creating user-friendly interfaces aligned with business goals",
                "Support user research and usability testing efforts",
                "Help develop wireframes, mockups, and interactive prototypes",
                "Collaborate with design and development teams",
                "Contribute to continuous design improvements based on feedback"
            ],
            benefits: [
                "Hands-on training in a startup environment",
                "Office-based work in Thiruvananthapuram",
                "Mentorship from experienced professionals",
                "Opportunity for long-term growth with the company"
            ]
        },
        {
            title: "Full Stack Python Developer",
            posted: "2 days ago",
            location: "Kerala, Thiruvananthapuram (Office)",
            type: "Full Time",
            description: "AGILEINFOTECH, a growing startup based in Thiruvananthapuram, is looking for a Full Stack Python Developer with strong communication skills in Tamil, Malayalam, and English. You will play a key role in product development and training interns.",
            tags: ["Python", "Django", "React", "API Development", "MongoDB"],
            requirements: [
                "0-1 year of experience in full stack development",
                "Proficiency in Python and Django (or Flask)",
                "Frontend knowledge with React, HTML, CSS, JavaScript",
                "Database experience (MongoDB, MySQL, or PostgreSQL)",
                "Must be fluent in Tamil, Malayalam, and English"
            ],
            responsibilities: [
                "Develop and maintain full stack web applications",
                "Build and consume RESTful APIs",
                "Collaborate with UI/UX team and backend developers",
                "Train and guide interns in Python and related technologies",
                "Participate in code reviews and tech discussions"
            ],
            benefits: [
                "Opportunity to mentor and train interns",
                "Office-based role in a startup environment",
                "Work with a passionate and energetic team",
                "Growth opportunities with performance recognition"
            ]
        },
        {
            title: "Digital Marketing and Video Editor",
            posted: "2 days ago",
            location: "Kerala, Thiruvananthapuram (Office)",
            type: "Full Time",
            description: "AGILEINFOTECH, a fast-growing startup in Thiruvananthapuram, is hiring a Digital Marketing and Video Editor. The role involves promoting our services, creating engaging content, and mentoring interns in digital strategies and editing tools.",
            tags: ["SEO", "Social Media", "Premiere Pro", "After Effects", "Content Creation"],
            requirements: [
                "0-1 year of experience in digital marketing and/or video editing",
                "Familiarity with tools like Adobe Premiere Pro, After Effects, Canva",
                "Understanding of social media trends, SEO, and online engagement",
                "Basic content writing and creative storytelling skills",
                "Proficiency in Tamil, Malayalam, and English preferred"
            ],
            responsibilities: [
                "Plan and execute digital campaigns across platforms",
                "Create and edit videos for marketing and branding",
                "Manage social media content and engagement",
                "Train and mentor interns in editing and online promotion",
                "Collaborate with design and tech teams for content needs"
            ],
            benefits: [
                "Exposure to real-world projects in a startup setup",
                "Office-based work environment in Thiruvananthapuram",
                "Creative freedom and collaborative culture",
                "Mentorship and growth opportunities"
            ]
        },
        {
            title: "Business Development Executive (BDE)",
            posted: "2 hr ago",
            location: "Kerala, Thiruvananthapuram (Office)",
            type: "Full Time Up to ₹25000 after probation",
            description: "We are a growing startup in Kerala looking for motivated and passionate Business Development Executives (BDEs) to join our team. As part of our in-house training program, interns will receive hands-on mentorship and real-world exposure in client interaction, lead generation, market research, and sales strategy execution.",
            tags: ["Communication", "Lead Gen", "Sales", "Relationship Mgmt", "Market Research"],
            requirements: [
                "0–1 year of experience in business development, preferably in IT/tech",
                "Bachelor’s degree in Business Administration, Marketing, IT, or related field",
                "Lead generation and account management skills",
                "2-Wheeler License required",
                "Strong understanding of IT products/services (preferred)",
                "Good communication and team collaboration skills"
            ],
            responsibilities: [
                "Develop a solid understanding of the company’s products and IT services",
                "Identify and connect with potential clients through research and outreach",
                "Collaborate with marketing to generate leads and support promotions",
                "Maintain and update business development reports",
                "Analyze market trends and gather client feedback"
            ],
            benefits: [
                "Office-based work in Thiruvananthapuram",
                "Mentorship from experienced professionals",
                "Opportunity for long-term growth with the company",
                "Competitive salary post-probation"
            ]
        },
        {
            title: "Data Science and AI",
            posted: "2 days ago",
            location: "Kerala, Thiruvananthapuram (Office)",
            type: "Full Time",
            description: "AGILEINFOTECH is looking for a passionate Data Science and AI enthusiast to join our startup team in Thiruvananthapuram. You'll work on real-world AI projects and help train interns in AI concepts, tools, and model development.",
            tags: ["Python", "Machine Learning", "Deep Learning", "NLP", "Data Viz"],
            requirements: [
                "0-1 year of experience in Data Science or AI",
                "Proficiency in Python (Pandas, NumPy, Scikit-learn)",
                "Basic understanding of machine learning and neural networks",
                "Experience with Jupyter, TensorFlow, or PyTorch",
                "Ability to communicate in Tamil, Malayalam, and English preferred"
            ],
            responsibilities: [
                "Work on AI and data-driven projects and prototypes",
                "Develop and test machine learning models",
                "Train and support interns in data science practices",
                "Collaborate with tech and marketing teams on AI integrations",
                "Analyze datasets and prepare visual reports"
            ],
            benefits: [
                "Hands-on exposure to real AI projects",
                "Startup culture with team mentorship",
                "Office-based work in Thiruvananthapuram",
                "Learning opportunities with internal training sessions"
            ]
        }
    ];

    return (
        <main style={{ paddingTop: '50px', background: 'var(--bg-color)' }}>
            <section className="section">
                <div className="container">
                    <Link to="/career" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: 600, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-base)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                        <ArrowLeft size={18} /> Back to Careers
                    </Link>

                    <div style={{ marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                            Career <span className="text-gradient">Opportunities</span>
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: 1.6 }}>
                            Discover your next role at AgileInfoTech. We're looking for talented individuals to join our growing team in Thiruvananthapuram.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {jobs.map((job, idx) => (
                            <JobCard key={idx} job={job} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default FullTimeCareers;
