import React from 'react'
import './ItemListContainerText.css'
import ItemCount from '../ItemCount/ItemCount'
const ItemListContainerText = (props) => {
    return (
        <div id={props.id} className="container-fluid ItemListContainerText">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
                { props.img1&& 
           
                <ul>
                    <li><img src={props.img1}></img><ItemCount stock={10}/></li>
                    <li><img src={props.img2}></img><ItemCount stock={10}/></li>
                    <li><img src={props.img3}></img><ItemCount stock={10}/></li>
                   
                </ul>
           
                }
        </div>
    )
}

export default ItemListContainerText
