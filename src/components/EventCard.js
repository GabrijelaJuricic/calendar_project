import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "./EventCard.css";

const EventCard = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="box">
      <button
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handleClick}
        onMouseLeave={handleClose}
      >
        {props.commitJson.commit.message}
      </button>
      <Popover
        id={"mouse-over-popover"}
        sx={{ pointerEvents: "none" }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Typography sx={{ p: 1 }}>{props.commitJson.commit.message}</Typography>
      </Popover>
    </div>
  );
};

export default EventCard;
