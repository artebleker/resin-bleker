import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainerText.css'

const itemFetch = (time, task) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (true) { //para correjir
                res(task);
            } else {
                rej("Error en itemFetch");
            }
        }, time);
    });
}



const {data} = require ('../data')
const ItemListContainerText = (props) => {

    const [datos, setDatos] = useState([])
    
    useEffect(()=> {
       
itemFetch(2000, data)
    .then(res => setDatos(res))
    .catch(rej => console.log(rej))

    },[])



    return (
        <div id={props.id} className="container-fluid ItemListContainerText">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
                { props.product&& 
           <>
           {/* <ItemList id={props.title + "ItemList"}/> */}
           <ItemList items={datos}/>
           
             </>
           
                }
        </div>
    )
}

export default ItemListContainerText
 