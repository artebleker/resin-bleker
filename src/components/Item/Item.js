import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, title, price, photo}) => {
    return (
        <div>
            <h3>{title}</h3>
           <a> <img src={photo} width="310px" height="410px"></img></a>
           <h4>$ {price}</h4>
           <Link to={`/item/${id}`}>Detalles</Link>
        </div>
    )
}

export default Item
 