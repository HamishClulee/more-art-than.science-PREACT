import { h } from 'preact';
import { Link } from 'preact-router';
import Card from '../tags/card';

export default function (props) {
	return (
		<div className="page page__home">
            <button className="blue waves-effect waves-light btn btn-large btn-floating pulse"><i className="material-icons left">cloud</i></button>
            <button className="teal waves-effect waves-light btn btn-large btn-floating pulse"><i className="material-icons left">cloud</i></button>
            <button className="yellow waves-effect waves-light btn btn-large btn-floating pulse"><i className="material-icons left">cloud</i></button>
            <button className="red waves-effect waves-light btn btn-large btn-floating pulse"><i className="material-icons left">cloud</i></button>


			<Card>
				<h1>Home</h1>
				<p>This is the home page.</p>

				<p>You should check out:</p>
				<nav>
					<Link href="/foo">Foo</Link>
					<Link href="/foo/bar">Foo/Bar</Link>
				</nav>
			</Card>
		</div>
	);
}
