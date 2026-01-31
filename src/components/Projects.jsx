import { useState, useEffect } from 'react';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "Full-stack online store with payment gateway, admin panel, and inventory management system.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "#8b5cf6",
      stats: ["10K+ Users", "99.9% Uptime"]
    },
    {
      title: "Food Delivery App",
      category: "Mobile Application",
      description: "iOS and Android app with real-time tracking, online ordering, and restaurant dashboard.",
      technologies: ["React Native", "Firebase", "Google Maps"],
      color: "#06b6d4",
      stats: ["50K+ Downloads", "4.8 Stars"]
    },
    {
      title: "Healthcare Portal",
      category: "Web Application",
      description: "Patient management system with appointment booking, medical records, and doctor consultation.",
      technologies: ["React", "Express.js", "PostgreSQL"],
      color: "#10b981",
      stats: ["5K+ Patients", "HIPAA Compliant"]
    },
    {
      title: "School Management",
      category: "Web Application",
      description: "Complete school management with student records, fee payment, examination, and attendance tracking.",
      technologies: ["Next.js", "Django", "PostgreSQL"],
      color: "#f59e0b",
      stats: ["50+ Schools", "10K+ Students"]
    },
    {
      title: "Real Estate Platform",
      category: "Web Application",
      description: "Property listing website with advanced search, map integration, and agent dashboard.",
      technologies: ["Next.js", "TypeScript", "Prisma"],
      color: "#ec4899",
      stats: ["1M+ Listings", "200K+ Agents"]
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Application",
      description: "Health and fitness app with workout plans, diet tracking, and progress analytics.",
      technologies: ["React Native", "Node.js", "MongoDB"],
      color: "#ef4444",
      stats: ["100K+ Users", "1M+ Workouts"]
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
      <div style={styles.bgGrid} />
      <div style={styles.bgOrb} />

      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.header}>
          <span style={styles.badge} className="animate-fade-in">Portfolio</span>
          <h2 style={styles.heading} className="animate-fade-up">
            Our Premium
            <span style={styles.gradient}>Projects</span>
          </h2>
          <p style={styles.subtitle} className="animate-fade-up stagger-1">
            Real projects we've delivered for clients worldwide with measurable impact
          </p>
        </div>

        {/* Projects Grid */}
        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={index}
              data-observe
              data-index={index}
              style={{
                ...styles.card,
                opacity: visibleCards.includes(index) ? 1 : 0,
                transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Glow */}
              <div style={{
                ...styles.cardGlow,
                background: `radial-gradient(circle at 50% 0%, ${project.color}25, transparent 70%)`,
              }} />

              {/* Card Header */}
              <div style={styles.cardHeader}>
                <div style={styles.categoryWrapper}>
                  <span style={{...styles.category, background: `${project.color}20`, color: project.color}}>
                    {project.category}
                  </span>
                  <div style={{
                    ...styles.categoryGlow,
                    background: project.color,
                    boxShadow: `0 0 20px ${project.color}60`,
                  }} />
                </div>
                <h3 style={styles.cardTitle}>{project.title}</h3>
              </div>

              {/* Description */}
              <p style={styles.description}>{project.description}</p>

              {/* Stats */}
              <div style={styles.stats}>
                {project.stats.map((stat, i) => (
                  <span key={i} style={styles.stat}>
                    <span style={{...styles.statDot, background: project.color}} />
                    {stat}
                  </span>
                ))}
              </div>

              {/* Technologies */}
              <div style={styles.tags}>
                {project.technologies.map((tech, i) => (
                  <span key={i} style={{
                    ...styles.tag,
                    opacity: hoveredCard === index ? 1 : 0.7,
                    transform: hoveredCard === index ? 'translateY(0)' : 'translateY(5px)',
                    transition: `all 0.3s ease ${i * 0.05}s`,
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Overlay */}
              <div style={{
                ...styles.hoverOverlay,
                opacity: hoveredCard === index ? 1 : 0,
              }}>
                <span style={styles.hoverText}>View Case Study</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={styles.hoverArrow}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              {/* Border Gradient */}
              <div style={{
                ...styles.borderGradient,
                background: `linear-gradient(135deg, ${project.color}40, transparent)`,
              }} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={styles.cta}>
          <p style={styles.ctaText}>Want to see more of our work?</p>
          <button style={styles.ctaBtn}>
            View All Projects
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={styles.ctaArrow}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
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

  bgGrid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(139, 92, 246, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(139, 92, 246, 0.02) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    pointerEvents: 'none',
  },

  bgOrb: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '800px',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(80px)',
    pointerEvents: 'none',
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
    background: 'rgba(6, 182, 212, 0.1)',
    border: '1px solid rgba(6, 182, 212, 0.3)',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#22d3ee',
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
    background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
    gap: '28px',
  },

  card: {
    position: 'relative',
    padding: '32px',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '20px',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
  },

  cardGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '150px',
    pointerEvents: 'none',
  },

  cardHeader: {
    marginBottom: '20px',
  },

  categoryWrapper: {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '12px',
  },

  category: {
    position: 'relative',
    padding: '6px 14px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    zIndex: 1,
  },

  categoryGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    borderRadius: '6px',
    opacity: 0.2,
    zIndex: 0,
  },

  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#f8fafc',
    margin: 0,
  },

  description: {
    fontSize: '0.95rem',
    color: '#64748b',
    lineHeight: '1.7',
    marginBottom: '20px',
  },

  stats: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  },

  stat: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    fontWeight: '500',
    color: '#94a3b8',
  },

  statDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
  },

  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },

  tag: {
    padding: '8px 14px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '500',
    color: '#94a3b8',
  },

  hoverOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(10, 10, 15, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'opacity 0.3s ease',
  },

  hoverText: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#f8fafc',
  },

  hoverArrow: {
    width: '20px',
    height: '20px',
    color: '#8b5cf6',
  },

  borderGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '2px',
  },

  cta: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '60px',
    gap: '20px',
  },

  ctaText: {
    fontSize: '1.1rem',
    color: '#64748b',
  },

  ctaBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '16px 32px',
    background: 'transparent',
    border: '2px solid rgba(139, 92, 246, 0.4)',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#a78bfa',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  ctaArrow: {
    width: '20px',
    height: '20px',
    transition: 'transform 0.3s ease',
  },
};

export default Projects;

