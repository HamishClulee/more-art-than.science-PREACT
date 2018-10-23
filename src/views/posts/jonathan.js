import { h, render, Component } from 'preact'
import Hamburger from '../../components/Hamburger'
import towel from '../../static/download.jpeg'

class Jonathan extends Component {
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
            <h1>I SPEAK WITH JONATHAN, A 28 YEAR OLD BATH TOWEL.</h1>
            <div className="tinyb-container">
                <img src={towel} />
            </div>
            <p>Jonathan isn't much to look at. At 28 (in towel years) he is your average bath towel. He's white,
                and let's face it, that's a bonus, but other than that he's run of the mill, relaxed, clean
                but not pristine.<br /><br />
                His attitude is laconic.&nbsp;<br /><br />
                "Yeah bath towel isn't bad, it has its ups and downs, but yeah I guess I'm a happy towel."<br /><br />
                We met in a 4 star Noosa hotel where he has spent most of his life.<br /><br />
                "All us Bathies star in 5 star, straight out the factory, fresh and clean, those were the days,
                I once dried Anglelina Jolies.... well, you know!"<br /><br />
                For a moment he looks a little alive, but it fades fast as he slips into more dolcit tones...<br /><br />
                "We are all from Thailand, I don't have a passport or anything, but that's where me and my brother and
                sister are from, were all Thai towels at heart."<br /><br />Towels are manufactured not concieved,
                so although Jonathan can never have children, he and most other towels I've talked to form life long
                bonds with the other towels which are manufactured at the same time in the factory in Thailand.<br /><br />
                "My brother Barry is beach towel. He's the lucky one, a real nice model as well, he'll get maybe 5 or 6
                years of sun, surf and bikinins if he's lucky..."<br /><br />
                One human year is seen as around 7 towel
                years based on life expectancy, similar to how dogs have their ages interpreted.<br /><br />
                "Not sure about all that sand though, plays havoc with your fibres. Still, Barry is lucky bastard..."<br /><br />
                At 28, Jonathan doesn't have much more life to live, the current state of consumer goods and cheap
                manufacturing in Asia means most of the time it's easier and cheaper to just buy and new towel, at that
                point there's not much to look forward to it...<br /><br />
                "Yeah, I think about it sometimes, the day I
                get too threadbare and rip, or someone uses me to mop up blood, there's no coming back from blood,
                that's all she wrote..."<br /><br />
                I feel for Jonathan at this point, he is down cast, and crumpled on
                the floor, slightly damp...<br /><br />
                "I just wish I could see my sister again, but I don't think that
                will ever happen."<br /><br />
                Most, if not all towels are separated at birth from their siblings, yet
                they all still maintain those breif moments of connection are life long and unbreakable, you can feel
                how much it means to them and you respect the depths.<br /><br />
                "I'll probably end up in a landfill
                somewhere, at least I hope so, I'd hate to go by burning, feel like that would be horrible."<br /><br />
                He looks haunted.<br /><br />
                "I mean I can put up with the unwiped bums, and the skid marks and clean up form sex sessions or whatever,
                I dont even really mind being left outside before people checkout and getting raining on, I mean,
                at least I'll get washed and dried at least somebody still wants me..."<br /><br />
                That's the real wisdom here. Everyone, towels and people alike just want to be needed and to belong
                somewhere. We all need to come to terms with out own mortality at some point. Despite being slightly
                weathered, Jonathan has something to show us all here, a valuable lesson in accepting our fates
                gracefully and keeping on doing what we need to until the fat lady sings, or shits as the case may be
                for Jonathan.<br /><br />
                Epilogue: Jonathan was torn in half six months after this interview, in a freak
                accident involving two six year olds and a bottle of mountain dew. Lest we forget.</p>
        </div>
    }
}

export default Jonathan