import React, { use } from 'react';
import type { Tplayers } from './Tplayers';
import AvailablePlayers from './AvailablePlayers';

type Promisetype = {
    playersPromise: Promise<Tplayers[]>
}

    const Players = ({playersPromise}: Promisetype) => {
    console.log(playersPromise);
    const players = use(playersPromise);
    console.log(players);
    
    return (
        <div className="container mx-auto my-6">
            

       <div className="flex items-center justify-between mb-4">
             <h2 className="text-2xl font-bold mb-4">Available Players</h2>

          <div className='flex gap-2'>
              <button className="btn btn-success">Success</button>
               <button className="btn btn-warning">Warning</button>

          </div>
       </div>

            <AvailablePlayers Players={players} />
        </div>
    );
};

export default Players;