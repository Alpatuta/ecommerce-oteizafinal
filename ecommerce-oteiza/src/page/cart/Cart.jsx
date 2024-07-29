import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import "./cartStyles.css";

const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar.",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        deleteProduct(id);
      }
    });
  };

  return (
    <div className="cart-main">
      {cart.map((elemento) => {
        return (
          <div className="cart-card" key={elemento.id}>
            <p>{elemento.title}</p>
            <p className="p-product-card">{elemento.quantity}</p>
            <p className="p-product-card-2">${elemento.price}</p>
            <Button
              variant="contained"
              onClick={() => handleDelete(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <p>Total: {total}</p>
      <div className="cart-button">
        {cart.length > 0 && (
          <Button variant="contained" onClick={clearCart}>
            Limpiar carrito
          </Button>
        )}

        <Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
