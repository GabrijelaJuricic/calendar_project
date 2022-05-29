import { useRecoilValue } from "recoil";
import { currentlySelectedMonth } from "../atoms";
import { getDay, getDaysInMonth, startOfMonth } from "date-fns";
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

const Grid = () => {
  const currentMonth = useRecoilValue(currentlySelectedMonth);

  var daysInCurrentMonth = getDaysInMonth(currentMonth);
  var firstDayOfTheMonth = getDay(startOfMonth(currentMonth));
  var sequence = [...Array(43).keys()].slice(1);

  // Change Sunday from 0 to 7 for easier calculation
  if (firstDayOfTheMonth == 0) firstDayOfTheMonth = 7;

  // Remove unneeded rows
  if (firstDayOfTheMonth + daysInCurrentMonth < 30) {
    sequence = [...Array(29).keys()].slice(1);
  } else if (firstDayOfTheMonth + daysInCurrentMonth < 37) {
    sequence = [...Array(36).keys()].slice(1);
  }

  // Does a cell need to be filled with a date
  const cellFilled = (cellId) => {
    return (
      (cellId >= firstDayOfTheMonth) &
      (cellId - firstDayOfTheMonth + 1 <= daysInCurrentMonth)
    );
  };

  return (
    <div className="calendar">
      {weekdays.map((weekday) => {
        return (
          <span className="weekday" key={weekday}>
            {weekday}
          </span>
        );
      })}
      {sequence.map((i) => {
        return (
          <div className="day" id={i} key={i}>
            {cellFilled(i) ? i - firstDayOfTheMonth + 1 : ""}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
