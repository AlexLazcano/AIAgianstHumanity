import Card from '@/components/card/card';
import { useSocket } from '@/lib/socket';
import { useEffect } from 'react';

const Index = () => {
  const socket = useSocket('http://localhost:3000'); // Provide the URL of your Socket.io server
  useEffect(() => {
    // Add event listeners or emit events using the socket object
    socket.on('connect', () => {
      console.log('Connected to Socket.io server');
    });

    return () => {
      // Clean up event listeners if necessary
      socket.off('connect');
    };
  }, [socket]);


  return (
    <div>
      <Card />
    </div>
  )
}

export default Index