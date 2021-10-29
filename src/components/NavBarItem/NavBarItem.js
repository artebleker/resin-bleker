export default function NavBarItem(props) {
    return (
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href={props.id}>
          {props.item}
        </a>
      </li>
    );
  }

