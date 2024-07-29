import CounterContainer from "../../components/counter/CounterContainer";
import "./itemDetailStyles.css";

const ItemDetail = ({ item, onAdd, initialValue }) => {
  return (
    <>
      <div>
        <div className={"containerItemDetail"}>
          <div className={"containerImage"}>
            <img src={item.img} alt="" />
          </div>

          <div className={"containerDetail"}>
            <h2 style={{ fontFamily: "Poppins" }}>
              <span style={{ fontSize: "23px" }}>Nombre:</span>{" "}
            </h2>
            <h3 className="texto-detail">{item.title}</h3>
            <h2 style={{ fontFamily: "Poppins" }}>
              <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
            </h2>
            <h3 className="texto-detail"> {item.description}</h3>
            <h2 style={{ fontFamily: "Poppins" }}>
              <span style={{ fontSize: "23px" }}>Precio:</span>{" "}
            </h2>
            <h3 className="texto-detail">${item.price}.</h3>
          </div>
        </div>
        <CounterContainer
          onAdd={onAdd}
          stock={item.stock}
          initialValue={initialValue}
        />
      </div>
    </>
  );
};

export default ItemDetail;
