//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* <ul>
        <li> */}
          <Link to="/">Home</Link>
        {/* </li>
        <li> */}
          <Link to="/contact">Contacto</Link>
        {/* </li>
        <li> */}
          <Link to="/favs">Favoritos</Link>
        {/* </li>
      </ul> */}

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  );
};

export default Navbar;
