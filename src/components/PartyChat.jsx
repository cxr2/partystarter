import React, { useState, useEffect } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  Firestore,
  collection,
  addDoc,
  doc,
  onSnapshot,
  setDoc,
  arrayUnion,
  updateDoc,
  getDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAAfzpw7Wf46Fy5K8yB2gG7jx6pdXhVzM",
  authDomain: "party-chat-b78ff.firebaseapp.com",
  projectId: "party-chat-b78ff",
  storageBucket: "party-chat-b78ff.appspot.com",
  messagingSenderId: "589508579755",
  appId: "1:589508579755:web:ced6f469df178e64c0c2ee",
  measurementId: "G-K6W9CM4W0G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

const chatHistoryRef = collection(db, "chat-history");
const chatMessagesRef = doc(chatHistoryRef, "chat-messages");

function PartyChat() {
  const [userName, setUserName] = useState("Anon");
  const [chatHistory, setChatHistory] = useState([
    {
      time: new Date(),
      sender: "Host",
      message: "Welcome to the party!",
    },
  ]);
  const [userMessage, setUserMessage] = useState({
    // time: new Date(),
    // sender: "",
    // message: "",
  });

  // set initial chat state

  // async function startChat() {
  //   await updateDoc(
  //     chatMessagesRef,
  //     "message-array",
  //     arrayUnion({
  //       time: new Date(),
  //       sender: "Host",
  //       message: "Welcome to the party!",
  //     })
  //   );
  // }
  // startChat();

  async function sendMessage() {
    const date = new Date();
    const message = userMessage.message;
    const sender = userName;
    const messageObj = {
      time: date,
      message: message,
      sender: sender,
    };

    try {
      await updateDoc(chatMessagesRef, {
        "message-array": arrayUnion(messageObj),
      });
    } catch (error) {
      console.log("error sending message: ", error);
    }
  }

  // useEffect(() => {
  //   //   const chatHistoryUnsubscribe = onSnapshot(chatMessagesRef, (snapshot) => {
  //   //     snapshot.docChanges().forEach((change) => {
  //   //       console.log("change.doc.data() ", change.doc.data());
  //   //     });
  //   //   });
  //   async function fetchMessageHistory() {
  //     const docSnap = await getDoc(chatMessagesRef);
  //     if (docSnap.exists()) {
  //       console.log("Document data:", docSnap.data());
  //       setChatHistory(docSnap.data()["message-array"]);
  //       console.log("message history in state", chatHistory);
  //     } else {
  //       console.log("Document does not exist");
  //     }
  //   }
  //   fetchMessageHistory();

  //   //   return () => {
  //   //     chatHistoryUnsubscribe();
  //   //   };
  // });

  const now = new Date();

  function timeAgoParser(messageTime) {
    // const date = new Date(messageTime.seconds * 1000);
    console.log(
      "🚀 ~ file: PartyChat.jsx ~ line 97 ~ timeAgoParser ~ date",
      messageTime
    );

    const msAgo = now.getTime() - messageTime.getTime();
    const secAgo = msAgo / 1000;
    const minAgo = Math.floor(secAgo / 60);
    const hrsAgo = Math.floor(minAgo / 60);
    const daysAgo = Math.floor(hrsAgo / 24);
    let timeAgoString;
    if (minAgo < 2) {
      timeAgoString = "Just Now";
    } else if (minAgo < 60) {
      timeAgoString = `${minAgo} minutes ago`;
    } else if (hrsAgo < 24) {
      timeAgoString = `${hrsAgo} hour${hrsAgo > 1 ? "s" : ""} ago`;
    } else {
      timeAgoString = `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
    }

    return {
      date: messageTime,
      timeAgoString: timeAgoString,
    };
  }

  return (
    <div>
      <h2 className="my-5">Party Chat</h2>
      <div id="chatContainer">
        <div id="chatInput">
          <div className="container">
            <form>
              <div className="row justify-content-center">
                <div className="col-8">
                  <label htmlFor="nameInput">Name:</label>
                  <input
                    id="nameInput"
                    type="text"
                    value={userName}
                    onChange={($e) => setUserName($e.target.value)}
                    required
                  />
                </div>
              </div>
              <label htmlFor="messageInput" className="message">
                Write a message
              </label>
              <br />
              <input
                id="messageInput"
                type="text"
                value={userMessage.message}
                onChange={($e) => setUserMessage($e.target.value)}
                required
              />
              <br />
              <button
                className="partychatsubmit"
                type="submit"
                onClick={() => sendMessage}
              >
                Send
              </button>
              <button className="partychatclear" type="reset">
                Clear
              </button>
            </form>
          </div>
          <div id="chatHistory">
            <ul>
              {chatHistory.map((messageObj, i) => (
                <li key={i} className="message">
                  <p>
                    {messageObj.sender}{" "}
                    {timeAgoParser(messageObj.time).timeAgoString}
                  </p>
                  <p>{messageObj.message}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartyChat;
