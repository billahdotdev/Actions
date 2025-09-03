import './About.css';

const About = () => {
  return (
    <section className="about section section-dark">
      <div className="container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">
            I'm a Digital Marketing Specialist who brings a Computer Science
            mindset to the world of brand visibility and conversions. I don't
            just run campaigns; I build data-driven systems designed for
            repeatable success. My mission is to remove the guesswork and
            deliver tangible results and exceptional ROI that fuel business
            growth.
          </p>
          <div className="about-credentials">
            <h3 className="credentials-title">Credentials & Learning</h3>
            <ul className="credentials-list">
              <li>
                🎓 Computer Science & Engineering - BUBT Dhaka, Bangladesh
              </li>
              <li>📜 Digital Marketing Course - Google</li>
              <li>📚 Continuously learning latest marketing trends</li>
            </ul>
          </div>
          <div className="about-cta">
            <a
              href="mailto:turjoy@gmail.com"
              className="cta-button consultation-btn"
            >
              Get Free Consultation
            </a>
            <a
              href="/src/assets/resume.pdf"
              download
              className="cta-button resume-btn"
            >
              Download My Resume
            </a>
          </div>
          <div className="about-line"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
