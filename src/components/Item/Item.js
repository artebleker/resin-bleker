import React from 'react'

const Item = (props) => {
    return (
        <div id={props.itemId}>
            <h3>{props.itemTitle}</h3>
           <a> <img src={props.itemImg} width="310px" height="410px"></img></a>
           <h4>{props.itemPrice}</h4>
        </div>
    )
}

export default Item
 