import { useState, useEffect } from 'react';

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [visibleMembers, setVisibleMembers] = useState([]);

  const teamMembers = [
    {
      name: "Pradeep",
      role: "Full Stack Developer",
      bio: "Main brain of the team. Logic strong. Builds website & mobile app core logic, backend APIs, database design and integration.",
      skills: ["React", "Node.js", "Backend APIs", "Database Design"],
      image: "/src/assets/images/pradeep.jpeg",
      gradient: "linear-gradient(135deg, #8b5cf6, #3b82f6)"
    },
    {
      name: "Dhivin",
      role: "UI / UX Designer",
      bio: "Design expert creating stunning wireframes, screen layouts and user-friendly flows. Ensures design consistency across mobile and desktop.",
      skills: ["Wireframing", "UI Design", "Prototyping", "Responsive Design"],
      image: "/src/assets/images/dhivin.jpeg",
      gradient: "linear-gradient(135deg, #ec4899, #f093fb)"
    },
    {
      name: "EBI",
      role: "DevOps & Deployment Engineer",
      bio: "Ensures projects go LIVE successfully. Handles cloud deployment, CI/CD pipelines, server configuration and app monitoring.",
      skills: ["Cloud Deployment", "CI/CD", "Server Management", "Monitoring"],
      image: "/src/assets/images/ebi.jpeg",
      gradient: "linear-gradient(135deg, #06b6d4, #10b981)"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setVisibleMembers(prev => [...new Set([...prev, index])]);
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
      <div style={styles.bgPattern} />

      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.header}>
          <span style={styles.badge} className="animate-fade-in">Our Team</span>
          <h2 style={styles.heading} className="animate-fade-up">
            Meet the
            <span style={styles.gradient}>Experts</span>
          </h2>
          <p style={styles.subtitle} className="animate-fade-up stagger-1">
            Passionate experts dedicated to bringing your vision to life
          </p>
        </div>

        {/* Team Grid */}
        <div style={styles.grid}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-observe
              data-index={index}
              style={{
                ...styles.card,
                opacity: visibleMembers.includes(index) ? 1 : 0,
                transform: visibleMembers.includes(index) ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
              }}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Background Gradient */}
              <div style={{
                ...styles.cardGradient,
                background: member.gradient,
                opacity: hoveredMember === index ? 0.15 : 0.05,
              }} />

              {/* Glow Effect */}
              <div style={{
                ...styles.cardGlow,
                background: member.gradient,
              }} />

              {/* Avatar Container */}
              <div style={styles.avatarContainer}>
                <div style={{
                  ...styles.avatarWrapper,
                  background: member.gradient,
                  boxShadow: `0 0 30px ${member.gradient.includes('#8b5cf6') ? '#8b5cf640' : member.gradient.includes('#ec4899') ? '#ec489940' : '#06b6d440'}`,
                }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={styles.avatarImage}
                  />
                </div>
                {/* Status Indicator */}
                <div style={{
                  ...styles.statusIndicator,
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981',
                }} />
              </div>

              {/* Content */}
              <div style={styles.content}>
                <h3 style={styles.name}>{member.name}</h3>
                <p style={styles.role}>{member.role}</p>
                <p style={styles.bio}>{member.bio}</p>

                {/* Skills */}
                <div style={styles.skills}>
                  {member.skills.map((skill, i) => (
                    <span key={i} style={{
                      ...styles.skill,
                      opacity: hoveredMember === index ? 1 : 0.6,
                      transform: hoveredMember === index ? 'scale(1.05)' : 'scale(1)',
                      transition: `all 0.3s ease ${i * 0.05}s`,
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links (on hover) */}
              <div style={{
                ...styles.socialLinks,
                opacity: hoveredMember === index ? 1 : 0,
                transform: hoveredMember === index ? 'translateY(0)' : 'translateY(10px)',
              }}>
                <button style={styles.socialBtn}>
                  <svg viewBox="0 0 24 24" fill="currentColor" style={styles.socialIcon}>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
                <button style={styles.socialBtn}>
                  <svg viewBox="0 0 24 24" fill="currentColor" style={styles.socialIcon}>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
                <button style={styles.socialBtn}>
                  <svg viewBox="0 0 24 24" fill="currentColor" style={styles.socialIcon}>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div style={styles.cta}>
          <div style={styles.ctaCard}>
            <div style={styles.ctaContent}>
              <h3 style={styles.ctaTitle}>Want to join our team?</h3>
              <p style={styles.ctaText}>We're always looking for talented individuals who share our passion for innovation.</p>
            </div>
            <button style={styles.ctaBtn}>
              View Open Positions
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={styles.ctaArrow}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
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

  bgOrb1: {
    position: 'absolute',
    top: '20%',
    left: '-5%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'float 8s ease-in-out infinite',
  },

  bgOrb2: {
    position: 'absolute',
    bottom: '20%',
    right: '-5%',
    width: '350px',
    height: '350px',
    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'float-delayed 10s ease-in-out infinite',
  },

  bgPattern: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.03) 0%, transparent 50%)
    `,
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
    background: 'rgba(236, 72, 153, 0.1)',
    border: '1px solid rgba(236, 72, 153, 0.3)',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#f472b6',
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
    background: 'linear-gradient(135deg, #ec4899, #f093fb)',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '28px',
    justifyItems: 'center',
  },

  card: {
    position: 'relative',
    padding: '36px 28px',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '24px',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    maxWidth: '360px',
    width: '100%',
  },

  cardGradient: {
    position: 'absolute',
    inset: 0,
    transition: 'opacity 0.3s ease',
  },

  cardGlow: {
    position: 'absolute',
    top: '-100px',
    right: '-100px',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    filter: 'blur(60px)',
    opacity: 0.2,
  },

  avatarContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '24px',
  },

  avatarWrapper: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
  },

  avatarImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },

  statusIndicator: {
    position: 'absolute',
    bottom: '5px',
    right: 'calc(50% - 35px)',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    border: '3px solid #0a0a0f',
  },

  content: {
    textAlign: 'center',
  },

  name: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: '6px',
  },

  role: {
    fontSize: '14px',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '16px',
  },

  bio: {
    fontSize: '14px',
    color: '#64748b',
    lineHeight: '1.7',
    marginBottom: '20px',
  },

  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
  },

  skill: {
    padding: '8px 14px',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '500',
    color: '#94a3b8',
    transition: 'all 0.3s ease',
  },

  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
    transition: 'all 0.3s ease',
  },

  socialBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    background: 'rgba(255, 255, 255, 0.03)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  socialIcon: {
    width: '18px',
    height: '18px',
    fill: '#64748b',
    transition: 'fill 0.3s ease',
  },

  cta: {
    marginTop: '70px',
  },

  ctaCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '40px',
    background: 'rgba(139, 92, 246, 0.05)',
    border: '1px solid rgba(139, 92, 246, 0.15)',
    borderRadius: '24px',
    flexWrap: 'wrap',
    gap: '24px',
  },

  ctaContent: {
    flex: 1,
    minWidth: '280px',
  },

  ctaTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: '8px',
  },

  ctaText: {
    fontSize: '1rem',
    color: '#64748b',
    margin: 0,
  },

  ctaBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '16px 28px',
    background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
    border: 'none',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: '600',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4)',
  },

  ctaArrow: {
    width: '18px',
    height: '18px',
    transition: 'transform 0.3s ease',
  },
};

export default Team;

