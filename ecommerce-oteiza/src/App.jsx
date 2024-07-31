import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./page/itemListContainer/ItemListContainer";
import Cart from "./page/cart/Cart";
import ItemDetailContainer from "./page/itemDetailContainer/ItemDetailContanier";
import Layout from "./components/layout/Layout";
import { CartContextProvider } from "./context/CartContext";
import CheckoutFormik from "./page/checkoutFormik/CheckoutFormik";
import Checkout from "./page/checkout/Checkout";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors position="bottom-right" duration={3000} />
      <CartContextProvider>
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
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
