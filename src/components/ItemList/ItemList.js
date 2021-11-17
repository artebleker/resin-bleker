import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
    return (
        <div>
             <ul>         
             {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} title={item.title} price={item.price} stock={item.stock} photo={item.photo}/>)
            : <p>Cargando...</p>
        }
                       
                </ul>
           
        </div>
    )
}

export default ItemList


