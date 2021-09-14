import './Pokecard.css'

const Pokecard = ({pokemon}) => (
    <div className="Pokecard">
        <h4 className="Pokecard-name">{pokemon.name}</h4>
        <img className="Pokecard-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
        <ul>
            <li>Type: {pokemon.type}</li>
            <li>Exp: {pokemon.base_experience}</li>
        </ul>
    </div>
);


export default Pokecard;
