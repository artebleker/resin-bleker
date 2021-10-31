import React from 'react'

const ItemListContainerText = (props) => {
    return (
        <div id={props.id} className="container-fluid">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default ItemListContainerText
