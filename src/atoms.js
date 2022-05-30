import { atom } from "recoil";

export const currentlySelectedMonthState = atom({
  key: "currentlySelectedMonthState",
  default: new Date(),
});

export const allFetchedEventsState = atom({
  key: "allFetchedEventsState",
  default: [],
});

export const eventsInCurrentMonthState = atom({
  key: "eventsInCurrentMonthState",
  default: [],
});
