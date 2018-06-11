import { h, render, Component } from 'preact'
import Footer from '../components/Footer'
import anime from "animejs";

module.exports = class Ipseity extends Component {

    // Vue mounted
    componentDidMount() {
        anime.timeline({loop: false})
            .add({
                targets: '.ml15 .word',
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
            <h1 className="ml15">
                <span className="word">Soon</span>
                <span className="word">Come</span>
                <span className="word">Things</span>
                <span className="word">of</span>
                <span className="word">Interest</span>
            </h1>
            <Footer />
        </div>;
    }
}