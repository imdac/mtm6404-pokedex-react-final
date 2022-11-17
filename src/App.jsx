import { Outlet, NavLink } from 'react-router-dom'
import './App.css'

function App() {
  return (
  <>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Pokedex</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/items" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Items</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container">
      <Outlet />
    </div>
  </>
  )
}

export default App

