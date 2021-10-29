import { AiOutlineShoppingCart } from 'react-icons/ai'
import './NavBarCart.css'
  
function ItemListContainer(props){
    return(
    <span className="ItemListContainer rounded-pill d-inline p-2 bg-primary text-white" >{props.cantItem}</span>
    )
}

const NavBarCart = ()=>{
     return(

 <div className="NavBarCart">
     <a className="nav-link active" aria-current="page" href="#"><AiOutlineShoppingCart /></a>
          <ItemListContainer cantItem="1"/>
          </div>
     )
 }

 export default NavBarCart