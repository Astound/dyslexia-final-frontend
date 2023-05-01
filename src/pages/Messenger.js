import "./messenger.css";
import Conversation from "../components/conversations/Conversation";
// import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import ProfileNavbar from "../components/ProfileNavbar";
import Message from "../components/Message/Message";
import { useSelector } from "react-redux";
import {
  getChatsByChatId,
  getChatsByUserId,
  sendMessage,
} from "../Api/ApiFunctions/ChatFunctions";
export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  const user = useSelector((state) => state.User);
  const scrollRef = useRef();
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      console.log("get message", data);
      setArrivalMessage({
        sender: data.senderId,
        content: data.text,
      });
    });
  }, []);

  useEffect(() => {
    setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user.userId);
    socket.current.on("getUsers", (users) => {
      console.log("online users", users);
    });
  }, [user]);

  useEffect(() => {
    getChatsByUserId(user.userId).then((res) => {
      console.log("conversations", res.data);
      setConversations(res.data.chats);
    });
  }, [user.userId]);

  useEffect(() => {
    if (currentChat) {
      getChatsByChatId(currentChat?.chatId).then((res) => {
        console.log(res.data);
        setMessages(res.data);
      });
    }
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user.userId,
      content: newMessage,
      chat: currentChat.chatId,
    };

    const receiverId = conversations.find(
      (conv) => conv.chatId === currentChat.chatId
    ).id;
    console.log(receiverId);

    socket.current.emit("sendMessage", {
      senderId: user.userId,
      receiverId,
      text: newMessage,
    });

    sendMessage(message).then((res) => {
      console.log(res.data);
    });
    setMessages([...messages, message]);
    setNewMessage("");
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <ProfileNavbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {conversations?.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation
                  conversation={c}
                  currentUser={currentChat.chatId === c.chatId}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages?.map((m) => (
                    <div ref={scrollRef}>
                      <Message
                        message={m?.content}
                        own={m?.sender === user.userId}
                      />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput border-2 w-full"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        {/* <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user.userId}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
