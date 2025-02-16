import "../styles/TermsOfService.css"

const TermsOfService = () => {
  return (
    <div className="terms-of-service-container">
      <h1 className="terms-of-service-title neomorphic-text">Terms of Service</h1>
      <div className="terms-of-service-content">
        <p className="effective-date neomorphic-text">
          <strong>Effective Date: February 5, 2025</strong>
        </p>

        <p className="intro neomorphic-text">By using my website and services, you agree to these Terms of Service.</p>

        <div className="terms-section">
          <h2 className="neomorphic-text">Services</h2>
          <p>I offer web development services, including design, development, and maintenance.</p>
        </div>

        <div className="terms-section">
          <h2 className="neomorphic-text">User Responsibilities</h2>
          <p>Provide accurate information, timely feedback, and comply with laws.</p>
        </div>

        <div className="terms-section">
          <h2 className="neomorphic-text">Payment</h2>
          <p>
            Payment terms are project-specific. Late payments may incur fees. Payments are non-refundable unless stated
            otherwise.
          </p>
        </div>

        <div className="terms-section">
          <h2 className="neomorphic-text">Intellectual Property</h2>
          <p>You own the work after full payment. I may showcase it in my portfolio unless agreed otherwise.</p>
        </div>

        <div className="terms-section">
          <h2 className="neomorphic-text">Confidentiality</h2>
          <p>Your project information remains confidential unless required by law.</p>
        </div>

        <div className="terms-section">
          <h2 className="neomorphic-text">Liability</h2>
          <p>I'm not liable for indirect damages, third-party issues, or security breaches beyond my control.</p>
        </div>

        <div className="terms-section">
          <h2 className="neomorphic-text">Termination</h2>
          <p>Either party can terminate with notice. Payment is due for work completed.</p>
        </div>

        <div className="terms-section">
          <h2 className="neomorphic-text">Changes</h2>
          <p>Terms may be updated. Changes will be posted with a new date.</p>
        </div>

        <div className="contact-section">
          <h2 className="neomorphic-text">Contact</h2>
          <p>
            <strong className="neomorphic-text">Masum Billah</strong>
            <br />
            Email: billahdotdev@gmail.com
            <br />
            Phone: +8801713401889
          </p>
        </div>

        <p className="outro neomorphic-text">Thank you for choosing my services.</p>
      </div>
    </div>
  )
}

export default TermsOfService

