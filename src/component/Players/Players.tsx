import React, { use } from 'react';
import type { Tplayers } from './Tplayers';

type Promisetype = {
    playersPromise: Promise<Tplayers[]>
}

    const Players = ({playersPromise}: Promisetype) => {
    console.log(playersPromise);
    const players = use(playersPromise);
    console.log(players);
    
    return (
        <div>
            
        </div>
    );
};

export default Players;