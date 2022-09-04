import React, { useState, useEffect } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import _, { isEqual } from "lodash";
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
      time: "Sun Sep 04 2022 14:26:22 GMT+0100 (British Summer Time)",
      sender: "Host",
      message: "Welcome to the party!",
    },
  ]);
  const [userMessage, setUserMessage] = useState("");

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

  async function sendMessage(e) {
    e.preventDefault();
    const date = new Date();
    const message = userMessage;
    const sender = userName;
    const messageObj = {
      time: date.toString(),
      message: message,
      sender: sender,
    };
    console.log(
      "🚀 ~ file: PartyChat.jsx ~ line 81 ~ sendMessage ~ messageObj",
      messageObj
    );

    try {
      await updateDoc(chatMessagesRef, {
        "message-array": arrayUnion(messageObj),
      });
      fetchMessageHistory();
      setUserMessage("");
    } catch (error) {
      console.log("error sending message: ", error);
    }
  }

  async function fetchMessageHistory() {
    const docSnap = await getDoc(chatMessagesRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setChatHistory(docSnap.data()["message-array"]);
      console.log("message history in state", chatHistory);
    } else {
      console.log("Document does not exist");
    }
  }
  // fetchMessageHistory();

  useEffect(() => {
    const chatHistoryUnsubscribe = onSnapshot(chatMessagesRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        console.log("change.doc.data() ", change.doc.data());
        if (!_.isEqual(chatHistory, change.doc.data())) {
          console.log("Updating chatHistory in state...");
          setChatHistory(change.doc.data());
        }
      });
    });

    // fetchMessageHistory();
    //

    return () => {
      chatHistoryUnsubscribe();
    };
  }, [chatHistory, userName]);

  const now = new Date();

  function timeAgoParser(messageTime) {
    console.log(
      "🚀 ~ file: PartyChat.jsx ~ line 125 ~ timeAgoParser ~ messageTime",
      messageTime
    );
    // const date = new Date(messageTime.seconds * 1000);
    // console.log(
    //   "🚀 ~ file: PartyChat.jsx ~ line 97 ~ timeAgoParser ~ date",
    //   date
    // );

    const date = new Date(Date.parse(messageTime));

    const msAgo = now.getTime() - date.getTime();
    console.log(
      "🚀 ~ file: PartyChat.jsx ~ line 132 ~ timeAgoParser ~ msAgo",
      msAgo
    );
    const secAgo = msAgo / 1000;
    console.log(
      "🚀 ~ file: PartyChat.jsx ~ line 134 ~ timeAgoParser ~ secAgo",
      secAgo
    );
    const minAgo = Math.floor(secAgo / 60);
    console.log(
      "🚀 ~ file: PartyChat.jsx ~ line 136 ~ timeAgoParser ~ minAgo",
      minAgo
    );
    const hrsAgo = Math.floor(minAgo / 60);
    console.log(
      "🚀 ~ file: PartyChat.jsx ~ line 138 ~ timeAgoParser ~ hrsAgo",
      hrsAgo
    );
    const daysAgo = Math.floor(hrsAgo / 24);
    console.log(
      "🚀 ~ file: PartyChat.jsx ~ line 140 ~ timeAgoParser ~ daysAgo",
      daysAgo
    );
    let timeAgoString;
    if (minAgo < 2) {
      timeAgoString = "Just Now";
      console.log(
        "🚀 ~ file: PartyChat.jsx ~ line 139 ~ timeAgoParser ~ timeAgoString",
        timeAgoString
      );
    } else if (minAgo < 60) {
      timeAgoString = `${minAgo} minutes ago`;
      console.log(
        "🚀 ~ file: PartyChat.jsx ~ line 142 ~ timeAgoParser ~ timeAgoString",
        timeAgoString
      );
    } else if (hrsAgo < 24) {
      timeAgoString = `${hrsAgo} hour${hrsAgo > 1 ? "s" : ""} ago`;
      console.log(
        "🚀 ~ file: PartyChat.jsx ~ line 145 ~ timeAgoParser ~ timeAgoString",
        timeAgoString
      );
    } else {
      timeAgoString = `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
      console.log(
        "🚀 ~ file: PartyChat.jsx ~ line 148 ~ timeAgoParser ~ timeAgoString",
        timeAgoString
      );
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
            <form onSubmit={(e) => sendMessage(e)}>
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
                className="partychatsubmit btn btn-success m-2"
                type="submit button"
              >
                Send
              </button>
              <button
                className="partychatclear btn btn-danger m-2"
                type="button reset"
              >
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
