import { h, render, Component } from 'preact'
import Hamburger from '../../components/Hamburger'

class Good extends Component {
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
            <h1>WHATS REALLY GOOD?</h1>
            <p>I mean, what defines good?<br /><br />
                Personally, I tend to oscillate between two states; that would be good, and... it's not actually that good.<br /><br />
                Life as a human pin ball is an acquired taste. It's like Douglas Adams said...<br /><br />
                "Flying is the art of throwing yourself at the ground and missing."<br /><br />
                At a certain point in the game, the jarring experienced by being thrown from paddle to paddle just
                becomes normal. Learning how to accept your fate as a pinball gracefully is a worthwhile experience
                on its own.<br /><br />
                I never deign to offer advise. At best I'm a cautionary tale. When life gave me lemons I rubbed the
                juice into my eyes.<br /><br />
                But somewhere in this plethora of noise and landslide of proud and tiny tragedies there lies a kind of
                wisdom. Running around heavy armed with foot guns and scissors teaches a amazing level of foolhardiness.
                We are all jolly green giants wandering the earth...&nbsp;<br /><br />
                Ask me what's next?<br />
                Ask me where and when?<br />
                Ask me what's good?<br /><br />
                Don't wait for the answer though, I'll be busy with normalising my adventures through the windshield.
                You don't need the answer though buddy, you already know.</p>
        </div>
    }
}

export default Good