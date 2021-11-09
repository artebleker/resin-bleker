import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import AddToCart from "./components/AddToCart/AddToCart";
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      {/* <AddToCart/> */}
    </>
  );
}

export default App;
