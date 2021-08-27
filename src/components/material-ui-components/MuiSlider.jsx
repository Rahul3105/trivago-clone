import React from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

import styled from 'styled-components'
const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2
  },
  margin: {
    height: theme.spacing(3)
  }
}));



const PrettoSlider = withStyles({
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
  }
})(Slider);

export default function MuiSlider({forRatingBar}) {
  const classes = useStyles();

  return (
    <StyledMuiSlider className={classes.root}>
      {!forRatingBar && <Typography gutterBottom>Price / night</Typography>}
      <PrettoSlider  disabled aria-label="pretto slider" defaultValue={10} className='customized'/>
    </StyledMuiSlider>
  );
}

const StyledMuiSlider = styled.div`
  border:1px solid lime;
  height: 40px;
`