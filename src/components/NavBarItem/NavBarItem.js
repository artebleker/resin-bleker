export default function NavBarItem(props) {
    return (
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href={props.id}>
          {props.item}
        </a>
      </li>
    );
  }

