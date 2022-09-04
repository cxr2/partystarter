import "./App.css";
import Party from "./images/Party_Monochromatic.png";

function App() {
  return (
    <>
      <div className="App">
        <nav className="navbar navbar-expand-lg">
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
          <button
            className="btn d-block mx-auto px-4 mt-4"
            id="rsvp"
            href="mailto: rsvp@party.com"
          >
            RSVP
          </button>
        </div>
      </div>
      {/* <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
