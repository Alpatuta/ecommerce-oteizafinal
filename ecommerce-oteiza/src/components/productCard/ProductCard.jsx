import { Link } from "react-router-dom";
import "./productCardStyles.css";

export const ProductCard = ({ title, description, price, id, img }) => {
  return (
    <Link to={`/itemDetail/${id}`}>
      <div className="product-card">
        <img src={img} alt="" className="img-product-card" />
        <h2 className="card-title">{title}</h2>
        <h3 className="card-description">{description}</h3>
        <h4 className="card-price">{price}</h4>
      </div>
    </Link>
  );
};
