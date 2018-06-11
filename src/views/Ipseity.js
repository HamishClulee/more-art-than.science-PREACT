import { h, render, Component } from 'preact'
import Footer from '../components/Footer'
import BackIcon from '../components/BackIcon'

module.exports = class Ipseity extends Component {
    render(props, state) {
        return <div className="page-container">
                <BackIcon />
                <h4>These are the things beans are made of</h4>
            <Footer />
        </div>;
    }
}