import { useEffect } from 'react';
import io from 'socket.io-client';


let socket;
export const useSocket = (url) => {
  useEffect(() => {
    socket = io(url); // Connects to the Socket.io server using the provided URL

    return () => {
      // Clean up the socket connection when the component unmounts
      socket.disconnect();
    };
  }, [url]);

  return socket;
};
