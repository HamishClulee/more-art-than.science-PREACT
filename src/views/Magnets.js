import { h, render, Component } from 'preact'
import Hamburger from '../components/Hamburger'

class Magnets extends Component {

    constructor() {
        super()
        this.state.message = []
    }

    componentDidMount() {
        var hash = window.location.href.split('/')[4]
        fetch('http://localhost:5555/get-magnet?hash=' + encodeURIComponent(hash))
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
