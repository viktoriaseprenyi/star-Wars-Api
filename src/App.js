import { useState } from 'react';

import { PeopleList } from './components/PeopleList';
import { useFetchCharacters } from './hooks/use-fetch-characters';
import { enhanceCharacter } from './utils/enhance-character';
import { getFavouritesFromLocaleStore } from './utils/get-favourites-from-local-store';

function App() {
  const { errorMessage, isLoading, starWarsCharacters } = useFetchCharacters();
  const [favourites, setFavourites] = useState(getFavouritesFromLocaleStore());

  const enhancedStarWarsCharacters = starWarsCharacters.map(
    enhanceCharacter(favourites)
  );

  const handleToggleFavourite = (name) => {
    const newFavourites = favourites.includes(name)
      ? favourites.filter((fav) => fav !== name)
      : [...favourites, name];

    localStorage.setItem('favourites', newFavourites);
    setFavourites(newFavourites);
  };

  return (
    <div>
      {errorMessage && (
        <div className="p-8">
          <p className="text-white text-center">{errorMessage}</p>
        </div>
      )}

      {!errorMessage && isLoading ? (
        <div className="p-8">
          <p className="text-white text-center">Loading...</p>
        </div>
      ) : (
        <PeopleList
          starWarsChars={enhancedStarWarsCharacters}
          handleToggleFavourite={handleToggleFavourite}
        />
      )}
    </div>
  );
}

export default App;
