import { setFavoritesStorage } from "../Components/utils/getFavorites";

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    case "SAVE_FAVORITES":
      setFavoritesStorage(action.payload);
      return { ...state, favorites: action.payload };

    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };

    default:
      console.log("Accion no válida");
      return state;
  }
};
