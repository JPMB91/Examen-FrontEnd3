import PropTypes from "prop-types";
import { createContext, useEffect, useReducer } from "react";
import { getFavoritesFromStorage } from "../Components/utils/getFavorites";
import { reducer } from "./reducer";

const initialState = {
  theme: "light",
  favorites: getFavoritesFromStorage(),
  dentists: [],
};

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setFavorites = (favorites) =>
    dispatch({ type: "SAVE_FAVORITES", payload: favorites });
  const changeTheme = () => dispatch({ type: "CHANGE_THEME" });

  const setDentists = (dentists) =>
    dispatch({ type: "SET_DENTISTS", payload: dentists });

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const getDentists = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.log("Error getting dentists from api");
        }
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getDentists();
  }, []);
  return (
    <ContextGlobal.Provider
      value={{ state, changeTheme, setFavorites, setDentists }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};
