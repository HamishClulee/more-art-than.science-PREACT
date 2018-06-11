import { h, render, Component } from 'preact';
import Footer from '../components/Footer'
import shapes from '../static/optimised.svg'

module.exports = class Blog extends Component {
    render(props, state) {
        return <div>
            <div className="page-container">
            </div>
            <Footer />
        </div>;
    }
}