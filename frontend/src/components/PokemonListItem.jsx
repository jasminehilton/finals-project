import React from "react";
import "../styles/PokemonListItem.css"
import capitalizeFirstLetter from "../helpers/capitalizeFirstLetter";

const PokemonListItem = ({ pokemon, onDisplayPokemonModal }) => {
  const officialArtworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  return (
    <div className="pokemon-display">
      <div className="pokemon-list__item">
        <h5 className="pokemon-id">No.{pokemon.id}</h5>
        <div className="pokemon-list__image-name">
          <img
            className="pokemon-list__image"
            src={officialArtworkUrl}
            alt={pokemon.name}
            onClick={() => onDisplayPokemonModal(pokemon)}
          />
          <p className="pokemon-name">{capitalizeFirstLetter(pokemon.name)}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonListItem;