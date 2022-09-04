import { Film, TvShow, Song, Book, Idiom } from "../components/Charades.jsx";

export default function Charades() {
  return (
    <>
      <div class="container">
        <h1 className="my-5">Charades Generator</h1>

        <span id="word"></span>
        <button className="btn charades btn-primary" onClick={Film}>
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

        {/* <h3 className="my-4 text-start">Instructions:</h3>
        <h3 className="text-start">
          Normal charades scoring and timing rules..
        </h3> */}
      </div>
    </>
  );
}
