import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  console.log("favorites"+state.favorites);

  return (
    <div className={state.theme === "light" ? "light": "dark"}>
      <h1>Favorite Dentists</h1>
      <div className="card-grid">
        {state.favorites.map((fav) => {
          return (
            <Card
              key={fav.id}
              name={fav.name}
              username={fav.username}
              id={fav.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favs;
