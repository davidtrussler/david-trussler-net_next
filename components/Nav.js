import {Anchor} from '../components/Anchor'; 

export function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Anchor href="#" link="Home"/>
				</li>

				<li>
					<Anchor href="#" link="Music"/>
				</li>
			</ul>
		</nav>
	)
}
