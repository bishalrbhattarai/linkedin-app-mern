// import Navbar from "./components/Navbar";
// import { Button } from "./components/ui/button";
import { useEffect, useMemo, useState } from "react";
import { io, Socket } from "socket.io-client";

function App() {
  const [socketId, setSocketId] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [privateMessage, setPrivateMessage] = useState<string>("");
  const [userId, setUserId] = useState("");

  const [messages, setMessages] = useState<string[]>([]);
  const [privateMessages, setPrivateMessages] = useState<string[] | null>(null);

  const socket: Socket = useMemo(() => io("http://localhost:3001"), []);

  const handleSend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    socket.emit("send", message);
    setMessage("");
  };

  const handlePrivateSend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    socket.emit("send-private", {
      privateMessage,
      userId,
    });
    setPrivateMessage("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log(`The Socket With id : ${socket.id} connected to the server!`);
      setSocketId(socket.id as string);
    });

    socket.on("receive-private", (data) => {
      setPrivateMessages((prevMessages) =>
        prevMessages ? [...prevMessages, data] : [data]
      );
      // setPrivateMessages((prev) => [...prev!, data]);
    });

    socket.on("receive", (data) => {
      // setMessages((prevMessages) =>
      //   prevMessages ? [...prevMessages, data] : [data]
      // );

      setMessages((prev) => [...prev, data]);
    });

    socket.on("welcome", (data) => {
      console.log(data);
    });

    return () => {
      socket.close();
    };
  }, []);
  return (
    <>
      {/* <div className="w-[1200px]  mx-auto bg-black text-white ">
        <Navbar />
      </div>
      */}
      <div className="text-2xl text-center bg-slate-950 text-yellow-50">
        Chat App
      </div>
      <div className="text-lg mt-1 bg-slate-950 text-center text-white">
        SocketId: <span className=""> {socketId} </span>
      </div>
      <div className="font-bold flex gap-5 p-4 flex-col max-w-[550px] mx-auto text-center bg-slate-950 mt-2 h-screen   text-white">
        <div className="text-2xl">Message Section </div>
        <div className="">
          <input
            type="text"
            placeholder="Enter Message"
            className="focus:bg-gray-800 px-1 rounded-md py-1 focus:text-white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={handleSend}
            className="ml-3 bg-white text-black rounded-lg px-5 py-1 font-extrabold"
          >
            Send
          </button>
        </div>
        <div>
          {messages?.map((msg) => (
            <>
              <div className="bg-white my-1 text-center w-[100px] mx-auto rounded-lg py-1 text-black font-bold">
                {msg}
              </div>
            </>
          ))}
        </div>

        <input
          type="text"
          placeholder="Enter Message"
          className=" px-1 focus:bg-gray-800 rounded-md py-1 "
          value={privateMessage}
          onChange={(e) => setPrivateMessage(e.target.value)}
        />

        <input
          type="text"
          placeholder="Select User and Insert ID"
          className="px-1 focus:bg-gray-800 rounded-md py-1 "
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <button
          onClick={handlePrivateSend}
          className="ml-3 bg-white text-black rounded-lg px-5 py-1 font-extrabold"
        >
          Send Private
        </button>

        <div>
          {privateMessages?.map((msg) => (
            <>
              <div className="bg-black my-1 text-center w-[100px] mx-auto rounded-lg py-1 text-white font-bold">
                {msg}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
