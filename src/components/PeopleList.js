import { GoHeart, GoHeartFill } from 'react-icons/go';

export const PeopleList = ({ starWarsChars, handleToggleFavourite }) => (
  <>
    <h3 className="p-5 text-xl lg:text-4xl text-yellow-500 font-bold flex justify-center">
      Star Wars Characters
    </h3>
    <div className="mx-10 text-yellow-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {starWarsChars.map((starWarsChar) => (
        <div
          key={`start-wars-character${starWarsChar.name}`}
          className="relative cursor-pointer"
        >
          <div className="p-5 bg-white/10 backdrop-filter backdrop-blur-sm shadow-xl rounded-lg">
            <h4 className="text-lg lg:text-xl flex justify-center">
              {starWarsChar.name}
            </h4>
            <div>Height: {starWarsChar.height} cm</div>
            <div>Eye color: {starWarsChar.eye_color}</div>
            <div>Hair color: {starWarsChar.hair_color}</div>
          </div>
          <div
            className={`absolute inset-0 text-yellow-500 flex items-center justify-end rounded-lg hover:bg-amber-200 opacity-0 hover:opacity-60 ${
              starWarsChar.isFavourite ? 'opacity-100' : ''
            }`}
            onClick={() => handleToggleFavourite(starWarsChar.name)}
          >
            {starWarsChar.isFavourite ? (
              <GoHeartFill className="text-3xl mr-10" />
            ) : (
              <GoHeart className="text-3xl mr-10" />
            )}
          </div>
        </div>
      ))}
    </div>
  </>
);
