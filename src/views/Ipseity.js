import { h, render, Component } from 'preact'
import Hamburger from '../components/Hamburger'
import { route } from 'preact-router'

import { words, shuffle } from '../constants/words.js'
import baseURL from "../constants/utils"

class Ipseity extends Component {

    constructor() {
        super()
        this.state.words = shuffle(words).slice(0, 145)
        this.state.message = []
        this.state.errorText = ''
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
        if (this.state.message.length < 10) {
            this.setState({
                message: [...this.state.message, word]
            })
        } else {
            this.setState({
                errorText: '10 words max!'
            })
        }

    }

    saveAndCreate () {
        var hash = this.generateHash()
        fetch(`${baseURL}/set-magnet?hash=${hash}&message=${encodeURIComponent(this.state.message)}`)
        route(`/magnets/${hash}`)
    }

    generateHash () {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1)
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
    }

    render(props, state) {
        return <div>
            <div className="ipseity-container">
                <Hamburger />
                <div>
                    <h2 className="magnets-main-header">Welcome to Fridge Haiku! Another way to waste time on the internet!</h2>
                    <h4 className="magnets-header">Click a magnet to add it to the list, once finished click the save button for a shareable link! Most of them will not be haiku's, dont sweat it!</h4>
                    <div className="words-container">
                        { state.words.map(word => {
                            return <span onClick={ () => this.activateWord(word) } className="word-item">{word}</span>
                        }) }
                    </div>
                    <div className="sequence-container">
                        <h4 className="magnets-header">Your Fridge Haiku so far....</h4>
                        <h4 className="magnets-error-text"> { state.errorText } </h4>
                        <div className="message-container-ipseity">
                            { state.message.map(word => {
                                return <span onClick={ () => this.removeWord(word) } className="word-item">{word}</span>
                            }) }
                        </div>

                        <button className="btn btn-small haiku-action" onclick={ () => this.saveAndCreate() }>Share</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Ipseity
