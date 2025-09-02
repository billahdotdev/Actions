import "./SocialMediaProjects.css"

const SocialMediaProjects = () => {
  return (
    <section className="social-media-projects section section-light">
      <div className="container">
        <h2 className="section-title">Social Media Projects</h2>
        <div className="social-media-content">
          <div className="brand-logo">
            <img src="/src/assets/images/skepper-logo.png" alt="Skepper" />
          </div>
          <div className="phone-mockups">
            <div className="phone-mockup">
              <img src="/src/assets/images/phone1.png" alt="Social Media Profile 1" />
            </div>
            <div className="phone-mockup">
              <img src="/src/assets/images/phone2.png" alt="Social Media Profile 2" />
            </div>
            <div className="phone-mockup">
              <img src="/src/assets/images/phone3.png" alt="Social Media Profile 3" />
            </div>
            <div className="phone-mockup">
              <img src="/src/assets/images/phone4.png" alt="Social Media Profile 4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialMediaProjects
