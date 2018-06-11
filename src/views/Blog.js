import { h, render, Component } from 'preact';
import Footer from '../components/Footer'
import BackIcon from '../components/BackIcon'
import anime from "animejs";

module.exports = class Blog extends Component {

    // Vue data
    constructor() {
        super()
    }

    // Vue mounted
    componentDidMount() {
        anime.timeline({loop: true})
            .add({
                targets: '.ml15 .word',
                scale: [14,1],
                opacity: [0,1],
                easing: "easeOutCirc",
                duration: 1000,
                delay: function(el, i) {
                    return 1000 * i;
                }
            }).add({
            targets: '.ml15',
            opacity: 0,
            duration: 3000,
            easing: "easeOutExpo",
            delay: 1000
        });
    }

    // Vue beforeDestroy
    componentWillUnmount() {

    }

    render(props, state) {
        return <div>
            <div className="page-container">
                <BackIcon />
                <h1 className="ml15">
                    <span className="word">No</span>
                    <span className="word">Recent</span>
                    <span className="word">Posts</span>
                    <span className="word">To</span>
                    <span className="word">Display</span>
                </h1>
            </div>
            <Footer />
        </div>;
    }
}