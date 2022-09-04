import "./App.css";
import Party from "./images/Party_Monochromatic.png";

function App() {
  return (
    <>
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid mx-5 px-5 py-3">
            <a className="navbar-brand" href="#">
              PartyStarter
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link" href="messageboard.html">
                  Message Board
                </a>
                <a className="nav-link" href="icebreaker.html">
                  Icebreaker
                </a>
                <a className="nav-link" href="raffle.html">
                  Raffle
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <img src={Party} className="d-block mx-auto" alt="party" />
          <h1 className="text-center">22 DAYS 12 HOURS 13 SECONDS</h1>
        </div>
      </div>
    </>
  );
}

export default App;
