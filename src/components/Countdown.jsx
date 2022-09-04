import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

export default function CountdownTimer() {
  const Completionist = () => <span>It's PARTY TIME!</span>;

  const FUTURE_DATE = new Date(2022, 8, 7, 13);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      function daysPlural(isDaysPlural) {
        if (days === 1) {
          isDaysPlural = false;
        } else {
          isDaysPlural = true;
        }
        return isDaysPlural ? "s" : "";
      }

      function hoursPlural(isHoursPlural) {
        if (hours === 1) {
          isHoursPlural = false;
        } else {
          isHoursPlural = true;
        }
        return isHoursPlural ? "s" : "";
      }

      function minutesPlural(isMinutesPlural) {
        if (minutes === 1) {
          isMinutesPlural = false;
        } else {
          isMinutesPlural = true;
        }
        return isMinutesPlural ? "s" : "";
      }

      function secondsPlural(isSecondsPlural) {
        if (seconds === 1) {
          isSecondsPlural = false;
        } else {
          isSecondsPlural = true;
        }
        return isSecondsPlural ? "s" : "";
      }

      // Render a countdown
      return `${days} day${daysPlural()} 
			${hours} hour${hoursPlural()} ${minutes} minute${minutesPlural()} 
			${seconds} second${secondsPlural()}`;
    }
  };

  // const countdown = ReactDOM.createRoot(document.getElementById("countdown"));
  // countdown.render(
  return <Countdown date={FUTURE_DATE} renderer={renderer} />;
  // document.getElementById("countdown")
  // );
}
