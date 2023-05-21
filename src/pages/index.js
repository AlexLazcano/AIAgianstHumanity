import Card from '@/components/card/card';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import Header from '@/components/header/header';
import PlayerList from '@/components/playerList/playerList';
import CardList from '@/components/cardList/cardList';
import { styled } from 'styled-components';


const Container = styled.div`

  display: flex;
  margin-bottom: 20px;
`


const Index = () => {
  const [connected, setConnected] = useState(false);
  const [ready, setReady] = useState(false);
  const [socket, setSocket] = useState(null);
  const [players, setPlayers] = useState([])
  const [cards, setCards] = useState([])
  const [currentBlackCard, setCurrentBlackCard] = useState(null)
  const [submittedCards, setSubmittedCards] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [czar, setCzar] = useState(null)

  const onClickConnect = () => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);
  };

  // TODO:add function for if server stops running


  const onClickDisconnect = () => {
    if (socket) {
      socket.disconnect();
      setCards([]);
      setSocket(null);
      setCurrentBlackCard(null);
      setSubmittedCards([]);
      setHasSubmitted(false);
      setCzar(null);
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
    const newCards = cards.filter(card => card != text);
    setCards(newCards);
    setHasSubmitted(true);
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

      socket.on('getBlackCard', (card) => {
        console.log(card);
        setCurrentBlackCard(card);
      })
      socket.on('sendSubmittedCards', (cards) => {
        console.log(cards);
        setSubmittedCards(cards);

      })

      socket.on('czar', (id) => {
        console.log(id);
        setCzar(id);
        
      })



      return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('playerList');
        socket.off('getWhiteCards');
        socket.off('getBlackCard');
      };
    }
  }, [socket]);

  const isCzar = czar == socket?.id
  console.log("isczar",isCzar);

  return (
    <>
    <Header connectFunc={onClickConnect} dcFunc={onClickDisconnect} notReady={onNotReady} ready={onReady} readyBool={ready}/>
    <div>
      {connected ? <p>Connected to the server</p> : <p>Disconnected from the server</p>}

        

        <Container>

          <Card isBlack={true} >{currentBlackCard ? currentBlackCard : "Waiting to begin Game"}</Card>
          <CardList cards={submittedCards} submitCard={() => null} disabled={isCzar} />
        </Container>

    <Container>
    <PlayerList players={players} czar={czar} playerId={socket?.id} />
        <CardList cards={cards} submitCard={onSubmitWhiteCard} disabled={hasSubmitted || isCzar} />
    </Container>
      </div>

    </>
  );
};

export default Index;
