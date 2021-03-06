import { h, render, Component } from 'preact'
import Hamburger from '../components/Hamburger'
import { Link } from 'preact-router/match'

class Words extends Component {
    constructor() {
        super()
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render(props, state) {
        return <div>
            <div className="blog-container">
                <Hamburger />
                <h5><Link href="/tinybanana" className="blog-post-link">HEY CUTE BANANA!</Link></h5>
                <h5><Link href="/stolencars" className="blog-post-link">DRIVING STOLEN CARS</Link></h5>
                <h5><Link href="/interview-a-towel" className="blog-post-link">AN INTERVIEW WITH A BATH TOWEL</Link></h5>
                <h5><Link href="/things" className="blog-post-link">COOL, THING</Link></h5>
                <h5><Link href="/whatsgood" className="blog-post-link">REALLY GOOD?</Link></h5>
            </div>
        </div>
    }
}

export default Words