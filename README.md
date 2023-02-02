# Calendar

## Project description

This project was part of my second job application. It is a calendar with event cards.
In this project I used:

- **recoil** - state management library for React
- **date-fns** - JavaScript date utility library
- **Octokit** - Github's API for retrieving data from my Github

The design was inspired by the **MUI** calendar design. The data shown in calendar, in the form of event cards, are commits I pushed on that day.

## Project result

![calendar](/src/assets/calendar.gif)

## Project background

This is the second project that I made. I learned a lot of new stuff in this process. I decided not to use component libraries for my Calendar project (like some MUI calendar design or React Calendar), but rather to make it all from scratch - grid, cells, event in cells etc. I used my own repository for displaying commits in event cards, but it can be any git repository. This project was challenging, meaning I had to come up with all the logic behind drawing grids and displaying dates and events.

## Install and Run the Project

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000/) to view it in your browser.
The page will reload when you make changes.
