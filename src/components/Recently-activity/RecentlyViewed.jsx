import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components'
import { Rating } from "@material-ui/lab";
import { Box } from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
      width: 151,
      height:160,
      margin: "1%",
    marginBottom:"2%"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  
    reviewBox: {
        width: "3.2rem",
        height: "2.7vh",
        borderRadius: "40%",
      fontWeight: "600",
      margin: "1%",
      display: "flex",
      textAlign: "center"
      
  }
}));

export default function RecentlyViewed({item}) {
    const classes = useStyles();
    const theme = useTheme();

const {checkin,checkout,date,guest,id,img,location,name,rating,reviews,room,star} = item
    
    return (
      <RecentlyCard>
        <Card className={classes.root}>
          <CardMedia className={classes.cover} image={img} title={name} />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography className="card-title" component="h2" variant="h4">
                {name}
              </Typography>
              <Typography variant="subtitle1">
                <div className={classes.root}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={star}
                    precision={0.5}
                    readOnly
                  />
                  <Typography variant="h6">Hotel</Typography>
                </div>
              </Typography>
              <Typography variant="subtitle1">
                <div className={classes.root}>
                  <Typography variant="h5" className="data-location">
                    {location}
                  </Typography>
                </div>
              </Typography>
              <Box>
                <Typography className="rating-data-box" style={{ textAlign: "center", display: "flex" }}>
                  <Box
                    style={{
                      background: `${rating < 7.5 ? "#f2ba00" : "darkGreen"}`,
                    }}
                    className={classes.reviewBox}
                  >
                    <p className="rating-style">{rating}</p>
                  </Box>
                  <p className="reviewText" style={{ color: "black" }}>{`${
                    rating > 8.5 ? "Excellent" : "Good"
                  }`}</p>
                  <Typography className="reviews-data">{`(${reviews} reviews)`}</Typography>
                </Typography>
              </Box>
              <Typography className="viewed-date">
                Viewed on Booking.com on {date}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <Typography className="box-data">
                <p>
                  <CalendarTodayIcon className="data-icon" />
                </p>
                <p className="icon-value">{`${checkin}-${checkout}`}</p>
                <p>
                  <PermIdentityIcon className="data-icon" />
                </p>
                <p className="icon-value">{`${guest}`}</p>
              </Typography>
            </div>
          </div>
          <div className="side-arrow">
            <ArrowForwardIosIcon className="arrow-handle" />
          </div>
        </Card>
      </RecentlyCard>
    );
}

const RecentlyCard = styled.div`
  width: 60%;
  margin: 2%;
  height: 27vh;
  &:hover {
    border: 0.2px solid #999;
  }
  & .card-title {
    font-weight: 500;
    margin-bottom: 1%;
  }
  & .data-location {
    margin: 1%;
  }
  & .reviewText {
    text-align: center;
    font-size: 14px;
    margin: 1%;
    /* margin-top:2%; */
    font-weight: 700;
  }
  & .rating-data-box{
    margin:2% 1%;
  }
   & .reviews-data {
    color: #757575;
    font-size: 14px;
    padding-left: 0.5rem;
  }
  & .viewed-date {
    margin-top: 3%;
    font-size: 14px;
    color: #999;
  }
  & .rating-style {
    text-align: center;
    justify-content: center;
    font-size: 14px;
    margin: 1% auto;
    color: white;
  }
  & .arrow-handle {
    margin: 13vh;
    margin-left: 1rem;
  }
  & .side-arrow {
    background-color: #f5f5f5;
    margin-left: auto;
    justify-content: space-around;
    width: 5%;
  }
  & .box-data {
    width: 100%;
    margin-top: -10%;
    display: flex;
    color: #6d6d6d;
  }
  & .data-icon {
    margin: 2% 4%;
  }
  & .icon-value {
    margin-left: 1%;
    margin-top: 0.5%;
    font-size: 12px;
  }
`;

