import React from "react";

const FilmButton = ({ clicked }) => {
  return (
    <div className="col-2 charadesBtns">
      <button onClick={clicked}>Film</button>
    </div>
  );
};

const TvButton = ({ clicked }) => {
  return (
    <div className="col-2 charadesBtns">
      <button onClick={clicked}>Tv Show</button>
    </div>
  );
};

const SongButton = ({ clicked }) => {
  return (
    <div className="col-2 charadesBtns">
      <button onClick={clicked}>Song</button>
    </div>
  );
};

const BookButton = ({ clicked }) => {
  return (
    <div className="col-2 charadesBtns">
      <button onClick={clicked}>Book</button>
    </div>
  );
};

const IdiomButton = ({ clicked }) => {
  return (
    <div className="col-2 charadesBtns">
      <button onClick={clicked}>Idiom</button>
    </div>
  );
};

export { FilmButton, TvButton, SongButton, BookButton, IdiomButton };

//  <div className="container charadesBtns">
//    <div className="row justify-content-center">
//      <div className="col-2">
//        <button onClick={clicked}>Film</button>
//      </div>
//      <div className="col-2">
//        <button>Tv Shows</button>
//      </div>
//      <div className="col-2">
//        <button>Song</button>
//      </div>
//      <div className="col-2">
//        <button>Book</button>
//      </div>
//      <div className="col-2">
//        <button>Idiom</button>
//      </div>
//    </div>
//  </div>;
