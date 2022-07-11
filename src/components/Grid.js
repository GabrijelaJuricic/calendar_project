import { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  currentlySelectedMonthState,
  allFetchedEventsState,
  eventsInCurrentMonthState,
} from "../atoms";
import {
  getDate,
  getDay,
  getDaysInMonth,
  isSameMonth,
  parseISO,
  startOfMonth,
} from "date-fns";
import { Octokit } from "@octokit/core";
import EventCard from "./EventCard";
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
  const [allFetchedEvents, setAllFetchedEvents] = useRecoilState(
    allFetchedEventsState
  );
  const [eventsInCurrentMonth, setEventsInCurrentMonth] = useRecoilState(
    eventsInCurrentMonthState
  );
  const currentlySelectedMonth = useRecoilValue(currentlySelectedMonthState);

  var daysInCurrentMonth = getDaysInMonth(currentlySelectedMonth);
  var firstDayOfTheMonth = getDay(startOfMonth(currentlySelectedMonth));
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
  const cellHasADate = (cellId) => {
    return (
      (cellId >= firstDayOfTheMonth) &
      (cellId < daysInCurrentMonth + firstDayOfTheMonth)
    );
  };

  // Which date is in a cell
  const dateInCell = (cellId) => {
    return cellId - firstDayOfTheMonth + 1;
  };

  // Does a cell have an event
  const cellHasAnEvent = (cellId) => {
    var commitsOnThisDay = eventsInCurrentMonth.filter((commitItem) => {
      return (
        getDate(parseISO(commitItem.commit.author.date)) == dateInCell(cellId)
      );
    });
    if (commitsOnThisDay) {
      return commitsOnThisDay[0];
    } else {
      return [];
    }
  };

  // Fetching events
  useEffect(() => {
    const octokit = new Octokit({
      auth: "Enter Personal access token here",
    });
    octokit
      .request("GET /repos/GabrijelaJuricic/calendar_project/commits")
      .then((res) => {
        setAllFetchedEvents(res.data);
      });
  }, []);

  useEffect(() => {
    setEventsInCurrentMonth(
      allFetchedEvents.filter((commitItem) =>
        isSameMonth(
          parseISO(commitItem.commit.author.date),
          currentlySelectedMonth
        )
      )
    );
  }, [allFetchedEvents, currentlySelectedMonth]);

  return (
    <div className="calendar">
      {weekdays.map((weekday) => {
        return (
          <span className="weekday" key={weekday}>
            {weekday}
          </span>
        );
      })}
      {sequence.map((cellId) => {
        return (
          <div className="cell" id={cellId} key={cellId}>
            <div className="date">
              {cellHasADate(cellId) ? dateInCell(cellId) : ""}
            </div>
            {cellHasAnEvent(cellId) && (
              <EventCard commitJson={cellHasAnEvent(cellId)} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
