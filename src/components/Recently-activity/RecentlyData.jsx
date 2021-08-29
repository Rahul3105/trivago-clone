import React from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper, Typography } from "@material-ui/core";
import UpdateIcon from "@material-ui/icons/Update";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PeopleIcon from "@material-ui/icons/People";
import { Redirect, useHistory } from "react-router-dom";

import { useContext } from "react";
import { SearchDataContext } from "../Context/SearchDataContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "40rem",
    height: "8rem",
    marginBottom:"2%",
    padding: "6px 16px",
    position: "relative",
    backgroundColor: "rgb(245,245,246)",
    top: "3rem",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function RecentlyData({ data }) {
  const { handleSearchData } = useContext(SearchDataContext)
  const history = useHistory()
  const classes = useStyles();

  const { date, location, checkin, checkout, room, guest } = data;
  const handleSearchAgain = () => {
    handleSearchData(location)
    history.push('/hotel-booking')
  }
  // console.log(data);
  const handleRecentlyMain = () => {
    return <Redirect to="/recentlyMain"></Redirect>
  }
  return (
    <Activity>
      <Timeline>
        <TimelineItem>
          {/* <TimelineOppositeContent> */}
          <Typography className="timeline-date">
            <UpdateIcon className="data-icon" /> {date}
          </Typography>
          {/* </TimelineOppositeContent> */}
          <TimelineSeparator>
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <div>
                <Typography variant="h6" component="h1">
                  <h3>{location}</h3>
                </Typography>
                <Typography className="box-data">
                  <p>
                    <CalendarTodayIcon className="data-icon" />
                    {`${checkin}-${checkout}`}
                  </p>
                </Typography>
                <Typography className="box-data">
                  <p>
                    <PeopleIcon className="data-icon" />
                    {`${room} Room , ${guest} Guest`}
                  </p>
                </Typography>
              </div>
              <div className="data-button">
                <button onClick={handleSearchAgain} className="muiBtn1">
                  Search again
                </button>
              </div>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Activity>
  );
}
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
const Activity = styled.div`
  background-color: #fff;
  padding-left: 0;
  min-width: 700px;
  & .timeline-date {
    font-size: 13px;
    position: relative;
    right: -15%;
    margin-top: 0.7%;
    margin-bottom: 1%;
    margin-left: -30%;
  }
  & .box-data {
    margin: 1%;
  }
  & .data-icon {
    position: relative;
    right: 1%;
  }
  & .data-button {
    position: relative;
    right: -60%;
    top: -40%;
    border-radius: 5%;
    letter-spacing: -3px;
    .muiBtn1 {
      width: 11rem;
      padding: 0.8rem;
      background-color: white;
      border: 1px solid rgb(10, 17, 33);
      color: rgb(10, 17, 33);
      border-radius: 10px;
      outline: none;
      font-size: 13px;
      font-weight: bold;
      position: relative;
      top: -1rem;
      left: 2rem;
      :hover {
        background-color: gray;
        color: white;
        border: none;
        cursor: pointer;
      }
    }
  }
`;


