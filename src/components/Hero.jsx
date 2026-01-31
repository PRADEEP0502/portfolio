import { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const floatingOrbs = [
    { size: '300px', top: '10%', left: '5%', delay: '0s', color: 'rgba(139, 92, 246, 0.3)' },
    { size: '200px', top: '60%', left: '80%', delay: '1s', color: 'rgba(59, 130, 246, 0.25)' },
    { size: '150px', top: '30%', left: '85%', delay: '2s', color: 'rgba(6, 182, 212, 0.2)' },
    { size: '250px', top: '70%', left: '10%', delay: '3s', color: 'rgba(236, 72, 153, 0.2)' },
  ];

  const geometricShapes = [
    { type: 'square', size: '40px', top: '15%', left: '90%', delay: '0s' },
    { type: 'circle', size: '30px', top: '80%', left: '5%', delay: '1s' },
    { type: 'triangle', size: '35px', top: '25%', left: '15%', delay: '2s' },
    { type: 'diamond', size: '25px', top: '85%', left: '90%', delay: '3s' },
  ];

  return (
    <section style={styles.hero}>
      {/* Animated Background Orbs */}
      {floatingOrbs.map((orb, index) => (
        <div
          key={index}
          style={{
            ...styles.orb,
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            background: orb.color,
            animationDelay: orb.delay,
          }}
        />
      ))}

      {/* Floating Geometric Shapes */}
      {geometricShapes.map((shape, index) => (
        <div
          key={`shape-${index}`}
          style={{
            ...styles.shape,
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            animationDelay: shape.delay,
            borderRadius: shape.type === 'circle' ? '50%' : 
                          shape.type === 'triangle' ? '0' : '4px',
            transform: shape.type === 'triangle' ? 'rotate(45deg)' : 'none',
          }}
        />
      ))}

      {/* Grid Pattern Overlay */}
      <div style={styles.gridPattern} />

      {/* Spotlight Effect following mouse */}
      <div
        style={{
          ...styles.spotlight,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1), transparent 40%)`,
        }}
      />

      {/* Main Content */}
      <div style={{
        ...styles.content,
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
      }}>
        {/* Badge */}
        <div style={styles.badge} className="animate-fade-up">
          <span style={styles.badgeDot} />
          <span>Premium Software Development</span>
        </div>

        {/* Main Title */}
        <h1 style={styles.title} className="animate-fade-up stagger-1">
          Techy Solution
        </h1>

        {/* Subtitle with gradient */}
        <p style={styles.subtitle} className="animate-fade-up stagger-2">
          We craft <span style={styles.gradientText}>premium digital experiences</span> that 
          transform businesses and inspire audiences worldwide.
        </p>

        {/* Stack pills */}
        <div style={styles.stackContainer} className="animate-fade-up stagger-3">
          {['Website Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions'].map((item, i) => (
            <span key={i} style={styles.stackPill}>
              {item}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={styles.buttonContainer} className="animate-fade-up stagger-4">
          <button
            style={styles.primaryBtn}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.02)';
              e.target.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.4)';
            }}
          >
            <span style={styles.btnGlow} />
            Start Your Project
            <svg style={styles.btnArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <button
            style={styles.secondaryBtn}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.background = 'rgba(255,255,255,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.background = 'transparent';
            }}
          >
            View Our Work
          </button>
        </div>

        {/* Stats */}
        <div style={styles.stats} className="animate-fade-up stagger-5">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '30+', label: 'Happy Clients' },
            { value: '5+', label: 'Years Experience' },
          ].map((stat, i) => (
            <div key={i} style={styles.statItem}>
              <span style={styles.statValue}>{stat.value}</span>
              <span style={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={styles.scrollIndicator} className="animate-bounce">
        <div style={styles.scrollMouse}>
          <div style={styles.scrollWheel} />
        </div>
        <span style={styles.scrollText}>Scroll to explore</span>
      </div>

      {/* Decorative Lines */}
      <div style={styles.lineTop} />
      <div style={styles.lineBottom} />
    </section>
  );
};

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '40px',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f0f1a 100%)',
  },

  // Animated Orbs
  orb: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(80px)',
    animation: 'float 8s ease-in-out infinite',
    pointerEvents: 'none',
    zIndex: 0,
  },

  // Geometric Shapes
  shape: {
    position: 'absolute',
    border: '1px solid rgba(255,255,255,0.1)',
    animation: 'float 6s ease-in-out infinite, spin-slow 20s linear infinite',
    pointerEvents: 'none',
    zIndex: 1,
  },

  // Grid Pattern
  gridPattern: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    pointerEvents: 'none',
    zIndex: 1,
  },

  // Spotlight Effect
  spotlight: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    zIndex: 2,
  },

  // Main Content
  content: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '900px',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Badge
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 20px',
    background: 'rgba(139, 92, 246, 0.1)',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#c4b5fd',
    marginBottom: '30px',
    backdropFilter: 'blur(10px)',
  },

  badgeDot: {
    width: '8px',
    height: '8px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    borderRadius: '50%',
    animation: 'pulse-glow 2s ease-in-out infinite',
  },

  // Title
  title: {
    fontSize: 'clamp(3rem, 8vw, 5.5rem)',
    fontWeight: '800',
    marginBottom: '24px',
    letterSpacing: '-0.03em',
    background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 30%, #cbd5e1 60%, #94a3b8 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: '1.1',
  },

  // Subtitle
  subtitle: {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    maxWidth: '700px',
    margin: '0 auto 30px',
    lineHeight: '1.8',
    color: '#94a3b8',
  },

  gradientText: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: '600',
  },

  // Stack Pills
  stackContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '40px',
  },

  stackPill: {
    padding: '10px 20px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#94a3b8',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
  },

  // Buttons
  buttonContainer: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '60px',
  },

  primaryBtn: {
    position: 'relative',
    padding: '18px 36px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%)',
    backgroundSize: '200% 200%',
    color: '#fff',
    border: 'none',
    borderRadius: '14px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },

  btnGlow: {
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
    animation: 'shimmer 3s infinite',
  },

  btnArrow: {
    width: '20px',
    height: '20px',
    transition: 'transform 0.3s ease',
  },

  secondaryBtn: {
    padding: '18px 36px',
    background: 'transparent',
    color: '#fff',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '14px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  // Stats
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '60px',
    flexWrap: 'wrap',
  },

  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  statValue: {
    fontSize: '2.5rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  statLabel: {
    fontSize: '14px',
    color: '#64748b',
    marginTop: '4px',
  },

  // Scroll Indicator
  scrollIndicator: {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },

  scrollMouse: {
    width: '24px',
    height: '40px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '8px',
  },

  scrollWheel: {
    width: '4px',
    height: '8px',
    background: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '2px',
    animation: 'bounce 2s ease-in-out infinite',
  },

  scrollText: {
    fontSize: '12px',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },

  // Decorative Lines
  lineTop: {
    position: 'absolute',
    top: 0,
    left: '10%',
    right: '10%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
  },

  lineBottom: {
    position: 'absolute',
    bottom: 0,
    left: '10%',
    right: '10%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
  },
};

export default Hero;

