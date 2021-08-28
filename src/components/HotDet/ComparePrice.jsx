import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components'
const useStyles = makeStyles({
  root: {
        minWidth: 200,
        height: 250,
        borderRadius: "10%"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
      fontSize: 16,
      fontWeight:500
  },
  pos: {
    marginBottom: 12,
  },
});

export const ComparePrice = () => {
    const cancelation = true
    const payProp = true
    const breakfast = false
    const price = 2349
    const logo =
      "https://imgcy.trivago.com/e_trim,w_4096/e_vectorize:30:1.0:1.0:100:25,f_svg/ar_3:1,b_white,bo_2px_solid_white,c_pad,f_png,h_26,q_auto,w_96/partnerlogos-s3/395";
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
              Our Lowest Price
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

              <img
                className="logo-img"
                src={logo}
                alt=""
              />
            </div>
          </CardContent>
        </Card>
      </PriceBox>
    );
};



const PriceBox = styled.div`
  font-size: 16px;
  width: 15%;
  margin: 2%;

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
    margin-top: 35%;
    text-align: right;
  }
  & .price-value {
    font-size: 20px;
    font-weight: 700;
  }
`;
