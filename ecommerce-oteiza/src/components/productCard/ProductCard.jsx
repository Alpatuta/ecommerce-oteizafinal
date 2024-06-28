import { Link } from "react-router-dom";
import "./productCardStyles.css";

export const ProductCard = ({ title, description, price, id, img }) => {
  return (
    <Link to={`/itemDetail/${id}`}>
      <div className="product-card">
        <img src={img} alt="" className="img-product-card" />
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h3>{price}</h3>
      </div>
    </Link>
  );
};
