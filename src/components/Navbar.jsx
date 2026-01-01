import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🐦 Twitter Clone
        </Link>
        
        <ul className="navbar-menu">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              🏠 Inicio
            </Link>
          </li>
          <li>
            <Link 
              to="/profile" 
              className={location.pathname === '/profile' ? 'active' : ''}
            >
              👤 Perfil
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar