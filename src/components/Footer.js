import { h, render, Component } from 'preact';
import { Link } from 'preact-router/match'

module.exports = class Footer extends Component {
    render(props, state) {
        return <div className="footer-container">
        <div className="row-2">
                <div className="row i2-1"><Link href="/work"><h5>WORK</h5></Link></div>
                <div className="row i2-2"><Link href="/blog"><h5>BLOG</h5></Link></div>
                <div className="row i2-3"><Link href="/ipseity"><h5>IPSEITY</h5></Link></div>
            </div>
        </div>
    }
}