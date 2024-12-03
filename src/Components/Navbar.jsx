//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../context/global.context";

const Navbar = () => {
  const { state, changeTheme } = useContext(ContextGlobal);

  useEffect(() => {
    if (state.theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [state.theme]);

  const handleThemeChange = () => {
    changeTheme();
  };

  return (
    <nav className={state.theme === "light" ? "light" : "dark"}>
      <img src="/images/DH.png" alt="dh logo" />
      <div className="nav-links">
        {/* <ul>
        <li> */}
        <Link to="/">Home</Link>
        {/* </li>
        <li> */}
        <Link to="/contact">Contact</Link>
        {/* </li>
        <li> */}
        <Link to="/favs">Favorites</Link>
        {/* </li>
      </ul> */}

        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={handleThemeChange}>Change theme</button>
      </div>
    </nav>
  );
};

export default Navbar;
