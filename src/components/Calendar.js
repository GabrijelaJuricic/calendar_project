import Controls from "./Controls";
import Grid from "./Grid";
import "./Calendar.css";

const Calendar = () => {
  return (
    <div className="calendar-container">
      <Controls />
      <Grid />
    </div>
    // </div>
  );
};

export default Calendar;
