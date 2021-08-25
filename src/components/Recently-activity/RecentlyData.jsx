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
import { Paper, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  paper: {
        padding: "6px 16px",
        height: "30vh",
        position: "relative",
        top:"30%"
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function RecentlyData({ data }) {
    const classes = useStyles();
  const { date, location, checkin, checkout, room, guest } = data;
  console.log(data);
  return (
    <Activity>
      <Timeline>
              <TimelineItem>
          {/* <TimelineOppositeContent> */}
                  <Typography className="timeline-date">{ date}</Typography>
          {/* </TimelineOppositeContent> */}
          <TimelineSeparator>
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper} >
              <Typography variant="h6" component="h1">
                {date}
              </Typography>
              <Typography>Because you need strength</Typography>
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
  margin-left: -30%;
  /* position:absolute; */

  & .activity-data {
    /* border: 1px solid pink; */
    /* position: absolute; */
    width: 70%;
    height: 10vh;
  }
  & .timeline-date{
      font-size:16px;
      position: relative;
      right:-15%;
      margin-left:-30%;
  }
`


