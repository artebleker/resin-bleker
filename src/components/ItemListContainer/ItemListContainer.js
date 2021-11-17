
import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router'
import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'
import functionFetch from '../../functionFetch'
const {data} = require('../data')
const ItemListContainer = () => {

    const [datos, setDatos] = useState([])
    const {categoryId} = useParams()

useEffect(()=>{

functionFetch(2000, data.filter(product => {
    if(categoryId === undefined) return product
    return product.category === parseInt(categoryId)
}))
    .then(res => setDatos(res))
    .catch(err => console.log(err))
}, [datos])


    return (
        <>
        <div className="ItemListContainer container">

<ItemList items={datos}/>

        </div>
       
     
    </>
    )
}

export default ItemListContainer
 