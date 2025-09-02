import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section section-light">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <img src="./Turjoy.png" alt="Sarakutty Kurian" />
            <div className="hero-name">Turjoy</div>
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              Digital Marketing
              <br />
              <span className="hero-title-accent">Portfolio</span>
            </h1>
            <p className="hero-subtitle">
              Crafting data-driven digital strategies that deliver measurable
              results and drive business growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
