import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({ nombre: "", email: "" });
  //Aqui deberan implementar el form completo con sus validaciones

  const handleChange = (e) => {
    setData(e.target.value);
  };
  return (
    <div>
      <form>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          value={data.nombre}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <label htmlFor="mensaje">Mensaje</label>
        {/* <input type="text" name="mensage" id="mensaje" /> */}
        <textarea name="mensaje" id="mensaje"></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
