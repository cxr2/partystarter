import { Film, TvShow, Song, Book, Idiom } from "../components/Charades.jsx";

export default function Charades() {
  return (
    <>
      <div class="container">
        <h1>Cherades Word Generator</h1>
        <h2>Word:</h2>
        <span id="word"></span>
        <button className="btn btn-primary" onClick={Film}>
          Film
        </button>
        <button className="btn btn-primary" onClick={TvShow}>
          Tv Show
        </button>
        <button className="btn btn-primary" onClick={Song}>
          Song
        </button>
        <button className="btn btn-primary" onClick={Book}>
          Book
        </button>
        <button className="btn btn-primary" onClick={Idiom}>
          idiom
        </button>

        <h1>Instructions:</h1>
        <h3>Normal cherades scoring and timing rules..</h3>
      </div>
    </>
  );
}
