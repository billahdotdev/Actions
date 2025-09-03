import './SEOProjects.css';

const SEOProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website Optimization',
      description:
        'Increased organic traffic by 150% and improved search rankings for 200+ keywords through comprehensive on-page and technical SEO optimization.',
      image: './ecom.png',
      metrics: [
        '150% Traffic Increase',
        '200+ Keywords Ranked',
        '45% Conversion Boost',
      ],
      category: 'E-commerce SEO',
    },
    {
      id: 2,
      title: 'Local Business SEO Campaign',
      description:
        'Boosted local search visibility for a restaurant chain, achieving #1 rankings for key local keywords and increasing foot traffic by 80%.',
      image: './local.png',
      metrics: [
        '#1 Local Rankings',
        '80% Foot Traffic Increase',
        '300% Google My Business Views',
      ],
      category: 'Local SEO',
    },
    {
      id: 3,
      title: 'SaaS Platform Content Strategy',
      description:
        'Developed and executed a content-driven SEO strategy that generated 500+ high-quality backlinks and doubled organic lead generation.',
      image: './sass.png',
      metrics: [
        '500+ Quality Backlinks',
        '200% Lead Generation',
        '85% Content Engagement',
      ],
      category: 'Content SEO',
    },
  ];

  return (
    <section className="seo-projects section section-light">
      <div className="container">
        <h2 className="section-title">SEO Projects</h2>
        <p className="section-subtitle">
          Proven results across diverse industries with data-driven SEO
          strategies
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                />
                <div className="project-category">{project.category}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-metrics">
                  {project.metrics.map((metric, index) => (
                    <span key={index} className="metric-tag">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOProjects;
