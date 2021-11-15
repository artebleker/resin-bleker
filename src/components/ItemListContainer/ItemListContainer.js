import React from 'react'
import ItemListContainerText from '../ItemListContainerText/ItemListContainerText'
import AddToCart from '../AddToCart/AddToCart'
import './ItemListContainer.css'
const ItemListContainer = () => {
    return (
        <>
        <div className="ItemListContainer container">
<h1>Sakura Resin</h1>
<ItemListContainerText id="scrollspyHeading1" title="Quien soy?" text="
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nisi inventore reprehenderit amet, architecto odio quidem laboriosam! Autem at sunt ipsa molestias asperiores consequatur nostrum officia, porro facere iure fugit.
Recusandae debitis sunt ex aperiam hic provident, facere doloribus nam. Culpa architecto provident nam nemo dolorum error deleniti quos. Itaque incidunt impedit autem est eos aperiam accusamus, sint fugiat veniam.
Est, ducimus quae doloribus optio vero explicabo consectetur quidem assumenda, mollitia dolor commodi enim laborum vitae cupiditate consequuntur delectus nobis! Earum vero et quae facilis qui dolores, consectetur voluptates quos." product={false}/>
<ItemListContainerText id="scrollspyHeading2" title="Mascotas" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nisi inventore reprehenderit amet, architecto odio quidem laboriosam! Autem at sunt ipsa molestias asperiores consequatur nostrum officia, porro facere iure fugit." product={true}/>
<ItemListContainerText id="scrollspyHeading3" title="Llaveros" text="Recusandae debitis sunt ex aperiam hic provident, facere doloribus nam. Culpa architecto provident nam nemo dolorum error deleniti quos. Itaque incidunt impedit autem est eos aperiam accusamus, sint fugiat veniam." product={true}/>
<ItemListContainerText id="scrollspyHeading4" title="Articulos" text="Est, ducimus quae doloribus optio vero explicabo consectetur quidem assumenda, mollitia dolor commodi enim laborum vitae cupiditate consequuntur delectus nobis! Earum vero et quae facilis qui dolores, consectetur voluptates quos." product={true}/>
        </div>
       
       <AddToCart/>
    </>
    )
}

export default ItemListContainer
 