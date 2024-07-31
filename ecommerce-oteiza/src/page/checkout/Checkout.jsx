import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../fireBaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useFormik } from "formik";
import * as Yup from "yup";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  const formik = useFormik({
    initialValues: { nombre: "", email: "", numero: "" },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "Mínimo 5 caracteres")
        .max(30, "Máximo 30 caracteres"),
      email: Yup.string()
        .email("El email NO cumple con los parámetros obligatorios")
        .required("Este campo es obligatorio"),
      numero: Yup.string().required("Este campo es obligatorio"),
    }),
    onSubmit: (data) => {
      handleOrderSubmission(data);
    },
    validateOnChange: false,
  });

  let total = getTotalPrice();

  const handleOrderSubmission = (userData) => {
    let order = {
      buyer: userData,
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
        toast.success(`Compra realizada con éxito. Tu ticket es: ${res.id}`);
      })
      .catch((error) => {
        toast.error("Hubo un error al procesar tu compra. Inténtalo de nuevo.");
      })
      .finally(() => {
        clearCart();
        navigate("/");
      });
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
        Registre sus datos aquí.
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
        onSubmit={formik.handleSubmit}
      >
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nombre}
          name="nombre"
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
        />
        {formik.touched.nombre && formik.errors.nombre ? (
          <div style={{ color: "red" }}>{formik.errors.nombre}</div>
        ) : null}

        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          name="email"
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
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}

        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.numero}
          name="numero"
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
          placeholder="Ingresa tu teléfono"
        />
        {formik.touched.numero && formik.errors.numero ? (
          <div style={{ color: "red" }}>{formik.errors.numero}</div>
        ) : null}

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
          type="submit"
        >
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
