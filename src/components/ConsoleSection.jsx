// src/components/ConsoleSection.jsx
// src/components/ConsoleSection.jsx
import { useEffect, useState } from 'react'
import consoles from '../data/consoles'

const SHEET_URL =
  'https://opensheet.elk.sh/1-r9y4Cj-H_2xNg8U77IZP4LdZqGvjg_jxSoAcmC80-0/Hoja%201'

// Función para extraer el ID del video de YouTube
const getYouTubeID = (url) => {
  if (!url) return null
  const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/)
  return match ? match[1] : null
}

function ConsoleSection() {
  const [selected, setSelected] = useState(null)
  const [games, setGames] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(SHEET_URL)
      .then(res => res.json())
      .then(data => {
        if (!Array.isArray(data)) throw new Error('Formato inválido')
        setGames(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const filteredGames = selected
    ? games.filter(g => g.console === selected)
    : []

  return (
    <section className="consoles">
      <div className="console-list">
        {consoles.map(c => (
          <div
            key={c.id}
            className={`console-card ${selected === c.id ? 'active' : ''}`}
            onClick={() => setSelected(c.id)}
          >
            {c.name}
          </div>
        ))}
      </div>

      {!selected && !error && !loading && (
        <p className="subtitle">🎮 Elegí una consola</p>
      )}

      {loading && (
        <p className="subtitle">⏳ Cargando contenido...</p>
      )}

      {error && (
        <p className="warning">⚠️ No se pudo cargar el contenido</p>
      )}

      {selected && filteredGames.length === 0 && !error && !loading && (
        <p className="subtitle">No hay contenido todavía</p>
      )}

      {filteredGames.length > 0 && (
        <div className="games-grid">
          {filteredGames.map((game, i) => {
            const videoID = getYouTubeID(game.link)
            const thumbnail = videoID 
              ? `https://img.youtube.com/vi/${videoID}/mqdefault.jpg`
              : null

            return (
              <a 
                href={game.link} 
                target="_blank" 
                rel="noreferrer"
                className="game-card-thumbnail"
                key={i}
              >
                {thumbnail ? (
                  <div className="thumbnail-container">
                    <img 
                      src={thumbnail} 
                      alt={game.title}
                      className="game-thumbnail"
                    />
                    <div className="play-overlay">
                      <svg 
                        width="48" 
                        height="48" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="thumbnail-placeholder">
                    <span>🎮</span>
                  </div>
                )}
                <div className="game-info">
                  <h3 className="game-title">{game.title}</h3>
                  <span className="watch-label">Ver Short</span>
                </div>
              </a>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default ConsoleSection