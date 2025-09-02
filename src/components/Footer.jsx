import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-dark">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="footer-title">Turjoy</h3>
            <p className="footer-subtitle">Digital Marketing Specialist</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#seo">SEO Optimization</a>
                </li>
                <li>
                  <a href="#social-media">Social Media Marketing</a>
                </li>
                <li>
                  <a href="#content">Content Strategy</a>
                </li>
                <li>
                  <a href="#analytics">Analytics & Reporting</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Portfolio</h4>
              <ul>
                <li>
                  <a href="#projects">Recent Projects</a>
                </li>
                <li>
                  <a href="#case-studies">Case Studies</a>
                </li>
                <li>
                  <a href="#testimonials">Client Reviews</a>
                </li>
                <li>
                  <a href="#tools">Tools & Technologies</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="mailto:turjoy4@gmail.com">Email</a>
                </li>
                <li>
                  <a href="tel:+8801518961899">Phone</a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/sarakutty-kurian"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919633072792"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">90+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Turjoy. All rights reserved.
            </p>
            <p className="footer-date">Last updated: Septrmber 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
