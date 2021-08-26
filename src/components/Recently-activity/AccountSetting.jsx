import React from 'react'
import styled from 'styled-components'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));
export const AccountSetting = () => {
const classes = useStyles()
    return (
      <SettingBox>
        <h1 className="account-heading">Account Setting</h1>
        <p>Personal Information</p>

        <form className={classes.root} noValidate autoComplete="off">
          <Typography>First Name</Typography>
          <TextField id="outlined-basic" label="John" variant="outlined" />
          <Typography>Surname</Typography>
          <TextField id="outlined-basic" label="e.g. Smith" variant="outlined" />
        </form>
      </SettingBox>
    );
}

const SettingBox = styled.div`
width:60%;
border:1px solid yellow;
margin:2%;
justify-content:last baseline;

& .account-heading{
    font-size:30px;
}
`;