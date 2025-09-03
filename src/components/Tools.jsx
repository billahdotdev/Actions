import './Tools.css';

const Tools = () => {
  const tools = [
    {
      name: 'Google Analytics',
      logo: './analytics.svg',
      category: 'Analytics',
    },
    {
      name: 'Google Search Console',
      logo: './search_console.svg',
      category: 'SEO',
    },
    {
      name: 'Tag Manager',
      logo: './tag-manager.svg',
      category: 'Analytics',
    },
    { name: 'SEMrush', logo: './semrush_logo.svg', category: 'SEO' },
    { name: 'Ahrefs', logo: './ahrefs.svg', category: 'SEO' },
    { name: 'MOZ', logo: '/moz-seo-logo.png', category: 'SEO' },
    {
      name: 'Screaming Frog',
      logo: '/screaming-frog-seo-spider-logo.png',
      category: 'SEO',
    },
    { name: 'WordPress', logo: '/wordpress-cms-logo.png', category: 'CMS' },
    {
      name: 'HubSpot',
      logo: '/hubspot-marketing-logo.png',
      category: 'Marketing',
    },
    {
      name: 'Power BI',
      logo: '/microsoft-power-bi-logo.png',
      category: 'Analytics',
    },
    {
      name: 'Buffer',
      logo: '/buffer-social-media-logo.png',
      category: 'Social Media',
    },
    {
      name: 'Google Ads',
      logo: '/google-ads-logo.png',
      category: 'Advertising',
    },
    { name: 'Canva', logo: '/canva-design-logo.png', category: 'Design' },
    {
      name: 'Looker Studio',
      logo: './placeholder.jpg',
      category: 'Analytics',
    },
    {
      name: 'Meta Business',
      logo: './placeholder.jpg',
      category: 'Social Media',
    },
  ];

  return (
    <section className="tools section section-light">
      <div className="container">
        <h2 className="section-title">Tools & Technologies</h2>
        <p className="section-subtitle">
          Professional-grade tools I use to deliver exceptional digital
          marketing results
        </p>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="tool-item"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="tool-icon-wrapper">
                <img src={tool.logo || './placeholder.jpg'} alt={tool.name} />
                <div className="tool-category">{tool.category}</div>
              </div>
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
