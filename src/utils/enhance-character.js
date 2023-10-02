export const enhanceCharacter = (favourites) => (character) => ({
  ...character,
  isFavourite: favourites.includes(character.name),
});
