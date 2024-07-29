import { useState } from "react";

const Checkout = () => {
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });

  const [arrayCheckbox, setArrayCheckbox] = useState([]);

  const envioDeFormulario = (event) => {
    event.preventDefault();
  };

  const capturarData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSelect = (e) => {};

  const handleRadio = (e) => {};
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setArrayCheckbox([...arrayCheckbox, value]);
    } else {
      let newArr = arrayCheckbox.filter((el) => el !== value);
      setArrayCheckbox(newArr);
    }
  };

  return (
    <div>
      <h1>Aca va el formulario</h1>

      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={capturarData}
          name="nombre"
        />
        <input
          type="text"
          placeholder="Ingresa tu email"
          name="email"
          onChange={capturarData}
        />
        <input
          type="text"
          placeholder="Ingresa tu telefono"
          name="telefono"
          onChange={capturarData}
        />

        <select onChange={handleSelect}>
          <option label="uno" value={"one"} />
          <option label="dos" value={"two"} />
          <option label="tres" value={15} />
        </select>

        <label>casa</label>
        <input
          type="radio"
          name="entidad"
          onChange={handleRadio}
          value="casa"
        />
        <label>avion</label>
        <input
          type="radio"
          name="entidad"
          onChange={handleRadio}
          value="avion"
        />

        <label>rojo</label>
        <input type="checkbox" value={"rojo"} onChange={handleCheckbox} />
        <label>azul</label>
        <input type="checkbox" value={"azul"} onChange={handleCheckbox} />
        <label>verde</label>
        <input type="checkbox" value={"verde"} onChange={handleCheckbox} />
        <label>amarillo</label>
        <input type="checkbox" value={"amarillo"} onChange={handleCheckbox} />

        <button>enviar</button>
        <button type="button">cancelar</button>
      </form>
    </div>
  );
};

export default Checkout;
