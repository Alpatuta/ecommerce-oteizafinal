import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../fireBaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { toast } from "sonner";

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const [item, setItem] = useState({});

  let initialValue = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let refDoc = doc(productsCollection, id);

    let getProduct = getDoc(refDoc);
    getProduct.then((res) => setItem({ ...res.data(), id: res.id }));
  }, [id]);

  const onAdd = (quantity) => {
    let objetoFinal = { ...item, quantity: quantity };
    addToCart(objetoFinal);

    toast.success("Producto Agregado Correctamente");
  };

  return <ItemDetail item={item} onAdd={onAdd} initialValue={initialValue} />;
};

export default ItemDetailContainer;
