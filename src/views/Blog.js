import { h, render, Component } from 'preact';
import Footer from '../components/Footer'
module.exports = class Blog extends Component {
    render(props, state) {
        return <div>
            <div className="page-container">
                <h4>Blog!</h4>
            </div>
            <Footer />
        </div>;
    }
}