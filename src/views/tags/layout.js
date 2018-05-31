import { h } from 'preact';
import Header from './header';

export default function (props) {
	return (
		<div className="main-app-container">
			<Header />
			<main id="content">
				{ props.children }
			</main>
		</div>
	);
}
