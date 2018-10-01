import { h, render, Component } from 'preact';
import { Link, Match } from 'preact-router/match'

module.exports = class Footer extends Component {

    buildConditional () {
        if (true) {
            return <span>THINGO</span>
        }
    }

    render(props, state) {
        return <div className="footer-container">
        <div className="row-2">
                <Match path="/all-projects">
                    { ({ matches }) => matches && (
                        <div className="row i2-4"><Link href="/"><h5>HOME</h5></Link></div>
                    ) }
                </Match>
                <div className="row i2-1"><Link href="/work"><h5>WORK</h5></Link></div>
                <div className="row i2-2"><Link href="/words"><h5>WORDS</h5></Link></div>
                <div className="row i2-3"><Link href="/ipseity"><h5>IPSEITY</h5></Link></div>
            </div>
        </div>
    }
}