import Party from "../images/Party_Monochromatic.png";

export default function Home() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12">
          <img src={Party} className="d-block mx-auto" alt="party" />
          <h1 className="text-center">22 DAYS 12 HOURS 13 SECONDS</h1>
          <button className="btn d-block mx-auto px-4 mt-4" id="rsvp">
            <a href="mailto: rsvp@party.com"> RSVP</a>
          </button>
        </div>
      </div>
    </>
  );
}
