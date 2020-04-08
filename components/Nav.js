// import {Component} from 'react';
import {Anchor} from '../components/Anchor'; 
// import {hydrate} from 'react-dom';

export function Nav() {
	return (
// export class Nav extends Component {
//	 hydrate = () => 
		<nav className="main-nav here">
			<ul>
				<li className="main-nav__element">
					<Anchor href="/" link="Home"/>
				</li>

				<li className="main-nav__element">
					<Anchor href="music" link="Music"/>
				</li>
			</ul>
		</nav>
	)
}
