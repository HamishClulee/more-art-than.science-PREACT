import { h, render, Component } from 'preact'
import Hamburger from '../components/Hamburger'
import one from '../static/statistics.svg'
import two from '../static/stats.png'
import three from '../static/logo.svg'

class Hackery extends Component {
    // Vue data
    constructor() {
        super()
    }

    // Vue mounted
    componentDidMount() {

    }

    // Vue beforeDestroy
    componentWillUnmount() {

    }

    // Vue Template
    render(props, state) {
        return <div className="page-container">
            <Hamburger />
            <div className="rel-cont">
                <div className="circle-zero"/>
                <div className="circle-one"/>
                <div className="move-word">
                    <h1>WORD</h1>
                    <p className="white"
                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <div className="tinyb-container">
                    <img src={one} />
                </div>
                <div className="tinyb-container">
                    <img src={two} />
                </div>
                <div className="tinyb-container">
                    <img src={three} />
                </div>
            </div>


        </div>
    }
}

export default Hackery