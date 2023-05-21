import React from 'react'

const PlayerList = ({ players }) => {
    console.log(players);
    return (
        <div>
            <h2>Players</h2>
            <ul>
                {players.map((player, index) => (
                <li key={index}>{player.id}</li>
            ))}
            </ul>
        </div>
    )
}

export default PlayerList