import { h, render, Component } from 'preact'
import Hamburger from '../components/Hamburger'
import baseURL from '../constants/utils'
import fridge from '../static/fridge.jpg'

let style = {
    backgroundImage: `url(${fridge})`,
    height: '100vh',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

class Magnets extends Component {

    constructor() {
        super()
        this.state.message = []
    }

    componentDidMount() {
        fetch(`${baseURL}/get-magnet?hash=${encodeURIComponent(window.location.href.split('/')[4])}`)
            .then(resp => {
                return resp.json()
            })
            .then(fin => {
                this.setState( { message: fin.message })
            })
    }

    render(props, state) {
        return <div>
            <div className="fridge-container" style={ style }>
                <Hamburger />
                <div className="message-container">
                    { state.message.map(word => {
                        return <span className="word-item">{word}</span>
                    }) }
                </div>
            </div>
        </div>
    }
}

export default Magnets
