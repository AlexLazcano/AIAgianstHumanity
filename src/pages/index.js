import Card from '@/components/card/card';
// import { useSocket } from '@/lib/socket';
import { io } from 'socket.io-client';
import { useEffect } from 'react';

const Index = () => {
  
  const socket = io('http://localhost:3001');
  // console.log(socket);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
    });
  
    return () => {
      socket.off('connect');

    }
  }, [])
  


  return (
    <div>
      <Card />
    </div>
  )
}

export default Index