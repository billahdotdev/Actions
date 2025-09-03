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
    { name: 'MOZ', logo: './moz.svg', category: 'SEO' },
    {
      name: 'Screaming Frog',
      logo: './screaming-frog.svg',
      category: 'SEO',
    },
    { name: 'WordPress', logo: './WordPress.svg', category: 'CMS' },
    {
      name: 'HubSpot',
      logo: './hubspot.svg',
      category: 'Marketing',
    },
    {
      name: 'Power BI',
      logo: './powerBI.svg',
      category: 'Analytics',
    },
    {
      name: 'Buffer',
      logo: './buffer.svg',
      category: 'Social Media',
    },
    {
      name: 'Google Ads',
      logo: './google-ads.svg',
      category: 'Advertising',
    },
    { name: 'Canva', logo: './canva.svg', category: 'Design' },
    {
      name: 'Looker Studio',
      logo: './looker.svg',
      category: 'Analytics',
    },
    {
      name: 'Meta Business',
      logo: './Meta.svg',
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
