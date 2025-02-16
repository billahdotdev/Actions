"use client"

import { useState, useRef, useEffect } from "react"
import "../styles/MusicPlayer.css"
import YouTube from "react-youtube"

const musicData = {
  categories: [
    {
      name: "English",
      singers: [
        {
          name: "Ed Sheeran",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/800px-Ed_Sheeran-6886_%28cropped%29.jpg",
          songs: [
            {
              title: "Shape of You",
              artist: "Ed Sheeran",
              src: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
              duration: "3:53",
            },
          ],
        },
        {
          name: "Taylor Swift",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png/800px-Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png",
          songs: [
            {
              title: "All Too Well",
              artist: "Taylor Swift",
              src: "https://youtu.be/9OQBDdNHmXo?si=IPbWn_-eS7ZuZHWf",
              duration: "3:20",
            },
          ],
        },
      ],
    },
    {
      name: "Hindi",
      singers: [
        {
          name: "Arijit Singh",
          image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Arijit_5th_GiMA_Awards.jpg",
          songs: [
            {
              title: "Phir Bhi Tumko Chaahunga",
              artist: "Arijit Singh",
              src: "https://youtu.be/_iktURk0X-A?si=hnUssieQcM2UVQiM",
              duration: "4:28",
            },
          ],
        },
        {
          name: "Shreya Ghoshal",
          image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Shreya_Ghoshal_at_Filmfare_Awards_South.jpg",
          songs: [
            {
              title: "Param Sundari",
              artist: "Shreya Ghoshal",
              src: "https://www.youtube.com/watch?v=l_g-e5-t-0Y",
              duration: "3:50",
            },
          ],
        },
      ],
    },
    {
      name: "Bangla",
      singers: [
        {
          name: "Hans Zimmer",
          image: "https://i.scdn.co/image/ab6761610000e5eb0f0a6a7f1f7a6c7f1f7a6c7f",
          songs: [
            {
              title: "Time",
              artist: "Hans Zimmer",
              src: "https://www.youtube.com/watch?v=f-e-e-e-e-e",
              duration: "4:35",
            },
          ],
        },
      ],
    },
  ],
}

