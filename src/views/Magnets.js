import { h, render, Component } from 'preact'
import Hamburger from '../components/Hamburger'
import baseURL from '../constants/utils'

class Magnets extends Component {

    constructor() {
        super()
        this.state.message = []
    }

    componentDidMount() {
        // var hash = window.location.href.split('/')[4]
        //'http://localhost:5555/get-magnet?hash=' +
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
            <div className="page-container">
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
