import CounterContainer from "../../components/counter/CounterContainer";
import "./itemDetailStyles.css";

const ItemDetail = ({ item, onAdd }) => {
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
              <h2 className="texto-detail">{item.title}</h2>
            </h2>
            <h2 style={{ fontFamily: "Poppins" }}>
              <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
              <h2 className="texto-detail"> {item.description}</h2>
            </h2>
            <h2 style={{ fontFamily: "Poppins" }}>
              <span style={{ fontSize: "23px" }}>Precio:</span>{" "}
              <h2 className="texto-detail">${item.price}.</h2>
            </h2>
          </div>
        </div>
        <CounterContainer onAdd={onAdd} />
      </div>
    </>
  );
};

export default ItemDetail;
