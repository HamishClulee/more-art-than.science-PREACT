import { h, render, Component } from 'preact'
import { Link } from 'preact-router/match'
import git from '../static/github.svg'
import linkedIn from '../static/linkdin.svg'
import anime from "animejs"

module.exports = class Header extends Component {

    // Vue data
    constructor() {
        super();
    }

    // Vue mounted
    componentDidMount() {
        anime({
            targets: '.ml15 .word',
            scale: [14, 1],
            opacity: [0, 1],
            easing: "easeOutCirc",
            duration: 1000,
            delay: function (el, i) {
                return 1000 * i;
            }
        })

        anime({
            targets: '.row-2',
            direction: 'alternate',
            scale: 1.1
        })
    }

    // Vue beforeDestroy
    componentWillUnmount() {
    }

    // Vue Template
    render(props, state) {
        return <header className="header-container">
            <div className="row-1">
                <h1 className="ml15">
                    <span className="word">More</span>
                    <span className="word">Art</span>
                    <span className="word">Than</span>
                    <span className="word">Science</span>
                </h1>
                <div className="extra-info-container">
                    <div className="text-container">
                        <h4>Welcome to M~A~T~S</h4>
                        <h5>Home of Hamish Clulee</h5>
                        <p>I'm a Web Developer from New Zealand. It's more than likely you will find me working on the front end. I'm especially passionate about UI/UX design and Front End Ops.</p>
                        <p><em>Full Stack approved.</em></p>
                        <div className="header-icons-home">
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
                <div className="row i2-2"><Link href="/blog"><h5>BLOG</h5></Link></div>
                <div className="row i2-3"><Link href="/ipseity"><h5>IPSEITY</h5></Link></div>
            </div>
        </header>;
    }
}