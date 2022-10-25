import React from 'react';
import { v4 } from 'uuid';
import Word from './Word';

function Titre(props) {
    const words = props.titre.split(" ");

    return (
        <span>
            {words.map(w => <Word key={v4()} mot={w}/> )}
        </span>
    );
}

export default Titre;