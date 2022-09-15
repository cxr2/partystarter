import { films, tvShows, songs, books, idioms } from "../components/data.js";
import { Button } from "../components/Button.js";
import { useState } from "react";

const Charades = () => {
  const [word, setWord] = useState("");
  const picker = (arr) => {
    return setWord(arr[Math.floor(Math.random() * arr.length)]);
  };
  return (
    <>
      <h1 className="my-5 text-center">Charades Word Generator</h1>
      <div className="word__choice d-flex align-items-center justify-content-center">
        <h4 className="my-5">{word}</h4>
      </div>
      <div className="container mt-3 charadesBtns">
        <div className="row justify-content-center">
          <Button text="Films" clicked={() => picker(films)} />
          <Button text="Tv Shows" clicked={() => picker(tvShows)} />
          <Button text="Songs" clicked={() => picker(songs)} />
          <Button text="Books" clicked={() => picker(books)} />
          <Button text="Idioms" clicked={() => picker(idioms)} />
        </div>
      </div>
    </>
  );
};

export default Charades;
