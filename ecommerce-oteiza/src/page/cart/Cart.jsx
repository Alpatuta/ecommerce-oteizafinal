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
          title: "Exito!",
          text: "Producto borrado.",
          icon: "success",
          timer: 1000,
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
              disableRipple
              sx={{
                bgcolor: "#dc143c",
                color: "#fff",
                textTransform: "none",
                fontFamily: "Poppins",
                fontSize: "1rem",
                marginTop: "0.5rem",
                borderRadius: "6px",
                "&:hover": { bgcolor: "#b11230" },
              }}
              variant="contained"
              onClick={() => handleDelete(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <p className="total-cart">Total: {total}</p>
      <div className="cart-button">
        {cart.length > 0 && (
          <Button
            disableRipple
            sx={{
              textTransform: "none",
              fontFamily: "Poppins",
              fontSize: "1rem",
              bgcolor: "#fff",
              color: "#000",
              borderRadius: "6px",
              borderColor: "#fff",
              borderWidth: "2px",
              borderStyle: "solid",
              "&:hover": { bgcolor: "#fff", borderColor: "#dc143c" },
              marginRight: "2rem",
            }}
            variant="contained"
            onClick={clearCart}
          >
            Limpiar carrito
          </Button>
        )}

        <Link to="/checkout">
          <Button
            sx={{
              textTransform: "none",
              fontFamily: "Poppins",
              fontSize: "0.9rem",
              bgcolor: "#fff",
              color: "#000",
              borderRadius: "6px",
              borderColor: "#fff",
              borderWidth: "2px",
              borderStyle: "solid",
              "&:hover": { bgcolor: "#fff", borderColor: "#dc143c" },
            }}
            variant="contained"
          >
            Finalizar compra
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
