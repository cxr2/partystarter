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
    const chatHistoryUnsubscribe = onSnapshot(chatHistoryRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        console.log("CHANGE:", change.doc.data()["message-array"]);
        if (!_.isEqual(chatHistory, change.doc.data())) {
          console.log("Updating chatHistory in state...");
          setChatHistory(change.doc.data()["message-array"]);
        }
      });

      // .forEach((change) => {
      //   console.log("change.doc.data() ", change.doc.data());

      // });
    });

    // fetchMessageHistory();
    //

    return () => {
      chatHistoryUnsubscribe();
    };
  }, []);

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

  const reversedMessageArr = [];
  for (const message of chatHistory) {
    reversedMessageArr.unshift(message);
  }

  return (
    <div>
      <h1 className="my-5 text-center">Party Chat</h1>
      <div id="chatContainer">
        <div id="chatInput">
          <div className="container">
            <form onSubmit={(e) => sendMessage(e)}>
              <div className="row justify-content-center">
                <div className="col-8 d-flex justify-content-center">
                  <label htmlFor="nameInput" className="text-start p-1">
                    Name:
                  </label>
                  <input
                    id="nameInput"
                    type="text"
                    className="px-3"
                    value={userName}
                    onChange={($e) => setUserName($e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-10 d-flex justify-content-center">
                  {/* <label htmlFor="messageInput" className="message">
                    Write a message
                  </label> */}
                  <br />
                  <input
                    id="messageInput"
                    type="text"
                    className="px-3 m-4"
                    placeholder="Type a message"
                    value={userMessage.message}
                    onChange={($e) => setUserMessage($e.target.value)}
                    required
                  />
                  <br />
                </div>
                <div className="controls row justify-content-center">
                  <div className="col-3 d-flex justify-content-around">
                    <button
                      className="partychatsubmit btn btn-success m-2"
                      type="submit button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-send-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                      </svg>
                    </button>

                    <button
                      className="partychatclear btn btn-danger m-2"
                      type="reset"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-trash3-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="container" id="chatHistory">
            <ul className="userMessages">
              {reversedMessageArr.map((messageObj, i) => (
                <li key={i} className="message">
                  <div className="row py-lg-3 d-flex justify-content-around align-items-center">
                    <div className="col-sm-12 col-lg-6">
                      <p className="message">{messageObj.message}</p>
                    </div>
                    <div className="col-sm-12 col-lg-4 text-start">
                      <p className="py-2">
                        <span className="sender"> {messageObj.sender} </span>
                        <span className="text-muted ms-1">
                          {timeAgoParser(messageObj.time).timeAgoString}
                        </span>
                      </p>
                    </div>
                  </div>
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
