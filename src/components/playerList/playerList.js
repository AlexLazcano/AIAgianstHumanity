import React from 'react'
import { StyledPlayers } from './styles';

const PlayerList = ({ players, czar, playerId }) => {
    // console.log(players, czar, playerId);
    return (
        <StyledPlayers>
            <h2>Players</h2>
            <ul>
                {players.map((player, index) => (
                <li key={index} className={czar == player.id ? "czar" : ""}>{playerId == player.id ? "me: ": ""} {player.id} - {player.ready ? "Ready" : "Not" }</li>
            ))}
            </ul>
        </StyledPlayers>
    )
}

export default PlayerList