import {useEffect, useState} from "react";
import axios from "axios";
import {IconSearch} from "@tabler/icons-react";

const Pokemons = () => {

    const [allPokemons, setAllPokemons] = useState([])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=898")
            .then(({data}) => setAllPokemons(data.results))
            .catch((err) => console.log(err));
    }, []);

    return <section>
        <form>
            <div>
                <input type="text" placeholder="Search your pokemon" />
                <button>
                    <IconSearch />
                </button>
            </div>
        </form>
    </section>;
};

export default Pokemons;