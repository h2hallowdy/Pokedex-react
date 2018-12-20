import React from 'react';
import PokeCell from './PokeCell';

import './styles/PokeList.css';
import './styles/PokeCell.css';

import { pokeClasses } from '../pokeClasses';

const PokeList = ({ handleOnClick }) => {
    const cells = pokeClasses.map(pokeClass => {
    
        return (
            <PokeCell
                key={pokeClass.id}
                pokeClass={pokeClass}
                handleOnClick={handleOnClick}
            />
        );
    });
    return (
        <section className="poke-list">
            { cells }
        </section>
    )
}
export default PokeList;