import CounterContainer from "../../components/counter/CounterContainer";

const ItemDetail = ({ item }) => {
  return (
    <div style={{ color: "white" }}>
      <h2>{item.title}</h2>
      <h3>{item.price}</h3>
      <CounterContainer />
    </div>
  );
};

export default ItemDetail;
