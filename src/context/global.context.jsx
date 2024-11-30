import { createContext, useReducer } from "react";
import { getFavoritesFromStorage, setFavoritesStorage } from "../Components/utils/getFavorites";
import { getDentists } from "../Components/utils/getDentists";


export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(initialState);

const reducer = (state, action) =>{

  switch(action.type){
    case "CHANGE_THEME":
      return {...state, theme: state.theme === "light" ?  "dark" : "light"};

    case "SAVE_FAVORITES":
      setFavoritesStorage(action.payload)
      return { ...state, data: action.payload}
  }

}

const dentists = getDentists();


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, {}, getFavoritesFromStorage)

  const setFavorites = (favorites) => dispatch({type :"SAVE_FAVORITES", payload:favorites})
  const changeTheme = () => dispatch({type: "CHANGE_THEME"})
  return (
    <ContextGlobal.Provider value={{state, changeTheme, setFavorites}}>
      {children}
    </ContextGlobal.Provider>
  );
};
