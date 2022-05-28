import "./Grid.css";

var weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
var sequence = [...Array(42).keys()];

const Grid = () => {
  return (
    <div className="calendar">
      {weekdays.map((weekday) => {
        return <span className="weekday">{weekday}</span>;
      })}
      {sequence.map((num) => {
        return (
          <div className="day" id={num}>
            {num}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