const MusicPlayer = () => {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [selectedSinger, setSelectedSinger] = useState(0)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [songInfo, setSongInfo] = useState({ currentTime: 0, duration: 0 })
  const playerRef = useRef(null)
  const containerRef = useRef(null)

  const currentCategory = musicData.categories[selectedCategory]
  const currentSinger = currentCategory.singers[selectedSinger]
  const currentSong = currentSinger.songs[currentTrack]

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.setVolume(volume * 100)
    }
  }, [volume])

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.playVideo()
      } else {
        playerRef.current.pauseVideo()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    const handleScroll = () => {
      if (isPlaying) {
        setIsPlaying(false)
        if (playerRef.current) {
          playerRef.current.pauseVideo()
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isPlaying])

  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const playNextTrack = () => {
    const nextTrack = (currentTrack + 1) % currentSinger.songs.length
    setCurrentTrack(nextTrack)
    if (playerRef.current) {
      playerRef.current.loadVideoById(getYouTubeVideoId(currentSinger.songs[nextTrack].src))
    }
  }

  const playPreviousTrack = () => {
    const previousTrack = (currentTrack - 1 + currentSinger.songs.length) % currentSinger.songs.length
    setCurrentTrack(previousTrack)
    if (playerRef.current) {
      playerRef.current.loadVideoById(getYouTubeVideoId(currentSinger.songs[previousTrack].src))
    }
  }

  const handleVolumeChange = (e) => {
    setVolume(Number.parseFloat(e.target.value))
  }

  const selectCategory = (index) => {
    setSelectedCategory(index)
    setSelectedSinger(0)
    setCurrentTrack(0)
    setIsPlaying(false)
  }

  const selectSinger = (index) => {
    setSelectedSinger(index)
    setCurrentTrack(0)
    setIsPlaying(false)
  }

  const selectSong = (index) => {
    setCurrentTrack(index)
    setIsPlaying(true)
    if (playerRef.current) {
      playerRef.current.loadVideoById(getYouTubeVideoId(currentSinger.songs[index].src))
      playerRef.current.playVideo()
    }
  }

  const stopSong = () => {
    setIsPlaying(false)
    if (playerRef.current) {
      playerRef.current.stopVideo()
    }
  }

  const updateSongInfo = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime()
      const duration = playerRef.current.getDuration()
      setSongInfo({ currentTime, duration })
    }
  }

  const formatTime = (time) => {
    if (isNaN(time)) {
      return "0:00"
    }
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  useEffect(() => {
    const interval = setInterval(updateSongInfo, 1000)
    return () => clearInterval(interval)
  }, [isPlaying, currentTrack, songInfo]) // Added isPlaying, currentTrack, and songInfo as dependencies

  return (
    <div className="music-player-container" ref={containerRef}>
      <div className="music-background"></div>
      <h1 className="music-player-title">Music Player</h1>
      <div className="categories-section">
        {musicData.categories.map((category, index) => (
          <button
            key={category.name}
            className={`category-btn ${selectedCategory === index ? "active" : ""}`}
            onClick={() => selectCategory(index)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="content-section">
        <div className="singers-section">
          {currentCategory.singers.map((singer, index) => (
            <div
              key={singer.name}
              className={`singer-card ${selectedSinger === index ? "active" : ""}`}
              onClick={() => selectSinger(index)}
            >
              <img src={singer.image || "/placeholder.svg"} alt={singer.name} className="singer-image" />
              <h3 className="singer-name">{singer.name}</h3>
            </div>
          ))}
        </div>

        <div className="playlist-section">
          <h2 className="playlist-title">{currentSinger.name}'s Songs</h2>
          <div className="songs-list">
            {currentSinger.songs.map((song, index) => (
              <div
                key={song.title}
                className={`song-item ${currentTrack === index ? "active" : ""} ${
                  isPlaying && currentTrack === index ? "playing" : ""
                }`}
                onClick={() => selectSong(index)}
              >
                <span className="song-number">{isPlaying && currentTrack === index ? "▶️" : index + 1}</span>
                <div className="song-info">
                  <span className="song-title">{song.title}</span>
                  <span className="song-duration">{song.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="player-section">
        <div className="now-playing">
          <img
            src={currentSinger.image || "/placeholder.svg"}
            alt={currentSinger.name}
            className="current-song-image"
          />
          <div className="current-song-info">
            <h3 className="current-song-title">{currentSong.title}</h3>
            <p className="current-song-artist">{currentSong.artist}</p>
          </div>
        </div>

        <div className="progress-bar">
          <input
            type="range"
            min="0"
            max={songInfo.duration}
            value={songInfo.currentTime}
            onChange={(e) => {
              const time = Number(e.target.value)
              playerRef.current.seekTo(time)
              setSongInfo({ ...songInfo, currentTime: time })
            }}
            className="progress-slider"
          />
          <div className="time-display">
            {formatTime(songInfo.currentTime)} / {formatTime(songInfo.duration)}
          </div>
        </div>

        <div className="controls">
          <button onClick={playPreviousTrack} className="control-button">
            ⏮️
          </button>
          <button onClick={togglePlay} className="control-button play-pause">
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <button onClick={stopSong} className="control-button">
            ⏹️
          </button>
          <button onClick={playNextTrack} className="control-button">
            ⏭️
          </button>
        </div>

        <div className="volume-control">
          <span className="volume-icon">🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
      </div>

      <YouTube
        videoId={getYouTubeVideoId(currentSong.src)}
        opts={{
          height: "0",
          width: "0",
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            rel: 0,
          },
        }}
        onReady={(event) => {
          playerRef.current = event.target
        }}
        onStateChange={(event) => {
          if (event.data === YouTube.PlayerState.ENDED) {
            playNextTrack()
          }
        }}
      />
    </div>
  )
}

export default MusicPlayer

