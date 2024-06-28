import { ProductCard } from "../../components/productCard/ProductCard";
import "./itemListStyles.css";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="item-list-style">
      {items.map((elemento) => {
        return (
          <ProductCard
            key={elemento.id}
            title={elemento.title}
            description={elemento.description}
            price={elemento.price}
            id={elemento.id}
            img={elemento.img}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
