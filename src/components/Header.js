import { h } from 'preact'
import border from '../static/image2vector.svg'

const Header = () => (
  <header className="header-container">
      <h1 className="lighten">Welcome to M~A~T~S</h1>
      <h6 className="lighten">Home of Hamish Clulee</h6>
      <div className="border-container">
          <img src={ border } height="180" />
      </div>
  </header>  
)

export default Header
