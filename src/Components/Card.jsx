import { useContext } from "react";
import { ContextGlobal } from "../context/global.context";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  getFavoritesFromStorage,
} from "./utils/getFavorites";

const Card = ({ name, username, id }) => {
  const { state, setFavorites } = useContext(ContextGlobal);

  const addFav = () => {
    const newFavorite = { id, name, username };

    const currentFavorites = getFavoritesFromStorage();
    const favoriteExists = currentFavorites.some(
      (fav) => fav.id === newFavorite.id
    );

    if (!favoriteExists) {
      setFavorites([...state.favorites, newFavorite]);
    } else {
      //Si se vuelve a presionar el boton quita la card de favoritos
      const updatedFavorites = currentFavorites.filter(
        (fav) => fav.id !== newFavorite.id
      );
      setFavorites(updatedFavorites);
    }
  };

  //TODO classname para link: className={state.theme === "light" ? "light" : "dark"}
  return (
    <div className="card">
      <img src="../images/doctor.jpg" alt="doctor" />
      
      <Link  to={`/dentist/${id}`}>
        <h3>{name}</h3>
      </Link>
      <h3>{username}</h3>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  id: PropTypes.number,
};
