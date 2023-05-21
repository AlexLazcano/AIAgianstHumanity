import Card from '@/components/card/card';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import PlayerList from '@/components/playerList/playerList';

const Index = () => {
  const [connected, setConnected] = useState(false);
  const [ready, setReady] = useState(false);
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

  const onReady = () => {
    socket.emit('ready');
    setReady(true);
  }

  const onNotReady = () => {
    socket.emit('notReady');
    setReady(false);
  }

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
        // update score in here too
      });

      socket.on("sendCards", (cards) => {

      });

      socket.on("czar", (id) => {
        // czar is id
      })

      socket.on("gameEnd", (winners) => {
        var msg = "";

        for (var i = 0; i < winners.length; i++) {
          msg = msg + winners[i];
          if (i != winners.length - 1)
            msg = msg + " & ";
        }

        console.log("The winner(s) is: " + msg);
      })

      socket.on("getBlackCard", (msg) => {
        console.log(msg);
      });

      socket.on("getWhiteCards", (msg) => {
        console.log(msg);
      });

      return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('playerList');
      };
    }
  }, [socket]);

  return (
    <div>
      <Card />

      <button onClick={onClickConnect} disabled={connected}>Connect</button>
      <button onClick={onClickDisconnect} disabled={!connected}>Disconnect</button>
      <button onClick={ready ? onNotReady : onReady}>
        {ready ? "Cancel Ready" : "Ready up"}
      </button>

      {connected ? <p>Connected to the server</p> : <p>Disconnected from the server</p>}

      <PlayerList players={players} />
    </div>
  );
};

export default Index;
