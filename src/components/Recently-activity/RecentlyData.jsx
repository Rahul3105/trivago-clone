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


const useStyles = makeStyles((theme) => ({
  paper: {
        padding: "6px 16px",
        height: "13vh",
        position: "relative",
        top:"30%"
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function RecentlyData({ data }) {
    const classes = useStyles();
    const history = useHistory()
  const { date, location, checkin, checkout, room, guest } = data;
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
                  <Button variant="outlined" onClick={handleRecentlyMain}>Search again</Button>
              </div>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      );
    </Activity>
  );
}

const Activity = styled.div`
  background-color: #fff;
  /* border: 1px solid red; */
  padding-left: 0;
  margin-left: -24%;
  /* position:absolute; */
  min-width:700px;

  
  & .timeline-date{
      font-size:16px;
      position: relative;
      right:-15%;
      margin-top:.7%;
      margin-bottom:1%;
      margin-left:-30%;
  }
  & .box-data {
      margin:1%
  }
  & .data-icon{
      position: relative;
      right:1%;
  }
  & .data-button{
      position: relative;
      right:-60%;
      top:-40%;
      border-radius:5%;
    letter-spacing:-3px;
  }
`;


