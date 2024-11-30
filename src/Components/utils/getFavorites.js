export const getFavoritesFromStorage = () =>{
  const localData = localStorage.getItem("favorites");
  return localData ? JSON.parse(localData) : [];
}

export const setFavoritesStorage = (favorites) =>{
localStorage.setItem("favorites", JSON.stringify(favorites))
}