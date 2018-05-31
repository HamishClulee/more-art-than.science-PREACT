import { h } from 'preact';
import { Link } from 'preact-router';
import hero from '../../static/img/hero.svg'
let style = { backgroundImage: 'url(' + hero + ')'}

export default function () {
	return (
		<header className="header">
            <img src={ hero } />
		</header>
	)
}
