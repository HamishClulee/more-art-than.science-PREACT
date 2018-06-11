import { h, render, Component } from 'preact';
import Footer from '../components/Footer'
import BackIcon from '../components/BackIcon'
import anime from "animejs";

module.exports = class Blog extends Component {

    // Vue data
    constructor() {
        super()
    }

    wrapInSpans (classToWrap) {
        let str = ''
        document.querySelector(classToWrap).innerHTML.split('').forEach(letter => {
            str += `<span class="letter">${letter}</span>`
        })
        document.querySelector(classToWrap).innerHTML = ''
        document.querySelector(classToWrap).innerHTML = str
    }

    // Vue mounted
    componentDidMount() {

        this.wrapInSpans('.one')
        this.wrapInSpans('.two')
        this.wrapInSpans('.three')
        this.wrapInSpans('.four')

        anime.timeline({loop: false})
        .add({
            targets: '.ml16 .letter',
            translateY: [-100, 0],
            easing: "easeOutExpo",
            duration: 2200,
            delay: function(el, i) {
                return 80 * i;
            }
        })
    }

    // Vue beforeDestroy
    componentWillUnmount() {

    }

    render(props, state) {
        return <div>
            <div className="page-container">
                <BackIcon />
                <h1 className="ml16 one">No</h1>
                <h1 className="ml16 two">Posts</h1>
                <h1 className="ml16 three">To</h1>
                <h1 className="ml16 four">Display</h1>
            </div>
            <Footer />
        </div>;
    }
}