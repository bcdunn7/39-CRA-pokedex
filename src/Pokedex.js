import Pokecard from "./Pokecard";
import './Pokedex.css'

const Pokedex = (props) => (
    <div className="Pokedex">
        <h2 className="Pokedex-heading">Pokedex</h2>
        <div className="Pokedex-container">
            {props.pokemon.map(p => <Pokecard pokemon={p}/>)}
        </div>
    </div>
);


export default Pokedex;
