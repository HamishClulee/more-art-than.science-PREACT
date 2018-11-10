import { h, render, Component } from 'preact'
import Hamburger from '../../components/Hamburger'
import towel from '../../static/garry.jpg'

class Things extends Component {
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
        return <div className="blog-post-container">
            <Hamburger />
            <h1>When things fall apart.</h1>
            <div className="tinyb-container">
                <img src={towel} />
            </div>
            <p>Are great. I like nice things.<br /><br />If you stack them high enough they can block out sounds and your neighbors porch light which doesn't work right.<br /><br />They give you something to do when they break or need replacing. You can spend your time maintaining them.&nbsp;<br /><br />You can justify getting a dog to protect them. Everyone likes things, but if you like them more, other people might try to take advantage of that, and could try to steal your things. So you can focus your energy on developing a system of other things like walls and cameras to protect the original stock pile of things. A thing pyramid if you will.<br /><br />A new thing brings a smile to your face. Once that smile fades, it's easy to get another thing to keep that fire burning and consume any negative emotional energy that is causing you strife.<br /><br />Things can give you a reason to work harder. Everytime you think, I don't want to work this hard, just think of the new things you can get with the money from working more.<br /><br />They can help to distract you from the boring parts of your relationships. Like if there's a hole in your ability to relate to other people you can find a thing with that same sort of shape, and use it to plug the hole.<br /><br />Things and money walk hand in hand like the devil do with the dammed. Haha.<br /><br />If everyone gets on the bandwagon and praises things as the new coming of insert religious figure here, things can also be used to choke our planets ecosystems to the point of breaking beyond all return.<br /><br />Good shit right. Wanna thing?</p>
        </div>
    }
}

export default Things