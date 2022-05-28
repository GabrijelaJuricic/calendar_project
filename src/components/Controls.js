import "./Controls.css";

const Controls = () => {
  return (
    <div className="month-container">
      <div className="month-display">January 2022</div>
      <div className="arrow-picker">
        <button className="btn-arrows">
          <svg>
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
          </svg>
        </button>
        <div className="btn-space"></div>
        <button className="btn-arrows">
          <svg>
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Controls;
