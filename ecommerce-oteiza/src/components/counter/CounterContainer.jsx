import { useState } from "react";
import { Counter } from "./Counter";

const CounterContainer = ({ onAdd, stock, initialValue = 1 }) => {
  const [contador, setContador] = useState(initialValue);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("Stock maximo");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Minimo");
    }
  };

  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};

export default CounterContainer;
