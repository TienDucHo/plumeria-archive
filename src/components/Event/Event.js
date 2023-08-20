// local components
import Calendar from "./Calendar";

const Event = ({ club, time, date, month, location }) => {
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet consectetur.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate
        egestas eu.
      </p>
      <Calendar
        // club={club}
        // time={time}
        // date={date}
        // month={month}
        // location={location}
        club="Harmonica PTNK Club"
        time="17:00"
        date="25"
        month="December"
        location="125 Nguyen Chi Thanh"
      />
    </div>
  );
};

export default Event;
