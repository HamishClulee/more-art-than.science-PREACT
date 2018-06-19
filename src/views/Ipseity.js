import { h, render, Component } from 'preact'
import Hamburger from '../components/Hamburger'
import { route } from 'preact-router'

import words from '../constants/words.js'

class Ipseity extends Component {

    constructor() {
        super()
        this.state.words = words
        this.state.message = []
    }

    // Vue mounted
    componentDidMount() {

    }

    removeWord(word) {
        this.setState({message: this.state.message.filter(function(p) {
            return p !== word
        })})
    }

    activateWord (word) {
        this.setState({
            message: [...this.state.message, word]
        })
    }

    saveAndCreate () {
        var hash = this.generateHash()

        fetch('http://localhost:5555/set-magnet?hash=' + hash + '&message=' + encodeURIComponent(this.state.message))
        route('/magnets/' + hash)
    }

    generateHash () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1)
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
    }

    render(props, state) {
        return <div>
            <div className="blog-container">
                <Hamburger />
                <div className="blog left-column">
                    <h3>Fridge</h3>
                    <h3>Magnets</h3>
                </div>
                <div className="blog right-column">
                    <div className="words-container">
                        { state.words.map(word => {
                            return <span onClick={ () => this.activateWord(word) } className="word-item">{word}</span>
                        }) }
                    </div>
                    <div className="sequence-container">
                        <div className="message-container">
                            { state.message.map(word => {
                                return <span onClick={ () => this.removeWord(word) } className="word-item">{word}</span>
                            }) }
                        </div>

                        <button className="btn" onclick={ () => this.saveAndCreate() }>Save and Create new link</button>
                    </div>
                </div>
            </div>

        </div>
    }
}

export default Ipseity
