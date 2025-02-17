import { ExternalLink } from "lucide-react"
import "../styles/GitHubProjects.css"

const projects = [
  {
    id: 1,
    title: "Safewear Fashion E-commerce",
    description:
      "A modern e-commerce platform built with React and Node.js, featuring a responsive design and seamless shopping experience.",
    url: "https://safewearfashion.com/",
    tags: ["React", "Node.js", "E-commerce", "Responsive"],
    features: ["Mobile-first Design", "Custom CMS", "Payment Integration"],
  },
  {
    id: 2,
    title: "Safewear Dashboard",
    description: "Admin dashboard with real-time analytics, inventory management, and order processing system.",
    url: "https://www.smartriderbd.com/",
    tags: ["React", "Redux", "MongoDB", "Express"],
    features: ["Real-time Updates", "Analytics", "User Management"],
  },
  {
    id: 3,
    title: "Safewear Mobile App",
    description: "Cross-platform mobile application providing a seamless shopping experience on the go.",
    url: "https://garmentik.com/",
    tags: ["React Native", "Firebase", "REST API"],
    features: ["Push Notifications", "Offline Mode", "Social Login"],
  },
]

const GitHubProjects = () => {
  const handleVisitClick = (e, url) => {
    e.preventDefault()
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">Showcasing my latest web development work</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-preview">
                <iframe src={project.url} title={project.title} className="website-preview" loading="lazy" />
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <button
                    className="visit-link"
                    onClick={(e) => handleVisitClick(e, project.url)}
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </button>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-features">
                  {project.features.map((feature, index) => (
                    <span key={index} className="project-feature">
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="visit-button" onClick={(e) => handleVisitClick(e, project.url)}>
                  View Live Project
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GitHubProjects

