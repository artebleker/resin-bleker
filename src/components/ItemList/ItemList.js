import React from 'react'
import Item from '../Item/Item'
import ItemCount from '../ItemCount/ItemCount'
const ItemList = (props) => {
    return (
        <div>
             <ul>
                    <li> <Item /><ItemCount stock={10}/></li>
                    <li><img src={props.img2}></img></li>
                    <li><img src={props.img3}></img><ItemCount stock={10}/></li>
                   
                </ul>
           
{/*            
                    <li><img src={props.img1}></img><ItemCount stock={10}/></li>
                    <li><img src={props.img2}></img><ItemCount stock={10}/></li>
                    <li><img src={props.img3}></img><ItemCount stock={10}/></li> */}
        </div>
    )
}

export default ItemList
