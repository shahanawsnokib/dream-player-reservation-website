import React from "react";
import type { Tplayers } from "./Tplayers";
const AvailablePlayers = ({ Players }: { Players: Tplayers[] }) => {
  console.log(Players, "from available players");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Players.map((player) => {
        return (
         
            
          <div className="card bg-base-100 w-96 shadow-sm border-2 border-gray-300 mb-4">
            <figure>
              <img className="w-90 h-64 object-cover border-2 m-2 rounded-2xl"  src={player.PlayerImage}
                alt={player.playername}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{player.playername}</h2>
              
              <div className="flex items-center justify-between">
                <p>Origin: {player.Origin}</p>
                <button className="btn text-black" disabled>{player.PlayerType}</button>
              </div>
              <div>
                <p>Rating</p>
                <div className="flex items-center justify-between">
                    <p>Batting Style: {player.BattingStyle}</p>
                    <p>Bowling Style: {player.bowlingStyle}</p>
                </div>
                 <div className="flex items-center justify-between">
                    <p>Price: ${player.price}</p>
                    <button className="btn">Choose Player</button>
                 </div>
              </div>
            </div>
          </div>



           
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
