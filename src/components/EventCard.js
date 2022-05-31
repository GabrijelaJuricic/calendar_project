import "./EventCard.css";

const EventCard = (props) => {
  return <div className="box">{props.commitJson.commit.message}</div>;
};
export default EventCard;
