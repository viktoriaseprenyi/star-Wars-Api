import PeopleList from "./components/PeopleList";
import { useState, useEffect } from "react";

function App() {
    const [starWarsCharacters, setStarWarsCharacters] = useState([]);
    console.log(starWarsCharacters);

    useEffect(() => {
        async function fetchingSwCharacters() {
            let res = await fetch('https://swapi.dev/api/people/?format=json');
            let data = await res.json();
            setStarWarsCharacters(data.results);
        }
        fetchingSwCharacters();
    }, [])

    return <div>
        <PeopleList starWarsChars={starWarsCharacters} />
    </div>
}

export default App;