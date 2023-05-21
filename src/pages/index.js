import Card from '@/components/card/card';
import { io } from 'socket.io-client';

const Index = () => {
  
  const socket = io('ws://localhost:3001');
  // console.log(socket);

  socket.on("connect", () => {
    console.log("Successfully connected");
  })

  return (
    <div>
      <Card />
    </div>
  )
}

export default Index