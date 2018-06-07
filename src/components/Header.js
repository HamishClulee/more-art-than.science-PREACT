import { h } from 'preact'
import border from '../static/image2vector.svg'

const Header = () => (
  <header className="header-container">
    <div className="row-1"><div className="row-1-1"></div><div className="row-1-2"></div></div>
    <div className="row-2"><div className="row-2-1"></div><div className="row-2-2"></div></div>
      <div className="text-container">
          <h1 className="lighten">Welcome to M~A~T~S</h1>
          <h6 className="lighten">Home of Hamish Clulee</h6>
      </div>
    <div className="border-container">
        <img src={ border } height="180" />
    </div>
  </header>
)

export default Header

//#FFC107 #388E3C #1976D2 #D32F2F