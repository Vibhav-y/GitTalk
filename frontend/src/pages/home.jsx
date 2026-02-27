import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, FileText, Zap, Eye, LayoutTemplate, Star, ChevronRight, Bot, Sparkles, LayoutGrid, Code2, Download, Shield } from 'lucide-react';

function Home() {
    const [visible, setVisible] = useState(false);
    const [typedText, setTypedText] = useState('');
    const fullText = 'Add my Twitter and LinkedIn socials...';

    useEffect(() => { setVisible(true); }, []);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i <= fullText.length) {
                setTypedText(fullText.substring(0, i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            {/* ─── HERO ─── */}
            <section style={{
                textAlign: 'center', paddingTop: '80px', paddingBottom: '70px',
                position: 'relative', overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', top: '-250px', left: '50%', transform: 'translateX(-50%)',
                    width: '900px', height: '900px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(251,191,141,0.04) 0%, rgba(244,164,96,0.02) 40%, transparent 70%)',
                    pointerEvents: 'none', zIndex: 0
                }} />

                <div style={{
                    position: 'relative', zIndex: 1,
                    opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)',
                    transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
                }}>

                    <h1 style={{
                        fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
                        letterSpacing: '-0.04em', lineHeight: 1.08,
                        maxWidth: '780px', margin: '0 auto 24px', fontWeight: 700,
                    }}>
                        Your repos deserve<br />
                        <span style={{
                            background: 'linear-gradient(135deg, #e2c4a0, #d4a574, #c9956a)',
                            WebkitBackgroundClip: 'text', backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>better documentation</span>
                    </h1>

                    <p style={{
                        margin: '0 auto 44px', fontSize: '1.05rem',
                        color: 'var(--muted-foreground)', maxWidth: '480px', lineHeight: 1.7,
                    }}>
                        Connect your GitHub, choose a template, and generate
                        production-ready READMEs in seconds — not hours.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <Link to="/auth" className="btn-primary" style={{
                            height: '2.75rem', padding: '0 24px', fontSize: '0.9rem',
                            background: '#fff', color: '#0a0a0a', border: 'none',
                            borderRadius: '8px', fontWeight: 600,
                        }}>
                            <Github size={16} /> Get Started Free <ArrowRight size={14} />
                        </Link>
                        <Link to="/templates" className="btn-secondary" style={{
                            height: '2.75rem', padding: '0 20px', fontSize: '0.9rem',
                            borderRadius: '8px',
                        }}>
                            Browse Templates
                        </Link>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '48px', flexWrap: 'wrap' }}>
                        {['AI-Powered', '20+ Widgets', '4 Templates', 'One-Click Export'].map((tag, i) => (
                            <span key={i} style={{
                                padding: '5px 14px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 500,
                                border: '1px solid var(--border)', color: 'var(--muted-foreground)',
                                background: 'var(--card)', letterSpacing: '0.02em',
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── EDITOR PREVIEW (3 Column Mockup) ─── */}
            <section style={{
                maxWidth: '1060px', width: '100%', margin: '0 auto 80px', padding: '0 24px',
                opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            }}>
                <div style={{
                    borderRadius: '12px', border: '1px solid var(--border)', backgroundColor: 'var(--card)',
                    boxShadow: '0 25px 60px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.03)',
                    overflow: 'hidden',
                }}>
                    {/* Title bar */}
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px',
                        borderBottom: '1px solid var(--border)', background: 'var(--muted)',
                    }}>
                        <div style={{ display: 'flex', gap: '6px' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
                        </div>
                        <div style={{ flex: 1, textAlign: 'center', fontSize: '0.75rem', color: 'var(--muted-foreground)', fontWeight: 500 }}>
                            GitTool Editor — my-awesome-project
                        </div>
                    </div>

                    {/* 3-column mock */}
                    <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 1fr', minHeight: '300px' }}>
                        {/* Sidebar mock */}
                        <div style={{ borderRight: '1px solid var(--border)', padding: '16px', background: 'var(--card)' }}>
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                                <div style={{ flex: 1, padding: '5px', borderRadius: '6px', background: 'var(--background)', textAlign: 'center', fontSize: '0.7rem', color: '#22d3ee', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                                    <Bot size={10} /> AI Chat
                                </div>
                                <div style={{ flex: 1, padding: '5px', borderRadius: '6px', textAlign: 'center', fontSize: '0.7rem', color: 'var(--muted-foreground)', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                                    <LayoutGrid size={10} /> Widgets
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '16px' }}>
                                <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg, #22d3ee, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Sparkles size={10} color="#fff" />
                                </div>
                                <p style={{ fontSize: '0.65rem', color: 'var(--muted-foreground)', lineHeight: 1.4, margin: 0 }}>
                                    Ask me to add sections, badges, or rewrite content!
                                </p>
                            </div>
                            {/* Typing animation mock */}
                            <div style={{ padding: '8px 10px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--background)', fontSize: '0.65rem', color: 'var(--foreground)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span style={{ opacity: typedText ? 1 : 0.4 }}>{typedText || 'Ask AI...'}<span style={{ animation: 'blink 1s infinite' }}>|</span></span>
                            </div>
                        </div>

                        {/* Raw markdown mock */}
                        <div style={{ padding: '16px', borderRight: '1px solid var(--border)', fontFamily: 'ui-monospace, monospace', fontSize: '0.72rem', color: 'var(--muted-foreground)', lineHeight: 1.8, background: 'var(--background)' }}>
                            <div style={{ fontSize: '0.65rem', color: 'var(--muted-foreground)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Code2 size={10} /> README.md
                            </div>
                            <span style={{ color: 'var(--foreground)', fontWeight: 600 }}># My Project</span><br />
                            <span style={{ opacity: 0.5 }}>&gt; Fast, modern toolkit</span><br /><br />
                            <span style={{ color: '#22d3ee' }}>## 🚀 Features</span><br />
                            <span>- ⚡ Lightning fast</span><br />
                            <span>- 🔒 Secure by default</span><br />
                            <span>- 📦 Zero config</span><br /><br />
                            <span style={{ color: '#22d3ee' }}>## Installation</span><br />
                            <span style={{ background: 'var(--muted)', padding: '2px 6px', borderRadius: '3px', fontSize: '0.68rem' }}>npm install my-project</span>
                        </div>

                        {/* Preview mock */}
                        <div style={{ padding: '16px', fontSize: '0.78rem', lineHeight: 1.6, background: 'var(--background)' }}>
                            <div style={{ fontSize: '0.65rem', color: 'var(--muted-foreground)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <FileText size={10} style={{ color: '#22d3ee' }} /> Preview
                            </div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '2px', fontWeight: 700 }}>My Project</h3>
                            <p style={{ color: 'var(--muted-foreground)', marginBottom: '12px', fontSize: '0.75rem' }}>Fast, modern toolkit</p>
                            <h4 style={{ fontSize: '0.85rem', marginBottom: '6px' }}>🚀 Features</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '12px', fontSize: '0.75rem' }}>
                                <span>⚡ Lightning fast</span>
                                <span>🔒 Secure by default</span>
                                <span>📦 Zero config</span>
                            </div>
                            {/* Badge mockups */}
                            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                {[
                                    { label: 'stars', val: '128', bg: '#22d3ee' },
                                    { label: 'forks', val: '34', bg: '#818cf8' },
                                    { label: 'license', val: 'MIT', bg: '#f59e0b' },
                                ].map((b, i) => (
                                    <div key={i} style={{ display: 'flex', borderRadius: '4px', overflow: 'hidden', fontSize: '0.6rem', fontWeight: 600 }}>
                                        <span style={{ background: '#0d1117', padding: '3px 6px', color: '#ccc' }}>{b.label}</span>
                                        <span style={{ background: b.bg, padding: '3px 6px', color: '#fff' }}>{b.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── HOW IT WORKS ─── */}
            <section style={{ padding: '0 24px 80px', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <p style={{ color: '#c9956a', fontSize: '0.8rem', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>How it works</p>
                    <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>Three steps to great docs</h2>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem', maxWidth: '460px', margin: '0 auto' }}>
                        Go from zero to polished in under a minute.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                    {[
                        { step: '01', icon: <Github size={22} />, title: 'Connect GitHub', desc: 'Sign in with GitHub OAuth. We securely access your public and private repos.' },
                        { step: '02', icon: <LayoutTemplate size={22} />, title: 'Pick a Template', desc: 'Professional, Creative, Minimal, or Detailed — each crafted for a different audience.' },
                        { step: '03', icon: <Zap size={22} />, title: 'Generate & Edit', desc: 'AI analyzes your codebase and produces a README. Fine-tune with AI chat and drag-n-drop widgets.' },
                    ].map((item, i) => (
                        <div key={i} style={{ position: 'relative', padding: '28px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--card)', transition: 'border-color 0.2s' }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(201,149,106,0.4)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                        >
                            <span style={{ position: 'absolute', top: '14px', right: '18px', fontSize: '2.5rem', fontWeight: 800, color: 'var(--border)', lineHeight: 1 }}>{item.step}</span>
                            <div style={{
                                width: '42px', height: '42px', borderRadius: '9px',
                                background: 'linear-gradient(135deg, rgba(201,149,106,0.1), rgba(226,196,160,0.08))',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '16px', color: '#c9956a',
                            }}>{item.icon}</div>
                            <h3 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>{item.title}</h3>
                            <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.5, fontSize: '0.85rem' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── FEATURES ─── */}
            <section style={{ padding: '60px 24px 80px', maxWidth: '1000px', margin: '0 auto', width: '100%', borderTop: '1px solid var(--border)' }}>
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <p style={{ color: '#c9956a', fontSize: '0.8rem', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Features</p>
                    <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>Everything you need</h2>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem', maxWidth: '460px', margin: '0 auto' }}>
                        Built for developers who care about their open-source presence.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                    {[
                        { icon: <Bot size={20} />, title: 'AI Chat Editor', desc: 'Tell the AI to rewrite, add sections, insert badges — it understands shields.io, stats cards, and socials.' },
                        { icon: <LayoutGrid size={20} />, title: 'Widget Library', desc: '20+ drag-and-drop widgets: GitHub stats, social badges, contributor grids, and live repo badges.' },
                        { icon: <LayoutTemplate size={20} />, title: '4 Templates', desc: 'Professional, Creative, Minimalist, Detailed — each produces structurally different documentation.' },
                        { icon: <Eye size={20} />, title: 'Live Preview', desc: '3-pane editor with raw markdown and rendered preview side by side. See changes instantly.' },
                        { icon: <Shield size={20} />, title: 'GitHub OAuth', desc: 'Secure sign-in. Access public and private repos without storing tokens.' },
                        { icon: <Download size={20} />, title: 'Export & Save', desc: 'Download .md files, save to dashboard, and re-edit anytime with full version persistence.' },
                    ].map((f, i) => (
                        <div key={i} style={{
                            padding: '24px', borderRadius: '12px', border: '1px solid var(--border)',
                            background: 'var(--card)', transition: 'border-color 0.2s',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(201,149,106,0.4)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                        >
                            <div style={{
                                width: '38px', height: '38px', borderRadius: '8px', flexShrink: 0,
                                background: 'linear-gradient(135deg, rgba(201,149,106,0.1), rgba(226,196,160,0.08))',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9956a',
                                marginBottom: '14px',
                            }}>{f.icon}</div>
                            <h3 style={{ fontSize: '0.95rem', marginBottom: '6px' }}>{f.title}</h3>
                            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.82rem', lineHeight: 1.5 }}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section style={{ padding: '0 24px 80px', maxWidth: '720px', margin: '0 auto', width: '100%' }}>
                <div style={{
                    textAlign: 'center', padding: '52px 40px', borderRadius: '12px',
                    border: '1px solid rgba(201,149,106,0.15)', position: 'relative', overflow: 'hidden',
                    background: 'linear-gradient(160deg, rgba(201,149,106,0.04), var(--card) 40%, rgba(226,196,160,0.03))',
                }}>
                    <div style={{
                        position: 'absolute', top: '-100px', right: '-60px',
                        width: '220px', height: '220px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(201,149,106,0.06), transparent 70%)',
                        pointerEvents: 'none',
                    }} />
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '12px', position: 'relative', fontWeight: 600 }}>Ready to ship?</h2>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: '0.95rem', maxWidth: '380px', margin: '0 auto 28px' }}>
                        Generate your first professional README in under 60 seconds.
                    </p>
                    <Link to="/auth" className="btn-primary" style={{
                        height: '2.75rem', padding: '0 24px', fontSize: '0.9rem',
                        background: '#fff', color: '#0a0a0a', border: 'none',
                        borderRadius: '8px', fontWeight: 600, position: 'relative',
                    }}>
                        Get Started Free <ArrowRight size={14} />
                    </Link>
                </div>
            </section>

            {/* ─── FOOTER ─── */}
            <footer style={{
                borderTop: '1px solid var(--border)', padding: '32px 24px',
                maxWidth: '1000px', margin: '0 auto', width: '100%',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '0.9rem' }}>
                    <FileText size={16} style={{ color: '#22d3ee' }} /> GitTool
                </div>
                <span style={{ color: 'var(--muted-foreground)', fontSize: '0.75rem' }}>
                    © {new Date().getFullYear()} GitTool. Built with ❤️ for open source.
                </span>
                <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--muted-foreground)' }}><Github size={16} /></a>
            </footer>

            <style>{`
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `}</style>
        </div>
    );
}

export default Home;
