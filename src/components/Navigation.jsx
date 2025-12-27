// src/components/Navigation.jsx
import '../styles/Navigation.css'

function Navigation() {
  return (
    <nav className="main-nav">
      <a 
        href="https://cibernaka-l2.netlify.app/" 
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="nav-icon">⚔️</span>
        <span className="nav-text">Lineage 2 Server</span>
      </a>
    </nav>
  )
}

export default Navigation