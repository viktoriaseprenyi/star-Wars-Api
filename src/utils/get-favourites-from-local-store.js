export const getFavouritesFromLocaleStore = () => {
  const favouritesFromLocalStorage = localStorage.getItem('favourites');
  return favouritesFromLocalStorage || [];
};
