import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./page/itemListContainer/ItemListContainer";
import Cart from "./page/cart/Cart";
import ItemDetailContainer from "./page/itemDetailContainer/ItemDetailContanier";
import Layout from "./components/layout/Layout";
import Checkout from "./page/checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        <Route path="*" element={<h1>error 404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
