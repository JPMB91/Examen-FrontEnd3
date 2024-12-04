//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../context/global.context";

const Navbar = () => {
  const { state, changeTheme } = useContext(ContextGlobal);

  const handleThemeChange = () => {
    changeTheme();
  };

  return (
    <nav className={state.theme === "light" ? " light" : "navegation dark"}>
      <img src="/images/DH.png" alt="dh logo" />
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favorites</Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={handleThemeChange}>Change theme</button>
      </div>
    </nav>
  );
};

export default Navbar;
