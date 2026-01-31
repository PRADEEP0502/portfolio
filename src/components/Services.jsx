import { useState, useEffect } from 'react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  const services = [
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" style={styles.serviceIconSvg}>
          <rect x="4" y="4" width="56" height="56" rx="8" stroke="url(#gradient1)"/>
          <path d="M20 28h24M20 36h16" stroke="url(#gradient1)"/>
          <defs>
            <linearGradient id="gradient1" x1="4" y1="4" x2="60" y2="60">
              <stop stopColor="#8b5cf6"/>
              <stop offset="1" stopColor="#3b82f6"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Website Development",
      description: "Stunning, fast, and secure websites that convert visitors into customers. Built with modern technologies.",
      features: ["React & Next.js", "E-commerce", "CMS Integration", "SEO Optimized"],
      gradient: "linear-gradient(135deg, #8b5cf6, #3b82f6)"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" style={styles.serviceIconSvg}>
          <rect x="8" y="8" width="20" height="32" rx="3" stroke="url(#gradient2)"/>
          <rect x="36" y="8" width="20" height="32" rx="3" stroke="url(#gradient2)"/>
          <path d="M18 24h8M18 30h8M18 36h4" stroke="url(#gradient2)"/>
          <path d="M46 24h8M46 30h8M46 36h4" stroke="url(#gradient2)"/>
          <defs>
            <linearGradient id="gradient2" x1="8" y1="8" x2="56" y2="56">
              <stop stopColor="#06b6d4"/>
              <stop offset="1" stopColor="#3b82f6"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that delight users and drive engagement.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
      gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" style={styles.serviceIconSvg}>
          <circle cx="32" cy="24" r="12" stroke="url(#gradient3)"/>
          <path d="M12 56c0-11 8-20 20-20s20 9 20 20" stroke="url(#gradient3)"/>
          <defs>
            <linearGradient id="gradient3" x1="12" y1="24" x2="52" y2="56">
              <stop stopColor="#ec4899"/>
              <stop offset="1" stopColor="#8b5cf6"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love. Research-driven design process.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" style={styles.serviceIconSvg}>
          <rect x="8" y="24" width="16" height="24" rx="2" stroke="url(#gradient4)"/>
          <rect x="40" y="24" width="16" height="24" rx="2" stroke="url(#gradient4)"/>
          <path d="M24 36h16M24 44h12" stroke="url(#gradient4)"/>
          <defs>
            <linearGradient id="gradient4" x1="8" y1="24" x2="56" y2="56">
              <stop stopColor="#f093fb"/>
              <stop offset="1" stopColor="#ec4899"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Backend & APIs",
      description: "Scalable, secure server-side solutions with robust APIs and database design.",
      features: ["Node.js & Python", "REST & GraphQL", "PostgreSQL & MongoDB", "Cloud Services"],
      gradient: "linear-gradient(135deg, #f093fb, #ec4899)"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" style={styles.serviceIconSvg}>
          <path d="M32 8L56 24v24L32 56 8 48V24L32 8z" stroke="url(#gradient5)"/>
          <path d="M32 8v24M32 32v16M8 24h48" stroke="url(#gradient5)"/>
          <defs>
            <linearGradient id="gradient5" x1="8" y1="8" x2="56" y2="56">
              <stop stopColor="#10b981"/>
              <stop offset="1" stopColor="#06b6d4"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Cloud Solutions",
      description: "Deploy and scale your applications with enterprise-grade cloud infrastructure.",
      features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipeline", "Serverless"],
      gradient: "linear-gradient(135deg, #10b981, #06b6d4)"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" style={styles.serviceIconSvg}>
          <path d="M32 8l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z" stroke="url(#gradient6)"/>
          <circle cx="32" cy="32" r="8" stroke="url(#gradient6)"/>
          <defs>
            <linearGradient id="gradient6" x1="8" y1="8" x2="56" y2="56">
              <stop stopColor="#f59e0b"/>
              <stop offset="1" stopColor="#ef4444"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Security & Testing",
      description: "Comprehensive security audits and quality assurance to protect your business.",
      features: ["Penetration Testing", "Code Review", "Performance Testing", "Compliance"],
      gradient: "linear-gradient(135deg, #f59e0b, #ef4444)"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={styles.section}>
      {/* Background Elements */}
      <div style={styles.bgOrb1} />
      <div style={styles.bgOrb2} />
      
      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.header}>
          <span style={styles.badge} className="animate-fade-in">Our Expertise</span>
          <h2 style={styles.heading} className="animate-fade-up">
            Premium Services
            <span style={styles.gradient}>Crafted for Excellence</span>
          </h2>
          <p style={styles.subtitle} className="animate-fade-up stagger-1">
            We deliver end-to-end software solutions tailored to your unique business needs
          </p>
        </div>

        {/* Services Grid */}
        <div style={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              data-observe
              data-index={index}
              style={{
                ...styles.card,
                opacity: visibleCards.includes(index) ? 1 : 0,
                transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(50px)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 30px 60px -15px ${service.gradient.includes('#8b5cf6') ? 'rgba(139, 92, 246, 0.4)' : service.gradient.includes('#06b6d4') ? 'rgba(6, 182, 212, 0.4)' : service.gradient.includes('#ec4899') ? 'rgba(236, 72, 153, 0.4)' : service.gradient.includes('#10b981') ? 'rgba(16, 185, 129, 0.4)' : service.gradient.includes('#f59e0b') ? 'rgba(245, 158, 11, 0.4)' : 'rgba(139, 92, 246, 0.4)'}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
              }}
            >
              {/* Card Glow */}
              <div style={{...styles.cardGlow, background: service.gradient}} />
              
              {/* Icon Container */}
              <div style={{...styles.iconContainer, background: `${service.gradient}15`}}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardDesc}>{service.description}</p>

              {/* Features */}
              <div style={styles.features}>
                {service.features.map((feature, i) => (
                  <span key={i} style={styles.feature}>
                    <span style={{...styles.featureDot, background: service.gradient}} />
                    {feature}
                  </span>
                ))}
              </div>

              {/* Arrow Indicator */}
              <div style={styles.arrowContainer}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={styles.arrow}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '120px 40px',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 50%, #0a0a0f 100%)',
  },

  // Background Orbs
  bgOrb1: {
    position: 'absolute',
    top: '10%',
    left: '-10%',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'float 10s ease-in-out infinite',
  },

  bgOrb2: {
    position: 'absolute',
    bottom: '10%',
    right: '-10%',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'float-delayed 8s ease-in-out infinite',
  },

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 10,
  },

  header: {
    textAlign: 'center',
    marginBottom: '70px',
  },

  badge: {
    display: 'inline-block',
    padding: '10px 24px',
    background: 'rgba(139, 92, 246, 0.1)',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#a78bfa',
    marginBottom: '24px',
    backdropFilter: 'blur(10px)',
  },

  heading: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '800',
    marginBottom: '16px',
    letterSpacing: '-0.02em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  gradient: {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    fontWeight: '500',
    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginTop: '8px',
  },

  subtitle: {
    fontSize: '1.1rem',
    color: '#64748b',
    maxWidth: '600px',
    margin: '0 auto',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '28px',
  },

  card: {
    position: 'relative',
    padding: '36px',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '20px',
    backdropFilter: 'blur(20px)',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
  },

  cardGlow: {
    position: 'absolute',
    top: '-100px',
    right: '-100px',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: 0.15,
    transition: 'opacity 0.3s ease',
  },

  iconContainer: {
    width: '70px',
    height: '70px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    transition: 'transform 0.3s ease',
  },

  serviceIconSvg: {
    width: '40px',
    height: '40px',
  },

  cardTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: '12px',
    transition: 'color 0.3s ease',
  },

  cardDesc: {
    fontSize: '0.95rem',
    color: '#64748b',
    lineHeight: '1.7',
    marginBottom: '24px',
  },

  features: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '20px',
  },

  feature: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    fontWeight: '500',
    color: '#94a3b8',
    padding: '6px 12px',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '6px',
  },

  featureDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    flexShrink: 0,
  },

  arrowContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  arrow: {
    width: '24px',
    height: '24px',
    color: 'rgba(139, 92, 246, 0.5)',
    transition: 'all 0.3s ease',
    transform: 'translateX(-5px)',
  },
};

export default Services;

