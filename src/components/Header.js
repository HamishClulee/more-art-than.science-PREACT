import { h } from 'preact'
import { Link } from 'preact-router/match';
import git from '../static/github.svg'
import linkedIn from '../static/linkdin.svg'

const Header = () => (
  <header className="header-container">
    <div className="row-1">
        <div className="row i1-1"><Link href="/blog"><h5>BLOG</h5></Link></div>
        <div className="i1-2">
            <div className="text-container">
                <h4>Welcome to M~A~T~S</h4>
                <h5>Home of Hamish Clulee</h5>
                <p>I'm a software engineer and web dev from New Zealand. I'm full stack approved, but am most commonly found working on front end challenges, especially UI/UX design and build and Front End Tooling.</p>
                <div className="header-icons">
                    <a href="https://github.com/HamishClulee" target="_blank" className="icon-container-item">
                        <img src={git} height="30"/>
                    </a>
                    <a href="https://www.linkedin.com/in/hamish-clulee-163b1950/" target="_blank" className="icon-container-item">
                        <img src={linkedIn} height="30" />
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="row-2">
        <div className="row i2-1"><Link href="/work"><h5>WORK</h5></Link></div>
        <div className="row i2-2"><Link href="/resume"><h5>RESUME</h5></Link></div>
        <div className="row i2-3"><Link href="/tech"><h5>TECH</h5></Link></div>
    </div>
  </header>
)

export default Header
