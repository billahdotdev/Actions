import { useState } from "react"
import "../styles/Asked.css"

const Asked = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqData = [
    {
      question: "What is the estimated cost for building my website?",
      answer:
        "The cost of building a website depends on factors like its complexity, the number of pages, required functionalities, and design. My pricing starts at $500. Once I understand your specific needs, I will provide a customized quote.",
    },
    {
      question: "How long will it take to complete my website?",
      answer:
        "The timeline can vary depending on the scope of the project. Generally, a basic website takes around 4–5 days to complete, while more complex sites may take 1–3 weeks. After discussing your project, I will provide a clear timeline.",
    },
    {
      question: "What kind of websites have you built in the past?",
      answer:
        "I have built various types of websites, including e-commerce platforms, corporate sites, portfolios, blogs, and more.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes! I build all websites with mobile responsiveness in mind to ensure they look great and function well on smartphones, tablets, and desktops.",
    },

    {
      question: "Do you offer ongoing maintenance after the website is launched?",
      answer:
        "Yes, I offer ongoing maintenance, including updates, bug fixes, and optimizations.",
    },
    {
      question: "What technologies or platforms do you use for website development?",
      answer:
        "I use the MERN stack—MongoDB for the database, Express.js and Node.js for the backend, and React for the frontend. This combination enables me to build fast, scalable, and dynamic web applications tailored to your needs.",
    },
    {
      question: "Will I be able to update the website myself after it's built?",
      answer:
        " Yes! If you know how to work with the MERN stack, I can provide you with the necessary access and tools to update the content. I’ll also ensure the website is structured in a way that makes it easy for you to manage content updates, and I can provide guidance on how to make changes if needed.",
    },
    {
      question: "Do you provide SEO (Search Engine Optimization) services?",
      answer:
        "Yes, I offer basic on-page SEO services as part of my website development process, such as optimizing title tags, meta descriptions, and content for better search engine rankings. If you need more advanced SEO, I can provide additional services.",
    },
    {
      question: "What happens if something goes wrong after the website is launched?",
      answer:
        "If any issues arise after the site is launched, I will address them promptly. I also offer maintenance packages for ongoing support to ensure your site remains functional.",
    },
    {
      question: "How will you handle website hosting?",
      answer:
        " I can help you choose a hosting provider based on your website’s needs. If you prefer, I can manage the hosting for you. I will ensure everything is set up correctly and provide guidance on hosting options.",
    },
    {
      question: "What happens if I want to make changes to the website after it's built?",
      answer:
        "After the website is live, I can make changes or updates as needed. Minor changes are often included in the project package, while larger updates might incur additional costs. I’ll explain the process and pricing for any changes.",
    },
    
    
    {
      question: "Will my website be optimized for speed?",
      answer:
        "Yes, I prioritize website speed by optimizing images, minimizing code, and using caching techniques to ensure your site loads quickly. A fast website improves both user experience and SEO.",
    },
    {
      question: "Do you provide a warranty or guarantee for your work?",
      answer:
        "Yes, I offer a warranty for my work, ensuring the website functions as expected after launch. If there are any issues within a specified period, I will fix them at no extra charge.",
    },
    
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
            <button
              className="faq-question"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
            >
              {item.question}
              <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Asked

