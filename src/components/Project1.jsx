import React, { useEffect, useRef } from 'react';
import '../styles/Project1.css';

const Project1 = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const cards = [
    { title: "Neomorphic Design", description: "Modern UI with soft shadows and depth.", icon: "🎨" },
    { title: "Responsive Design", description: "Seamless layouts for all devices.", icon: "📱" },
    { title: "Performance Optimization", description: "Speed up your website with ease.", icon: "⚡" },
    { title: "Interactive Front-End", description: "Engaging UIs with JavaScript magic.", icon: "✨" },
    { title: "Progressive Web Apps", description: "Native-like web apps, even offline.", icon: "🌐" },
    { title: "Accessibility", description: "Inclusive design for everyone.", icon: "♿" },
    { title: "Dark Mode Design", description: "Appealing UI with eye comfort.", icon: "🌙" }
  ];

  return (
    <section className="project1-works-container">
      <h2 className='concept'>Web development concepts are trending!</h2>
      <div className="project1-cards-container">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={`project1-card ${card.title.toLowerCase().replace(/\s+/g, '-')}-card`}
            ref={el => cardsRef.current[index] = el}
            tabIndex="0"
          >
            <div className="project1-card-content">
              <div className="project1-card-icon" aria-hidden="true">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
            <div className="project1-card-effect"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project1;
