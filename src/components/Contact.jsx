import { useState, useEffect } from 'react';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/916380279702", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:contact@technosolutions.com";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => setFormStatus('success'), 2000);
  };

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={styles.infoIconSvg}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="url(#waGradient)"/>
          <circle cx="12" cy="10" r="3" stroke="url(#waGradient)"/>
          <defs>
            <linearGradient id="waGradient" x1="3" y1="10" x2="21" y2="10">
              <stop stopColor="#25D366"/>
              <stop offset="1" stopColor="#128C7E"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "WhatsApp",
      value: "+91 6380279702",
      description: "Chat with us instantly",
      color: "#25D366",
      action: handleWhatsApp
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={styles.infoIconSvg}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="url(#emailGradient)"/>
          <path d="M22 6l-10 7L2 6" stroke="url(#emailGradient)"/>
          <defs>
            <linearGradient id="emailGradient" x1="4" y1="4" x2="20" y2="20">
              <stop stopColor="#8b5cf6"/>
              <stop offset="1" stopColor="#3b82f6"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Email",
      value: "contact@technosolutions.com",
      description: "Send us a detailed message",
      color: "#8b5cf6",
      action: handleEmail
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={styles.infoIconSvg}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="url(#locGradient)"/>
          <circle cx="12" cy="10" r="3" stroke="url(#locGradient)"/>
          <defs>
            <linearGradient id="locGradient" x1="3" y1="10" x2="21" y2="10">
              <stop stopColor="#f59e0b"/>
              <stop offset="1" stopColor="#ef4444"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Location",
      value: "Tirupur, Tamil Nadu, India",
      description: "Visit our office",
      color: "#f59e0b",
      action: () => {}
    }
  ];

  return (
    <section id="contact" style={styles.section}>
      {/* Background Elements */}
      <div style={styles.bgOrb1} />
      <div style={styles.bgOrb2} />
      <div style={styles.bgGrid} />

      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.header}>
          <span style={styles.badge} className="animate-fade-in">Get in Touch</span>
          <h2 style={styles.heading} className="animate-fade-up">
            Let's Build Something
            <span style={styles.gradient}>Amazing Together</span>
          </h2>
          <p style={styles.subtitle} className="animate-fade-up stagger-1">
            Ready to start your project? Get in touch with us today and let's create something extraordinary.
          </p>
        </div>

        <div style={styles.contentGrid}>
          {/* Contact Info Cards */}
          <div style={styles.infoSection}>
            <div style={styles.infoGrid}>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.infoCard,
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
                  }}
                  onClick={info.action}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = `0 20px 40px -15px ${info.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{...styles.iconWrapper, background: `${info.color}15`}}>
                    {info.icon}
                  </div>
                  <h3 style={styles.infoTitle}>{info.title}</h3>
                  <p style={styles.infoValue}>{info.value}</p>
                  <p style={styles.infoDesc}>{info.description}</p>
                  <div style={{...styles.infoArrow, color: info.color}}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={styles.arrowSvg}>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div style={{...styles.infoGlow, background: info.color}} />
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div style={styles.statsContainer}>
              {[
                { value: "24/7", label: "Support Available" },
                { value: "< 2hrs", label: "Response Time" },
                { value: "100%", label: "Client Satisfaction" }
              ].map((stat, i) => (
                <div key={i} style={styles.statItem}>
                  <span style={styles.statValue}>{stat.value}</span>
                  <span style={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            ...styles.formCard,
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
          }}>
            <div style={styles.formHeader}>
              <h3 style={styles.formTitle}>Send us a Message</h3>
              <p style={styles.formDesc}>Fill out the form below and we'll get back to you within 2 hours.</p>
            </div>

            {formStatus === 'success' ? (
              <div style={styles.successState}>
                <div style={styles.successIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={styles.successSvg}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <h4 style={styles.successTitle}>Message Sent!</h4>
                <p style={styles.successText}>Thank you for reaching out. We'll get back to you shortly.</p>
                <button 
                  style={styles.resetBtn}
                  onClick={() => setFormStatus('idle')}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Name</label>
                    <input 
                      type="text" 
                      placeholder="Your name" 
                      style={styles.input}
                      required
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      style={styles.input}
                      required
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Service Interested In</label>
                  <select style={styles.select} defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option value="web">Website Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="backend">Backend & APIs</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="security">Security & Testing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Message</label>
                  <textarea 
                    placeholder="Tell us about your project..." 
                    style={styles.textarea}
                    rows="4"
                    required
                  />
                </div>

                <button 
                  type="submit"
                  style={{
                    ...styles.submitBtn,
                    opacity: formStatus === 'submitting' ? 0.7 : 1,
                    cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer',
                  }}
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <span style={styles.spinner} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={styles.submitArrow}>
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <div style={styles.footerContent}>
          <div style={styles.footerLogo}>
            <span style={styles.logoIcon}>⚡</span>
            <span style={styles.logoText}>Techy Solution</span>
          </div>
          <p style={styles.footerText}>© 2024 Techy Solution. All rights reserved.</p>
          </div>
          
          <div style={styles.socialLinks}>
            {['twitter', 'linkedin', 'github', 'instagram'].map((social, i) => (
              <button key={i} style={styles.socialBtn}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={styles.socialIcon}>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '120px 40px 60px',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 50%, #050508 100%)',
  },

  bgOrb1: {
    position: 'absolute',
    top: '10%',
    left: '-10%',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(80px)',
    animation: 'float 10s ease-in-out infinite',
  },

  bgOrb2: {
    position: 'absolute',
    bottom: '20%',
    right: '-10%',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(80px)',
    animation: 'float-delayed 12s ease-in-out infinite',
  },

  bgGrid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(139, 92, 246, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(139, 92, 246, 0.02) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
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
    background: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#34d399',
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
    background: 'linear-gradient(135deg, #10b981, #06b6d4)',
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

  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    marginBottom: '80px',
  },

  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },

  infoGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  infoCard: {
    position: 'relative',
    padding: '24px',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
  },

  iconWrapper: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
  },

  infoIconSvg: {
    width: '26px',
    height: '26px',
  },

  infoTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#f8fafc',
    marginBottom: '4px',
  },

  infoValue: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#94a3b8',
    marginBottom: '4px',
  },

  infoDesc: {
    fontSize: '13px',
    color: '#64748b',
    margin: 0,
  },

  infoArrow: {
    position: 'absolute',
    top: '24px',
    right: '24px',
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.03)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease',
  },

  arrowSvg: {
    width: '16px',
    height: '16px',
  },

  infoGlow: {
    position: 'absolute',
    top: '-50px',
    right: '-50px',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    filter: 'blur(40px)',
    opacity: 0.15,
  },

  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    padding: '24px',
    background: 'rgba(139, 92, 246, 0.05)',
    border: '1px solid rgba(139, 92, 246, 0.1)',
    borderRadius: '16px',
  },

  statItem: {
    textAlign: 'center',
  },

  statValue: {
    display: 'block',
    fontSize: '1.5rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #10b981, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  statLabel: {
    fontSize: '12px',
    color: '#64748b',
  },

  // Form Styles
  formCard: {
    padding: '40px',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '24px',
    backdropFilter: 'blur(20px)',
  },

  formHeader: {
    marginBottom: '32px',
  },

  formTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: '8px',
  },

  formDesc: {
    fontSize: '14px',
    color: '#64748b',
    margin: 0,
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },

  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },

  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#94a3b8',
  },

  input: {
    padding: '14px 16px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '10px',
    fontSize: '15px',
    color: '#f8fafc',
    outline: 'none',
    transition: 'all 0.3s ease',
  },

  select: {
    padding: '14px 16px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '10px',
    fontSize: '15px',
    color: '#f8fafc',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  textarea: {
    padding: '14px 16px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '10px',
    fontSize: '15px',
    color: '#f8fafc',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
  },

  submitBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '16px 32px',
    background: 'linear-gradient(135deg, #10b981, #06b6d4)',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '8px',
  },

  submitArrow: {
    width: '18px',
    height: '18px',
  },

  spinner: {
    width: '18px',
    height: '18px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderTopColor: '#fff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },

  // Success State
  successState: {
    textAlign: 'center',
    padding: '40px 20px',
  },

  successIcon: {
    width: '80px',
    height: '80px',
    margin: '0 auto 24px',
    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2))',
    border: '2px solid rgba(16, 185, 129, 0.3)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  successSvg: {
    width: '40px',
    height: '40px',
    color: '#10b981',
  },

  successTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: '8px',
  },

  successText: {
    fontSize: '14px',
    color: '#64748b',
    marginBottom: '24px',
  },

  resetBtn: {
    padding: '12px 24px',
    background: 'transparent',
    border: '2px solid rgba(139, 92, 246, 0.4)',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#a78bfa',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  // Footer
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '40px',
    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
    flexWrap: 'wrap',
    gap: '24px',
  },

  footerContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },

  logoIcon: {
    fontSize: '24px',
  },

  logoText: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#f8fafc',
  },

  footerText: {
    fontSize: '14px',
    color: '#64748b',
    margin: 0,
  },

  socialLinks: {
    display: 'flex',
    gap: '12px',
  },

  socialBtn: {
    width: '44px',
    height: '44px',
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
    width: '20px',
    height: '20px',
    fill: '#64748b',
    transition: 'fill 0.3s ease',
  },

  // Responsive
  '@media (max-width: 900px)': {
    contentGrid: {
      gridTemplateColumns: '1fr',
    },
  },
};

export default Contact;



