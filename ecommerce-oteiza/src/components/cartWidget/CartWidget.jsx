import { MdOutlineAddShoppingCart } from "react-icons/md";

const CartWidget = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <MdOutlineAddShoppingCart size={30} />
      <p>4</p>
    </div>
  );
};

export default CartWidget;
