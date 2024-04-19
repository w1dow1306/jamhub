import "../static/css/chat.css";
import React, { useContext, useEffect, useState } from "react";
import ChatApp from "../services/chat";
import { toast } from "react-toastify";
import { Curruser } from "../services/contexts";













function Room({ closeToast, joinroom}) {

  function chgnroom(e) {
    e.preventDefault();
    let room = document.getElementsByName("room")[0];
    sessionStorage.setItem("croom", room.value);
    room.value = "";
    closeToast();
    joinroom();
  }

  return (
    <>
      <div className="inp-container">
        <form className="toast-form" action="" onSubmit={chgnroom}>
          <label htmlFor="room">Room:</label>
          <input
            type="text"
            name="room"
            className="toast-inp"
            placeholder="Enter room name"
          />
          <input type="submit" value="Submit" className="toast-inp" />
        </form>
      </div>
    </>
  );
}



const Chatbox = () => {
  const { chatuser } = useContext(Curruser);
  
  const user = new ChatApp(chatuser); //user
  const [room, setroom]=useState(user.user.croom);
  useEffect(() => {
    user.init();
  }, []);

  return (
    <div className="chat-box">
      <div className="chat-nav">
        <h2 id="name">{`@${user.user.name}`}</h2>{" "}
        <h2 id="id">Room: {room} </h2>
        <button
          onClick={() => {
            toast(
              <Room
                closeToast={toast.dismiss}
                joinroom={() => { user.user.croom = sessionStorage.getItem("croom"); user.user.rooms.push(user.user.croom); user.joinroom(); user.display(); setroom(user.user.croom)}}  />,{autoClose: 8000,position: "top-center",}
            );
          }}
          style={{
            background: "white",
            padding: "4px 10px ",
            border: "1px solid white",
            borderRadius: "12px",
          }}
        >
          Join a room
        </button>
      </div>
      <div className="chat-area">
        <ul className="messages" id="msgs">
          {/* Messages will be displayed here */}
        </ul>
        <form action="" className="inp-box" id="cht">
          <input type="text" name="" id="message" placeholder="Chat" />
          <input type="submit" className="btn" value="Send ➤ " />
        </form>
      </div>
    </div>
  );
};

export default Chatbox;
