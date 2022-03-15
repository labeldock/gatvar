import { Link } from 'react-router-dom'
import './MenuLayout.scss'

export default ({ children })=>{
  return (
    <div className="menu-layout">
      <header>
        <div className="brand">내가바</div>
        <nav>
          <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/neutralwire">중성선</Link></li>
          </ul>
        </nav>
      </header>
      <div>
        {children}
      </div>
    </div>
  )
}