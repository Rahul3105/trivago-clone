import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
const useStyles = makeStyles({
  root: {
    minWidth: 180,
    height: 225,
    borderRadius: "15px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 13,
    fontWeight: 500,
  },
  pos: {
    marginBottom: 18,
  },
});

export const ComparePrice = (p) => {
  //console.log(p);
  const cancelation = true;
  const payProp = true;
  const breakfast = false;
  const price = p.d;
  const logo = p.src;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <PriceBox>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Our Lowest Price with
          </Typography>
          <p className="condition-data">
            {cancelation && breakfast && payProp
              ? "Free Cancellation , Pay at the property & Free Breakfast"
              : cancelation && breakfast && !payProp
              ? "Free Cancellation & Free Breakfast"
              : cancelation && !breakfast && !payProp
              ? "Free Cancellation"
              : cancelation && !breakfast && payProp
              ? "Free Cancellation & Pay at the property"
              : !cancelation && breakfast && !payProp
              ? "Free Breakfast"
              : !cancelation && !breakfast && payProp
              ? "Free Cancellation , Pay at the property"
              : !cancelation && breakfast && payProp
              ? "Pay at the property & Free Breakfast"
              : ""}
          </p>

          <div className="price-logo">
            <p className="price-value">₹{price}</p>
            <p>{"/Night"}</p>

            <img className="logo-img" src={logo} alt="" />
          </div>
        </CardContent>
      </Card>
    </PriceBox>
  );
};

const PriceBox = styled.div`
  font-size: 14px;
  width: 90%;

  & :hover {
    background-color: #e4e4e4;
  }

  & .condition-data {
    display: inline-block;
    width: 100%;
    color: #428500;
    font-size: 14px;
    font-weight: 700;
  }
  & .price-logo {
    float: right;
    margin-top: 50px;
    text-align: right;
  }
  & .price-value {
    font-size: 18px;
    font-weight: 700;
  }
  & .logo-img {
    padding-top: 15px;
  }
`;
