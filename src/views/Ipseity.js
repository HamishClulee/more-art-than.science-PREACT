import { h, render, Component } from 'preact'
import anime from "animejs"
import Hamburger from '../components/Hamburger'
class Ipseity extends Component {

    constructor() {
        super()
    }

    // Vue mounted
    componentDidMount() {
        anime.timeline({loop: false})
            .add({
                targets: '.ml17 .word',
                scale: [14,1],
                opacity: [0,1],
                easing: "easeOutCirc",
                duration: 1000,
                delay: function(el, i) {
                    return 1000 * i;
                }
            })
    }

    render(props, state) {
        return <div className="page-container">
            <h3 className="ml17">
                <Hamburger />
                <span className="word">Soon</span>
                <span className="word">Come</span>
            </h3>
        </div>;
    }
}

export default Ipseity
