import { AiOutlineShoppingCart } from 'react-icons/ai'
import './NavBarCart.css'
  
function CantCart(props){
    return(
    <span className="CantCart rounded-pill d-inline p-2 bg-primary text-white" >{props.cantItem}</span>
    )
}

const NavBarCart = ()=>{
     return(

 <div className="NavBarCart">
     <a className="nav-link active" aria-current="page" href="#"><AiOutlineShoppingCart /></a>
          <CantCart cantItem="1"/>
          </div>
     )
 }

 export default NavBarCart