import { h, render, Component } from 'preact'
import Hamburger from '../components/Hamburger'
import { route } from 'preact-router'
import HashToMessageTable from '../store/Custom'

class Magnets extends Component {

    constructor() {
        super()
        var hash = window.location.href.split('/')[4]
        this.state.message = HashToMessageTable[hash]
    }

    componentDidMount() {
        
    }

    render(props, state) {
        return <div>
            <div className="page-container">
                <Hamburger />
                <h3>M~A~T~S says...</h3>
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
