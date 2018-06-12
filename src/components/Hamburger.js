import { h, render, Component } from 'preact'
import anime from "animejs"
import { route } from 'preact-router'


class Hamburger extends Component {
    // Vue data
    constructor() {
        super()
        // this.state.showmenu = false
    }

    // Vue mounted
    componentDidMount() {
        anime({
            targets: '.hamburger-container',
            translateX: -15,
            translateY: 15,
            duration: 1000,
            scale: 2.5
        })
    }

    // Vue beforeDestroy
    componentWillUnmount() {

    }


    // Vue Template
    render(props, state) {
        return <div className="hamburger-container">
            <div onClick={e => window.location.href = '/'}>
                <i className="material-icons">menu</i>
            </div>
        </div>
    }
}

export default Hamburger

// <div className="hamburger-dropdown">
//     <h6>HOME</h6>
// <h6><Link path="/blog">BLOG</Link></h6>
// <h6><Link path="/ipseity">IPSEITY</Link></h6>
// <h6><Link path="/work">WORK</Link></h6>
// </div>
