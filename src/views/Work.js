import { h, render, Component } from 'preact'
import banz1 from '../static/banz1.png'
import { Link } from 'preact-router/match'

module.exports = class Work extends Component {
    render(props, state) {
        return <div className="page-container">
            <h4>Most Recent Freelance Project</h4>
            <h5><a href="https://babyaid.co.nz">Baby Aid Nz</a></h5>
            <div className="project-image-container">
                <img src={banz1}/>
            </div>
            <div className="project-text-container">
                <p>Brochureware and a Booking App, using Stripe for payments.</p>
            </div>
            <h4><Link href="/all-projects">Show All Projects</Link></h4>
        </div>;
    }
}