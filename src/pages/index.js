import Card from '@/components/card/card';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';

const Index = () => {
  const [connected, setConnected] = useState(false);
  const [socket, setSocket] = useState(null);

  const onClickConnect = () => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    newSocket.emit("getBlackCard", null);
    newSocket.on("sendBlackCard", (msg) => {
      console.log(msg);
    })

    newSocket.emit("getWhiteCards", null);
    newSocket.on("sendWhiteCards", (msg) => {
      console.log(msg);
    })
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

      <button onClick={onClickConnect}>Connect</button>
      <button onClick={onClickDisconnect}>Disconnect</button>

      {connected ? <p>Connected to the server</p> : <p>Disconnected from the server</p>}
    </div>
  );
};

export default Index;
