import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import functionFetch from '../../functionFetch'
import {data} from '../data'
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {


const [datos, setDatos]=useState({})
const {idProduct} =useParams()

useEffect(()=>{
functionFetch(2000, data.find(item=> item.id === parseInt(idProduct)))
.then(res=> setDatos(res))
.catch(err => console.log(err))

},[])

    return (
        <div>
            <ItemDetail item={datos}/>
        </div>
    )
}

export default ItemDetailContainer
