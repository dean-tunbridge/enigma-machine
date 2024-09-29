import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from './Nav.tsx'

function App() {
  return (
    <div className="main-container">
      <header>
        <Nav />
      </header>
      <Outlet />
    </div>
  )
}

export default App