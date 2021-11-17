import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
    <h1>Sakura Resin</h1>
<Routes>
  <Route path='/' element={<ItemListContainer />} />
  <Route path='/category/:categoryId' element={<ItemListContainer />} />
  <Route path='/product/:productId' element={<ItemDetailContainer />} />
</Routes>

      
      </BrowserRouter>
    </>
  );
}

export default App;
