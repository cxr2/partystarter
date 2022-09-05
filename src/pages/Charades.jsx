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

  const onClickFilmHandler = () => {
    const films = [
      "Shrek",
      "Alice in Wonderland",
      "Finding Nemo",
      "My Fair Lady",
      "Cinderella",
      "Cars",
      "Spiderman",
      "Peter Pan",
      "Toy Story",
      "Inception",
      "Robin Hood",
      "Up",
      "Avatar",
      "The Fox and the Hound",
      "Ratatouille",
      "2001: A Space Odyssey",
      "The Wizard of Oz",
      "Butch Cassidy and the Sundance Kid",
      "Groundhog Day",
      "The Muppet Christmas Carol",
      "Catch Me If You Can",
      "Back to the Future",
      "The Mighty Ducks",
      "Willy Wonka and the Chocolate Factory",
      "Anastasia",
      "Remember the Titans",
      "Indiana Jones",
      "Angels in the Outfield",
      "Pocahontas",
      "E.T.",
      "Apollo 13",
      "The Lion King",
      "Dumbo",
      "Babe",
      "Mighty Joe Young",
      "Beauty and the Beast",
      "Bambi",
      "Tarzan",
      "Aladdin",
      "Batman",
      "The Kid",
      "The Importance of Being Earnest",
      "Mary Poppins",
      "The Sandlot",
      "Forest Gump",
      "The Princess Bride",
      "101 Dalmatians",
      "Big",
      "Star Wars",
      "Bill and Ted's Excellent Adventure",
      "James Bond",
      "The Little Mermaid",
      "A Bug's Life",
      "Brother Bear",
      "High School Musical",
      "The Parent Trap",
      "The Princess Diaries",
      "Snow White",
      "The Incredibles",
      "Sleeping Beauty",
    ];
    const getFilm = () => {
      let randomNum = Math.floor(Math.random() * films.length);
      return setWord(films[randomNum]);
    };
    getFilm();
  };

  const onClickTvHandler = () => {
    const tvShows = [
      "Twin Peaks",
      "Marvelous Mrs. Maisel",
      "Schitts Creek",
      "Glee",
      "Roseanne",
      "Youre the Worst",
      "Mad Men",
      "Orpan Black",
      "Dinosaurs",
      "Black Mirror",
      "Big Family Cooking Show",
      "Worst Cooks in America",
      "Kitchen Nightmares",
      "Jeopardy",
      "Russian Doll",
      "Glow",
      "The Good Place",
      "Grace & Frankie",
      "The Newsroom",
      "Studio 60 on the Sunset Strip",
      "30 Rock",
      "Happy Endings",
      "NewsRadio",
      "Sports Night",
      "Maniac",
      "The Keepers",
      "True Crime",
      "Dance Shows",
      "Triger Warning with Killer Mike",
      "Santa Clarita Diet",
      "American Crime Story",
    ];
    const getShow = () => {
      let randomNum = Math.floor(Math.random() * tvShows.length);
      return setWord(tvShows[randomNum]);
    };
    getShow();
  };

  const onClickSongHandler = () => {
    const songs = [
      "Oops!...I Did It Again",
      "Breathe",
      "All The Small Things",
      "It's My Life",
      "The Real Slim Shady",
      "Say My Name",
      "Desert Rose",
      "I'm Outta Love ",
      "The Next Episode",
      "In the End",
      "Cold as Ice",
      "Take A Look Around",
      "The Time Is Now",
      "He Wasn't Man Enough",
      "Can't Fight The Moonlight",
      "Fill Me In",
      "7 Days",
      "That's the Way It Is",
      "It's Gonna Be Me",
      "Bag Lady",
      "Teenage Dirtbag",
      "Survivor",
      "Stan",
      "Can't Get You out of My Head",
      "It's Raining Men",
      "You Rock My World",
      "Little L",
      "Gotta Get Thru This",
      "All For You",
      "Complicated",
      "Unchained Melody",
      "Get the Party Started",
      "Sk8er Boi",
    ];
    const getSong = () => {
      let randomNum = Math.floor(Math.random() * songs.length);
      return setWord(songs[randomNum]);
    };
    getSong();
  };

  const onClickBookHandler = () => {
    const books = [
      "Ulysses",
      "The Great Gatsby ",
      "Moby Dick",
      "War and Peace",
      "Hamlet",
      "The Odyssey",
      "Madame Bovary",
      "The Divine Comedy",
      "Lolita",
      "Crime and Punishment",
      "Wuthering Heights",
      "The Catcher in the Rye",
      "Pride and Prejudice",
      "The Adventures of Huckleberry Finn",
      "Alice's Adventures in Wonderland",
      "The Iliad",
      "To the Lighthouse",
      "Catch 22",
      "Heart of Darkness",
      "Nineteen Eighty Four",
      "Great Expectations",
      "The Grapes of Wrath",
    ];
    const getBook = () => {
      let randomNum = Math.floor(Math.random() * books.length);
      return setWord(books[randomNum]);
    };
    getBook();
  };

  const onClickIdiomHandler = () => {
    const idioms = [
      "Out of the frying pan and into the fire",
      "One leg in the door",
      "Why the long face?",
      "In the same boat",
      "Up a creek without a paddle",
      "Raining cats and dogs",
      "Feeling under the weather",
      "Green with envy",
      "Frog in your throat",
      "Head over heels in love",
      "Grab the bull by the horns",
      "Out of this world",
      "Water under the bridge",
      "Put your foot in your mouth",
      "Bull in a china closet",
      "Have a cow",
      "Tie the knot",
    ];
    const getIdiom = () => {
      let randomNum = Math.floor(Math.random() * idioms.length);
      return setWord(idioms[randomNum]);
    };
    getIdiom();
  };

  return (
    <>
      {/* <div className="container">
        <h1 className="my-5">Charades Word Generator</h1>
        <span id="word">{wordChoice.text}</span>
        <button className="btn charades btn-primary" onClick={getFilm}>
          Film
        </button>
        <button className="btn charades btn-primary" onClick={TvShow}>
          Tv Show
        </button>
        <button className="btn  charades btn-primary" onClick={Song}>
          Song
        </button>
        <button className="btn charades btn-primary" onClick={Book}>
          Book
        </button>
        <button className="btn charades btn-primary" onClick={Idiom}>
          Idiom
        </button>
      </div> */}
      <h1 className="my-5">Charades Word Generator</h1>
      <div className="word__choice d-flex align-items-center justify-content-center">
        <h3 className="my-5">{word}</h3>
      </div>
      <div className="container mt-5 charadesBtns">
        <div className="row justify-content-center">
          <FilmButton clicked={onClickFilmHandler} />
          <TvButton clicked={onClickTvHandler} />
          <SongButton clicked={onClickSongHandler} />
          <BookButton clicked={onClickBookHandler} />
          <IdiomButton clicked={onClickIdiomHandler} />
        </div>
      </div>
    </>
  );
};

export default Charades;
