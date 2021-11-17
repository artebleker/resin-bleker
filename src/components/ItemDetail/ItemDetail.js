import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({item}) =>{
    return(
    <>
{
    item && item.photo?
<div>
    <h2>{item.title}</h2>
<img src={item.photo}></img>
<h3>{item.price}</h3>
<h3>{item.stock}</h3>
<ItemCount stock={item.stock}/>
</div>
: <p>Cargando...</p>
}

    </>
    
    )}

export default ItemDetail