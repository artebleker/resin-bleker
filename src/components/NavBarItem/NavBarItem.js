import {Link} from 'react-router-dom'

export default function NavBarItem(props) {
    return (
      <li className="nav-item">
       <Link to='/category/'  ><a className="nav-link active" aria-current="page" >
          {props.item}
        </a></Link>
      </li>
    );
  }

