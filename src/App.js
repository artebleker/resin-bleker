import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
<Routes>
  <Route path='/holamundo' element={<p>Hola mundo</p>}/>
</Routes>

      <ItemListContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
