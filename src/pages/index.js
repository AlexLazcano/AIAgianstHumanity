import Card from '@/components/card/card';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import Header from '@/components/header/header';
import PlayerList from '@/components/playerList/playerList';
import CardList from '@/components/cardList/cardList';


const Index = () => {
  const [connected, setConnected] = useState(false);
  const [ready, setReady] = useState(false);
  const [socket, setSocket] = useState(null);
  const [players, setPlayers] = useState([])
  const [cards, setCards] = useState([])

  const onClickConnect = () => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);
  };

  const onClickDisconnect = () => {
    if (socket) {
      socket.disconnect();
      setCards([]);
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

  const onSubmitWhiteCard = (text) => {
    console.log(text);
    socket.emit('submitCard', text)
    
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
      });

      socket.on('getWhiteCards', (cards) => {
        console.log(cards);
        setCards(cards);
      })


      return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('playerList');
        socket.off('getWhiteCards');
      };
    }
  }, [socket]);

  return (
    <>
    <Header connectFunc={onClickConnect} dcFunc={onClickDisconnect} notReady={onNotReady} ready={onReady} readyBool={ready}/>
    <div>
      {connected ? <p>Connected to the server</p> : <p>Disconnected from the server</p>}

      <PlayerList players={players} />

      <Card isBlack={true} >"The night was dark, the room was silent, and all I could see were two glowing red eyes. It was then that I realized, I had accidentally adopted a _____." </Card>

      <CardList cards={cards} submitCard={onSubmitWhiteCard} />
    </div>

    </>
    );
};

export default Index;
