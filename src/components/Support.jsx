import "../styles/Support.css"

const SupportCard = ({ title, children }) => (
  <div className="support-card">
    <h2 className="support-card-title">{title}</h2>
    <div className="support-card-content">{children}</div>
  </div>
)

const Support = () => {
  return (
    <div className="support-container">
      <h1 className="support-title">Support Policy</h1>
      <p className="support-date">Effective Date: February 5, 2025</p>

      <div className="support-intro">
        <p>This Support Policy outlines how I provide support for my web development services.</p>
      </div>

      <div className="support-grid">
        <SupportCard title="1. Support Availability">
          <p>
            <strong>Hours:</strong> Saturday to Thursday, 10 AM to 6 PM, excluding holidays.
          </p>
          <p>
            <strong>Response Time:</strong> Within 24 hours during business days.
          </p>
        </SupportCard>

        <SupportCard title="2. Support Channels">
          <p>
            <strong>Email:</strong> billahdotdev@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +8801713401889
          </p>
        </SupportCard>

        <SupportCard title="3. What's Covered">
          <ul>
            <li>Bug fixes and troubleshooting for delivered projects.</li>
            <li>Minor updates and adjustments as agreed in the project scope.</li>
            <li>Guidance on using website features.</li>
          </ul>
        </SupportCard>

        <SupportCard title="4. What's Not Covered">
          <ul>
            <li>Major feature additions or redesigns (subject to new project terms).</li>
            <li>Issues caused by third-party services, plugins, or user modifications.</li>
            <li>Support for outdated software or platforms beyond their lifecycle.</li>
          </ul>
        </SupportCard>

        <SupportCard title="5. Maintenance Plans">
          <p>
            For ongoing support beyond the initial project, I offer maintenance plans tailored to your needs. Contact me
            to discuss options.
          </p>
        </SupportCard>

        <SupportCard title="6. Emergency Support">
          <p>
            For urgent issues, please mark your email as URGENT. I will prioritize these requests but cannot guarantee
            immediate resolution.
          </p>
        </SupportCard>

        <SupportCard title="7. Changes to This Policy">
          <p>I may update this Support Policy periodically. Changes will be posted with an updated effective date.</p>
        </SupportCard>

        <SupportCard title="8. Contact Information">
          <p>
            <strong>Masum Billah</strong>
          </p>
          <p>Email: billahdotdev@gmail.com</p>
          <p>Phone: +8801713401889</p>
        </SupportCard>
      </div>

      <div className="support-outro">
        <p>Thank you for trusting me with your web development needs.</p>
      </div>
    </div>
  )
}

export default Support

