import { films, tvShows, songs, books, idioms } from "../components/data.js";
import {
  FilmButton,
  TvButton,
  SongButton,
  BookButton,
  IdiomButton,
} from "../components/Buttons.js";
import { useState } from "react";

const Charades = () => {
  const [word, setWord] = useState("");
  const picker = (arr) => {
    return setWord(arr[Math.floor(Math.random() * arr.length)]);
  };
  return (
    <>
      <h2 className="my-5">Charades Word Generator</h2>
      <div className="word__choice d-flex align-items-center justify-content-center">
        <h3 className="my-5">{word}</h3>
      </div>
      <div className="container mt-5 charadesBtns">
        <div className="row justify-content-center">
          <FilmButton clicked={() => picker(films)} />
          <TvButton clicked={() => picker(tvShows)} />
          <SongButton clicked={() => picker(songs)} />
          <BookButton clicked={() => picker(books)} />
          <IdiomButton clicked={() => picker(idioms)} />
        </div>
      </div>
    </>
  );
};

export default Charades;
