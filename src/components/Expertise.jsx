import './Expertise.css';

const Expertise = () => {
  const expertiseAreas = [
    { name: 'Keyword Research', color: '#d4a574', icon: '🔍' },
    { name: 'Digital Audit', color: '#c8d6e5', icon: '📊' },
    { name: 'Competitor Analysis', color: '#8b4513', icon: '🎯' },
    { name: 'On-Page SEO', color: '#c8d6e5', icon: '📝' },
    { name: 'Off-Page SEO', color: '#4ecdc4', icon: '🔗' },
    { name: 'Link Building', color: '#6c757d', icon: '⛓️' },
    { name: 'Technical SEO', color: '#d4a574', icon: '⚙️' },
    { name: 'Content Strategy', color: '#2e86ab', icon: '📚' },
    { name: 'Social Media Strategy', color: '#8b4513', icon: '📱' },
    { name: 'Campaign Management', color: '#2e86ab', icon: '🚀' },
    { name: 'Google Ads', color: '#c8d6e5', icon: '💰' },
    { name: 'Analysis & Reporting', color: '#4ecdc4', icon: '📈' },
  ];

  return (
    <section className="expertise section section-light">
      <div className="container">
        <h2 className="section-title">Expertise</h2>
        <p className="section-subtitle">
          Comprehensive digital marketing skills to drive your business growth
        </p>
        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="expertise-item"
              style={{ backgroundColor: area.color }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <span className="expertise-icon">{area.icon}</span>
              <span className="expertise-text">{area.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
