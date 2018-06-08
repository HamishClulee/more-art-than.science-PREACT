import { h, render, Component } from 'preact'

import Header from '../components/Header'

module.exports = class Home extends Component {
    render(props, state) {
        return <Header />;
    }
}
