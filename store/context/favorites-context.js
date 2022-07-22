import { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext({
  favoriteMealIds: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
});

export const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  const addFavorite = (id) => {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  };
  const removeFavorite = (id) => {
    setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => {
      return (
        mealId !== id
      )
    }));
  };

  return (
    <FavoritesContext.Provider value={{ favoriteMealIds, addFavorite, removeFavorite }}>{children}</FavoritesContext.Provider>
  );
}

export const useFavoritesContext = () => useContext(FavoritesContext);
