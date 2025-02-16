"use client"

import { useState } from "react"
import { Newspaper, Tv, Youtube } from "lucide-react"
import "../styles/NewsTv.css"

const mediaItems = [
  { type: "newspaper", name: "The Daily Star", url: "https://www.thedailystar.net/", logo: "/logos/daily-star.png" },
  { type: "newspaper", name: "Prothom Alo", url: "https://www.prothomalo.com/", logo: "/logos/prothom-alo.png" },
  { type: "newspaper", name: "Dhaka Tribune", url: "https://www.dhakatribune.com/", logo: "/logos/dhaka-tribune.png" },
  { type: "tv", name: "Channel i", url: "https://www.channelionline.com/", logo: "/logos/channel-i.png" },
  { type: "tv", name: "NTV", url: "https://www.ntvbd.com/", logo: "/logos/ntv.png" },
  { type: "tv", name: "Somoy TV", url: "https://www.somoynews.tv/", logo: "/logos/somoy-tv.png" },
  {
    type: "youtube",
    name: "Bangladeshi Vlogger",
    url: "https://www.youtube.com/c/BangladeshiVlogger",
    logo: "/logos/bangladeshi-vlogger.png",
  },
  {
    type: "youtube",
    name: "Ayman Sadiq",
    url: "https://www.youtube.com/user/10MinuteSchoolcom",
    logo: "/logos/ayman-sadiq.png",
  },
  {
    type: "youtube",
    name: "Salman Muqtadir",
    url: "https://www.youtube.com/c/SalmanMuqtadir",
    logo: "/logos/salman-muqtadir.png",
  },
]

const NewsTv = () => {
  const [filter, setFilter] = useState("newspaper")

  const filteredItems = mediaItems.filter((item) => item.type === filter)

  const getIcon = (type) => {
    switch (type) {
      case "newspaper":
        return <Newspaper className="news-tv__filter-icon" />
      case "tv":
        return <Tv className="news-tv__filter-icon" />
      case "youtube":
        return <Youtube className="news-tv__filter-icon" />
      default:
        return null
    }
  }

  return (
    <div className="news-tv">
      <h1 className="news-tv__title">Bangladesh Media Hub</h1>
      <p className="news-tv__subtitle">Your modern gateway to Bangladeshi media</p>
      <div className="news-tv__filters">
        {["newspaper", "tv", "youtube"].map((type) => (
          <button
            key={type}
            className={`news-tv__filter-btn news-tv__filter-btn--${type} ${filter === type ? "active" : ""}`}
            onClick={() => setFilter(type)}
          >
            {getIcon(type)}
            <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
          </button>
        ))}
      </div>
      <div className={`news-tv__grid news-tv__grid--${filter}`}>
        {filteredItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`news-tv__item news-tv__item--${item.type}`}
          >
            <div className="news-tv__logo-container">
              <img src={item.logo || "/placeholder.svg"} alt={`${item.name} logo`} className="news-tv__logo" />
            </div>
            <span className="news-tv__name">{item.name}</span>
            {item.type === "newspaper" && <div className="news-tv__paper-fold"></div>}
            {item.type === "tv" && (
              <div className="news-tv__tv-content">
                <div className="news-tv__tv-screen">
                  <div className="news-tv__tv-placeholder">Live</div>
                </div>
                <div className="news-tv__tv-controls">
                  <button className="news-tv__tv-button">▶</button>
                  <div className="news-tv__tv-progress"></div>
                </div>
              </div>
            )}
            {item.type === "youtube" && <div className="news-tv__play-button"></div>}
          </a>
        ))}
      </div>
    </div>
  )
}

export default NewsTv

