import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section section-light">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <img src="./Turjoy.png" alt="Turjoy" />
            <div className="hero-name">Turjoy</div>
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              Hello,
              <br />
              <span className="hero-title-accent">I'm Turjoy</span>
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
