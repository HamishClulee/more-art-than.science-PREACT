import { h, render, Component } from 'preact'
import { Link } from 'preact-router/match'
import Hamburger from '../components/Hamburger'

class Work extends Component {
    render(props, state) {
        return <div className="page-container">
            <Hamburger />
            <h4>Most Recent Freelance Project</h4>
            <h5><a href="https://babyaid.co.nz">Baby Aid Nz</a></h5>
            <div className="project-image-container">
            </div>
            <div className="project-text-container">
                <p>Brochureware and a Booking App, using Stripe for payments.</p>
            </div>
            <h4><Link href="/all-projects">Show All Projects</Link></h4>
            <div className="footer-spacer"></div>
        </div>
    }
}

export default Work
