import { h } from 'preact'
import border from '../static/image2vector.svg'
import git from '../static/github.svg'
import linkedIn from '../static/iconmonstr-linkedin-5.svg'

const Header = () => (
    <header className="header-container under-construction">
        <h3 className="lighten">Welcome to M~A~T~S</h3>
        <h6 className="lighten">Home of Hamish Clulee</h6>
        <h6>This whole thing isn't finsihed yet, so you're seeing this page instead of the real dealio...</h6>
        <h6>Come back later maybe?</h6>
        <div className="border-container">
            <img src={ border } height="180" />
        </div>
        <div className="icons-container">
            <a href="https://github.com/HamishClulee" target="_blank" className="icon-container-item">
                <img src={git} height="40"/>
            </a>
            <a href="https://www.linkedin.com/in/hamish-clulee-163b1950/" target="_blank" className="icon-container-item">
                <img src={linkedIn} height="40" />
            </a>
        </div>
    </header>
)

export default Header
