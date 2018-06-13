import { h, render, Component } from 'preact'
import anime from "animejs"
import Hamburger from '../components/Hamburger'

class Blog extends Component {

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
        anime.timeline({loop: false}).add({
            targets: '.stickman',
            translateX: '76vw',
            duration: 8000
        }).add({
            targets: '.stickman',
            opacity: 0,
            duration: 6000
        })
    }

    componentWillUnmount() {

    }

    render(props, state) {
        return <div>
            <div className="blog-container">
                <Hamburger />
                <div className="blog left-column">
                    <h1 className="ml16 one">No</h1>
                    <h1 className="ml16 two">Posts</h1>
                    <h1 className="ml16 three">To</h1>
                    <h1 className="ml16 four">Display</h1>
                </div>
            </div>
            <div className="person-container">
                <div className='stickman'>
                    <div className='head'>
                        <div className='eye'></div>
                        <div className='mouth'></div>
                    </div>
                    <div className='body'>
                        <div className='arm' id='left'></div>
                        <div className='arm' id='right'></div>
                        <div className='leg' id='left'></div>
                        <div className='leg' id='right'></div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Blog