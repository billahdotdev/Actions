import React from 'react';
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <h1 className="privacy-policy-title">Privacy Policy</h1>
        <div className="effective-date">
          <span>Effective Date: 01 January 2025</span>
        </div>

        <p className="intro">
          Your privacy is important to me. This Privacy Policy explains how I collect, use, and protect your information
          when you visit my website or engage with my web development services.
        </p>

        {[
          {
            title: "1. Information I Collect",
            content: [
              { type: "subtitle", text: "Personal Information:" },
              { type: "text", text: "When you contact me, request a quote, or hire my services, I may collect personal details such as your name, email address, phone number, and project details." },
              { type: "subtitle", text: "Non-Personal Information:" },
              { type: "text", text: "I may collect non-identifiable information like browser type, IP address, and pages visited to improve website performance." }
            ]
          },
          {
            title: "2. How I Use Your Information",
            content: [
              { type: "list", items: [
                "To communicate with you about your project.",
                "To provide, improve, and personalize my services.",
                "To respond to your inquiries or support requests.",
                "For administrative purposes and legal obligations."
              ]}
            ]
          },
          {
            title: "3. Information Sharing",
            content: [
              { type: "text", text: "I do not sell, trade, or rent your personal information to third parties. I may share information:" },
              { type: "list", items: [
                "With trusted service providers who assist in operating my website or business (under confidentiality agreements).",
                "If required by law, legal process, or to protect my rights."
              ]}
            ]
          },
          {
            title: "4. Data Security",
            content: [
              { type: "text", text: "I implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet is 100% secure." }
            ]
          },
          {
            title: "5. Cookies",
            content: [
              { type: "text", text: "My website may use cookies to enhance user experience. You can choose to disable cookies through your browser settings." }
            ]
          },
          {
            title: "6. Your Rights",
            content: [
              { type: "text", text: "You have the right to:" },
              { type: "list", items: [
                "Access the personal information I hold about you.",
                "Request corrections or deletion of your information.",
                "Withdraw consent at any time (this will not affect data processed before withdrawal)."
              ]}
            ]
          },
          {
            title: "7. Changes to This Policy",
            content: [
              { type: "text", text: "I may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date." }
            ]
          },
          {
            title: "8. Contact Me",
            content: [
              { type: "text", text: "If you have any questions about this Privacy Policy or how your data is handled, please contact me at:" },
              { type: "contact", name: "Masum Billah", email: "billahdotdev@gmail.com", phone: "+8801713401889" }
            ]
          }
        ].map((section, index) => (
          <div key={index} className="policy-section">
            <h2>{section.title}</h2>
            {section.content.map((item, i) => {
              if (item.type === "text") return <p key={i}>{item.text}</p>;
              if (item.type === "subtitle") return <h3 key={i}>{item.text}</h3>;
              if (item.type === "list") return (
                <ul key={i}>
                  {item.items.map((listItem, li) => <li key={li}>{listItem}</li>)}
                </ul>
              );
              if (item.type === "contact") return (
                <div key={i} className="contact-info">
                  <p><strong>{item.name}</strong></p>
                  <p>Email: {item.email}</p>
                  <p>Phone: {item.phone}</p>
                </div>
              );
            })}
          </div>
        ))}

        <p className="outro">Thank you for trusting me with your information.</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;