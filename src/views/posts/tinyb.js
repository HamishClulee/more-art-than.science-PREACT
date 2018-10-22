import { h, render, Component } from 'preact'
import Hamburger from '../../components/Hamburger'
import tinyb from '../../static/tinyb.jpg'

class Tinyb extends Component {
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
            <h4>Tiny Bananas</h4>
            <div className="tinyb-container">
                <img src={tinyb} />
            </div>
            <p>Sometimes, if you go somewhere new, you see different things. Sometimes those things will make you
                look at other things in a new light and possibly help you to grow as person. Other times, it might just
                add to clutter. You just never know!</p>
            <p>I never knew bananas could be this small! But there it is, another fun fact from S.E.Asia.
                If learning is process of stacking facts, and the goal of learning is knowledge, then knowing
                about tiny bananas has made me a better human.</p>
            <p>But something doesn't feel right. I try to imagine situations in which my new found knowledge
                could benefit my fellow man. If I squeeze it hard enough; maybe ... yeah, not happening.
                It's just another disparate thing. An inanimate fact in a sea that's drowning under the weight
                of useless information.</p>
            <p>I could eat the banana.</p>
            <p>Although at this size, its hardly worth it.</p>
            <p>I could contemplate the banana, put my self in its shoes, try to empathise with the bananas
                struggles first hand. How does it put food on the table? Is is hard to maintain balance while
                travelling horizontally? Whats it like to hang out
                in a tree your whole life?</p>
            <p>I could attempt to find a usage for the banana as a tool. I've been told that our modern cell
                phones evolved from sharpened sticks and rocks, painstaking chipped into implements for cutting
                or making other more specialised devices.</p>
            <p>At some point I saw a documentary about some people doing things in Africa. They managed
                to lubricate the broken differential joint in their big truck using a lot of African bananas.
                It was great!
                I only have one tiny banana though so it would require a minute car, and it would have to
                coincide with the tiny car having a busted diff.</p>
            <p>I could try smoking it, you never know your luck? Although on second though, at this stage in
                human evolution, I'm pretty sure if smoking anything has an effect, we either know about it, or have a mate called Barry who's gone too far.
            </p>
            <p>I could give it to some one who was hungry, charity!</p>
            <p>The size could preclude this though, it's so small! It might come across as rude, patronising,
                condescending or some other perceived ill.</p>
            <p>I could just leave it alone, let it decay, maybe in a garden somewhere so that the chemicals
                produced by the fermentation process could be of some small benefit to the other plants in the
                area.</p>
            <p>I just ended up eating it.</p>
        </div>
    }
}

export default Tinyb