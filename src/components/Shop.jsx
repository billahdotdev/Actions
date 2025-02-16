"use client"

import { useState } from "react"
import { ExternalLink, Phone, Globe, Palette, PenTool, Megaphone, Search } from "lucide-react"
import logo from "../assets/logo.svg"
import "../styles/Shop.css"

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("Websites")

  const categories = [
    { name: "Websites", icon: Globe },
    { name: "Branding Designs and Printing", icon: Palette },
    { name: "Logos", icon: PenTool },
    { name: "Digital Marketing", icon: Megaphone },
    { name: "SEO", icon: Search },
  ]

  const services = {
    Websites: [
      {
        title: "Custom Website Development",
        description: "Professional and responsive websites tailored to your needs. Built with modern technologies.",
        price: "Starting from BDT 3000",
        hasDemo: true,
      },
      {
        title: "E-commerce Solutions",
        description: "Full-featured online stores with secure payment integration and inventory management.",
        price: "Starting from $200",
        hasDemo: true,
      },
    ],
    "Branding Designs and Printing": [
      {
        title: "Brand Identity Package",
        description: "Complete branding solution including business cards, letterheads, and marketing materials.",
        price: "Starting from $50",
      },
      {
        title: "Print Design Services",
        description: "High-quality designs for brochures, flyers, banners, and other marketing materials.",
        price: "Starting from $50",
      },
    ],
    Logos: [
      {
        title: "Professional Logo Design",
        description: "Unique and memorable logo designs that represent your brand identity.",
        price: "Starting from $10",
        image: "/placeholder-logo-1.png",
      },
      {
        title: "Logo Redesign",
        description: "Refresh your existing logo while maintaining brand recognition.",
        price: "Starting from $10",
        image: "/placeholder-logo-2.png",
      },
    ],
    "Digital Marketing": [
      {
        title: "Social Media Marketing",
        description: "Strategic social media campaigns to boost your online presence.",
        price: "Starting from $30/month",
      },
      {
        title: "Email Marketing",
        description: "Targeted email campaigns to engage your audience and drive conversions.",
        price: "Starting from $10/month",
      },
    ],
    SEO: [
      {
        title: "SEO Optimization",
        description: "Improve your website ranking and visibility in search engines.",
        price: "Starting from $100/month",
      },
      {
        title: "Local SEO",
        description: "Boost your local search presence and attract nearby customers.",
        price: "Starting from $50/month",
      },
    ],
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/8801713401889`, "_blank")
  }

  return (
    <div className="shop-container">
      {/* Garmentik Section */}
      <section className="garmentik-section">
        <div className="garmentik-content">
          <img src={logo || "/placeholder.svg"} alt="Garmentik Logo" className="logo" />
          <h1>Welcome to GARMENTIK</h1>
          <p>Custom T-shirts? We're on it!</p>
          <a href="https://www.garmentik.com" target="_blank" rel="noopener noreferrer" className="explore-button">
            Explore our Collection
            <ExternalLink className="icon" />
          </a>
        </div>
      </section>

      {/* Digital Products Section */}
      <section className="digital-section">
        <h2>Digital Products & Services</h2>

        <div className="categories">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`category-btn ${activeCategory === category.name ? "active" : ""}`}
              onClick={() => setActiveCategory(category.name)}
              data-category={category.name}
            >
              <category.icon className="category-icon" />
              {category.name}
            </button>
          ))}
        </div>

        <div className={`services-grid ${activeCategory.toLowerCase().replace(/\s+/g, "-")}`}>
          {services[activeCategory].map((service, index) => (
            <div key={index} className="service-card" data-category={activeCategory}>
              {activeCategory === "Logos" && (
                <div className="logo-image-container">
                  <img src={service.image || "/placeholder.svg"} alt={service.title} className="logo-image" />
                </div>
              )}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="price">{service.price}</p>
              <div className="button-group">
                {service.hasDemo && (
                  <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="demo-button">
                    View Demo
                  </a>
                )}
                <button className="whatsapp-button" onClick={handleWhatsApp}>
                  <Phone className="icon" />
                  Let's Talk
                </button>
              </div>
            </div>
          ))}
          <div className="service-card custom-solution">
            <h3>Need Custom Solution?</h3>
            <p>Contact me for tailored services that meet your specific requirements.</p>
            <button className="whatsapp-button" onClick={handleWhatsApp}>
              <Phone className="icon" />
              Let's Talk
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

