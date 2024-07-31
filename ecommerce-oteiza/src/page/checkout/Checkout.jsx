import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../fireBaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  let total = getTotalPrice();

  const envioDeFormulario = (event) => {
    event.preventDefault();
    let order = {
      buyer: user,
      items: cart,
      total: total,
    };

    let ordersCollection = collection(db, "orders");
    let productCollection = collection(db, "products");
    cart.forEach((elemento) => {
      let refDoc = doc(productCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });

    addDoc(ordersCollection, order)
      .then((res) => {
        setOrderId(res.id);
        toast.success(`Compra realizada con exito. Tu ticket es: ${res.id}`);
      })
      .catch()
      .finally(() => {
        clearCart();
        navigate("/");
      });
  };

  const capturarData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1
        style={{
          fontFamily: "Poppins",
          fontSize: "1.5rem",
          display: "flex",
          justifyContent: "center",
          paddingTop: "1rem",
          fontWeight: "400",
        }}
      >
        Registre sus datos aqui.
      </h1>

      <form
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexDirection: "column",
          marginTop: "2rem",
        }}
        onSubmit={envioDeFormulario}
      >
        <input
          style={{
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingRight: "90px",
            paddingLeft: "5px",
            justifyContent: "flex-start",
            border: "2px solid #fff",
            borderColor: "#fff",
            backgroundColor: "#fff",
            borderRadius: "5px",
            fontFamily: "Poppins",
            fontSize: "1rem",
          }}
          onMouseOver={(e) => (e.currentTarget.style.borderColor = "#dc143c")}
          onMouseOut={(e) => (e.currentTarget.style.borderColor = "#fff")}
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={capturarData}
          name="nombre"
        />
        <input
          style={{
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingRight: "90px",
            paddingLeft: "5px",
            justifyContent: "flex-start",
            border: "2px solid #fff",
            borderColor: "#fff",
            backgroundColor: "#fff",
            borderRadius: "5px",
            fontFamily: "Poppins",
            fontSize: "1rem",
          }}
          onMouseOver={(e) => (e.currentTarget.style.borderColor = "#dc143c")}
          onMouseOut={(e) => (e.currentTarget.style.borderColor = "#fff")}
          type="text"
          placeholder="Ingresa tu email"
          name="email"
          onChange={capturarData}
        />
        <input
          style={{
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingRight: "90px",
            paddingLeft: "5px",
            justifyContent: "flex-start",
            border: "2px solid #fff",
            borderColor: "#fff",
            backgroundColor: "#fff",
            borderRadius: "5px",
            fontFamily: "Poppins",
            fontSize: "1rem",
          }}
          onMouseOver={(e) => (e.currentTarget.style.borderColor = "#dc143c")}
          onMouseOut={(e) => (e.currentTarget.style.borderColor = "#fff")}
          type="text"
          placeholder="Ingresa tu telefono"
          name="telefono"
          onChange={capturarData}
        />

        <button
          style={{
            padding: "10px 40px",
            fontFamily: "Poppins",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "2px solid #fff",
            borderColor: "#fff",
            backgroundColor: "#fff",
          }}
          onMouseOver={(e) => (e.currentTarget.style.borderColor = "#dc143c")}
          onMouseOut={(e) => (e.currentTarget.style.borderColor = "#fff")}
        >
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
