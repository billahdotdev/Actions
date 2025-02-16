import { FaCode, FaPaintBrush, FaChartLine, FaSearch } from "react-icons/fa"
import "../styles/Services.css"

const serviceData = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Custom websites tailored to your needs, built with the latest technologies for optimal performance and user experience.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Branding Design",
    description:
      "Create a unique and memorable brand identity that resonates with your target audience and sets you apart from competitors.",
  },
  {
    icon: <FaChartLine />,
    title: "Digital Marketing",
    description:
      "Develop and implement effective digital marketing strategies to increase your online presence and drive growth.",
  },
  {
    icon: <FaSearch />,
    title: "SEO",
    description:
      "Optimize your website for search engines to improve visibility and attract more organic traffic to your business.",
  },
]

const Services = () => {
  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-title">What kind of work do I do?</h2>
        <div className="services-grid">
          {serviceData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

