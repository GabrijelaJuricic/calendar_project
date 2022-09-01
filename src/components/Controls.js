import { getYear, addMonths } from "date-fns";
import { useRecoilState } from "recoil";
import { currentlySelectedMonthState } from "../atoms";
import "./Controls.css";

const Controls = () => {
  const [selectedMonth, setSelectedMonth] = useRecoilState(
    currentlySelectedMonthState
  );

  const incrementMonth = () => {
    setSelectedMonth((prevState) => {
      return addMonths(prevState, 1);
    });
  };

  const decrementMonth = () => {
    setSelectedMonth((prevState) => {
      return addMonths(prevState, -1);
    });
  };

  return (
    <div className="month-container">
      <div className="arrow-picker">
        <button className="btn-arrows" onClick={decrementMonth}>
          <svg>
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
          </svg>
        </button>
      </div>
      <div className="month-display">
        {selectedMonth.toLocaleString("en-us", { month: "long" })}{" "}
        {getYear(selectedMonth)}
      </div>
      <div className="arrow-picker">
        <button className="btn-arrows" onClick={incrementMonth}>
          <svg>
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Controls;
