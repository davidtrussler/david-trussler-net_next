import {hydrate} from 'react-dom';
import {Nav} from '../components/Nav'; 

export function Header() {
	return(
		<header>
			<div className="constrained">
				<div className="header__inner">
					<h1 className="header__title">David Trussler</h1>
					<div id="nav"></div>
				</div>
			</div>
		</header>
	)
}

hydrate(<Nav/>, document.getElementById('nav')); 
