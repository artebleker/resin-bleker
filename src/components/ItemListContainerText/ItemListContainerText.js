import React from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainerText.css'
const ItemListContainerText = (props) => {
    return (
        <div id={props.id} className="container-fluid ItemListContainerText">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
                { props.product&& 
           <>
           <ItemList id={props.title + "ItemList"} img1="#" img2="#" img3="#"/>
           
             </>
           
                }
        </div>
    )
}

export default ItemListContainerText
 