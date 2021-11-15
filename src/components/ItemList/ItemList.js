import React from 'react'
import Item from '../Item/Item'
import ItemCount from '../ItemCount/ItemCount'



const ItemList = ({items}) => {
    return (
        <div>
             <ul>         
             {
            items.length > 0
            ? items.map(item => <Item key={item.id} title={item.title} price={item.price} stock={item.stock} />)
            : <p>Cargando...</p>
        }
                        {/* <li id={props.id}> <Item itemImg={`${props.id}+1`}/><ItemCount stock={10}/></li>
                        <li> <Item itemImg={`${props.id}+2`}/><ItemCount stock={10}/></li>
                        <li> <Item itemImg={`${props.id}+3`}/><ItemCount stock={10}/></li> */}
                </ul>
           
        </div>
    )
}

export default ItemList


