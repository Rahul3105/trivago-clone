import React from 'react'
import styled from 'styled-components'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
          width: "90%",
      boderRadius:"10%"
    },
  },
}));
export const AccountSetting = () => {
const classes = useStyles()
    return (
      <SettingBox>
        <h1 className="account-heading">Account Setting</h1>
        <p className="form-heading">Personal Information</p>

        <form className={classes.root} noValidate autoComplete="off">
          <Typography className="label-name">First Name</Typography>
          <TextField
            className="placeholder-data"
            id="outlined-basic"
            label="John"
            variant="outlined"
          />
          <Typography className="label-name">Surname</Typography>
          <TextField
            className="placeholder-data"
            id="outlined-basic"
            label="e.g. Smith"
            variant="outlined"
          />
        </form>
        <ButtonPart2 classname="button-part">
          <Button
            className="account-button"
            variant="contained"
            component="span"
          >
            Update Personal Information
          </Button>
          <Typography className="clear-link">Delete my account</Typography>
        </ButtonPart2>
      </SettingBox>
    );
}

const SettingBox = styled.div`
  width: 60%;
  margin:4% 2%;
  justify-content: last baseline;

  & .account-heading {
    font-size: 30px;
    margin: 4% 1%;
  }
  & .form-heading {
    font-size: 16px;
    margin: 2% 1%;
  }
  & .label-name {
    font-size: 14px;
    font-weight: 600;
    margin: 1%;
  }
  & .placeholder-data {
    font-size: 16px;
  }
  & .account-button {
    font-size: 16px;
    font-weight: 600;
    background-color: #007fad;
    border: 1px solid #007fad;
    border-bottom-color: #005f81;
    border-radius:5%;
    color: white;
  }
 `
     const ButtonPart2 = styled.div`
       width: 100%;
       margin: 4% 2%;
       display: flex;

         & .clear-link {
    margin-left: 15%;
    margin-top: 1%;
    color: #808080;
    font-size: 14px;
         }
     `;
 