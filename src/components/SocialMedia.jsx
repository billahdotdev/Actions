import { FaGithub, FaXTwitter, FaLinkedin, FaPinterest } from "react-icons/fa6"
import logo from "../assets/logo.svg"
import "../styles/SocialMedia.css"

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <div className="social-icons">
        <a href="https://github.com/billahdotdev" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://x.com/billahdotdev" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/billahdotdev"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.pinterest.com/billahdotdev"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaPinterest />
        </a>
        <a
          href="https://www.garmentik.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon playful-icon"
        >
          <img src={logo || "/placeholder.svg"} alt="Garmentik Logo" />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia

