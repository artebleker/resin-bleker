import React, { useState } from 'react'

const ItemCount = (props) => {

    const [count, setCount]= useState(0)
    const increment = ()=> {
        if(count < props.stock)setCount(count+1)
    }
    const decrement = ()=> {
        if(count > 0) setCount(count-1)
    }

const addToCart = ()=>{
    if(count>0)console.log(count, "Productos agragados");
}

    return (
        <>
        <div>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </div>
        <button onClick={addToCart}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount
