import React from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2
  },
  margin: {
    height: theme.spacing(3)
  }
}));



const PrettoSlider = withStyles({
  root: {
    color: "#2bb4e6 !important",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
    },
    check : {
        border: '1px solid lime',
        color:'red'
    }
})(Slider);

export default function MuiSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom>Price / night</Typography>
      <PrettoSlider aria-label="pretto slider" defaultValue={10} className={classes.check}/>
    </div>
  );
}
