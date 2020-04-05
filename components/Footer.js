import {Anchor} from './Anchor'; 

function footerLinks(props) {
  let arrayElems = []; 

  for (let i = 0; i < props.urls.length;  i++) {
    arrayElems.push(
      <li className="footer__linkitem" key={"footer__linkitem-" + i}>
        <Anchor href={props.urls[i]} link={props.links[i]} target="_blank"/>
      </li>
    )
  }

  return arrayElems; 
}

export function Footer(props) {
  return (
    <footer>
      <div className="constrained">
        <div className="footer__inner">
          <nav>
            <ul className="footer__links">
              {footerLinks(props)}
            </ul>
          </nav>

          <p className="footer__credit">&#169; David Trussler 2020</p>
        </div>
      </div>
    </footer>
  )
}
