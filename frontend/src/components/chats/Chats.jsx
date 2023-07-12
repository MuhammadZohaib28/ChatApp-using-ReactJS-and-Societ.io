import React, { useEffect, useState } from "react";
import axios from "axios";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/chat");
      setChats(data);
    } catch (error) {
      console.log("An error occurred:", error.message);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chats.map((item) => {
        return <div key={item._id}>{item.chatName}</div>;
      })}
    </div>
  );
};

export default Chats;
