import Card from '@/components/card/card';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import PlayerList from '@/components/playerList/playerList';

const Index = () => {
  const [connected, setConnected] = useState(false);
  const [socket, setSocket] = useState(null);
  const [players, setPlayers] = useState([])

  const onClickConnect = () => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);
  };

  const onClickDisconnect = () => {
    if (socket) {
      socket.disconnect();
      setSocket(null);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        setConnected(true);
      });
      socket.on('disconnect', () => {
        setConnected(false);
        setPlayers([]);
      });

      socket.on('playerList', (playerList) => {
        setPlayers(playerList);
      });

      return () => {
        socket.off('connect');
        socket.off('disconnect');
      };
    }
  }, [socket]);

  return (
    <div>
      <Card />

      <button onClick={onClickConnect} disabled={connected}>Connect</button>
      <button onClick={onClickDisconnect} disabled={!connected}>Disconnect</button>

      {connected ? <p>Connected to the server</p> : <p>Disconnected from the server</p>}

      <PlayerList players={players} />
    </div>
  );
};

export default Index;
