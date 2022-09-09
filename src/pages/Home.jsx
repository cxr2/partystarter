import Party from "../images/Party_Monochromatic.png";
import CountdownTimer from "../components/Countdown.jsx";

export default function Home() {
  return (
    <>
      <div className="container" id="home">
        <div className="row justify-content-center">
          <div className="col-12">
            <img
              src={Party}
              className="d-block mx-auto img-fluid"
              alt="party"
            />
            <span id="countdown">
              <CountdownTimer />
            </span>
            <button className="btn d-block mx-auto px-4 mt-4" id="rsvp">
              <a href="mailto: rsvp@party.com"> RSVP</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
