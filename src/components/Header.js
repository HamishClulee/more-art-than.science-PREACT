import { h } from 'preact'
import border from '../static/image2vector.svg'

const Header = () => (
  <header className="header-container">
    <div className="row-1">
        <div className="row-1-1"><h6>BLOG</h6></div>
        <div className="row-1-2">
            <div className="text-container">
                <h1>Welcome to M~A~T~S</h1>
                <h3>Home of Hamish Clulee</h3>
            </div>
        </div>
    </div>
    <div className="row-2"><div className="row-2-1"><h6>WORK</h6></div><div className="row-2-2"><h6>RESUME</h6></div></div>

    <div className="border-container">
        <img src={ border } height="180" />
    </div>
  </header>
)

export default Header
