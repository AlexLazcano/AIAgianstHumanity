import Card from '@/components/card/card';
import { io } from 'socket.io-client';
import { useEffect } from "react";

const Index = () => {
  
  const socket = io('ws://localhost:3001');
  // console.log(socket);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Successfully connected");
    });

    socket.emit("getBlackCard", null);

    socket.on("blackCards", (msg) => {
      console.log(msg);
    })
  });

  return (
    <div>
      <Card />
    </div>
  )
}

export default Index