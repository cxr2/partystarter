import "./App.css";

import Navbar from "./Navigation/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import MessageBoard from "./pages/PartyChat.jsx";
import Charades from "./pages/Charades.jsx";
import Raffle from "./pages/Raffle.jsx";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partychat" element={<MessageBoard />} />
            <Route path="/charades" element={<Charades />} />
            <Route path="/raffle" element={<Raffle />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
