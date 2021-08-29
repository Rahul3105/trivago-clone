import { Box, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Redirect, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
        fontSize: "16px"
  },
}));

export const RecentlyContent = () => {
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);  
    const classes = useStyles();
const history = useHistory()
    const handleBack = () => {
        history.goBack();
    }
    return (
      <ContentBox>
        <Box className="back-button" onClick={handleBack}>
          <ArrowBackIosIcon />
          <p className="back-text">Back</p>
        </Box>
        <List className={classes.root}>
          <ListItem button  className="content-item">
            <p className={classes.root}>Recently View</p>
          </ListItem>
          <ListItem button  className="content-item">
            <p className={classes.root}>Account setting</p>
          </ListItem>
          <ListItem button  className="content-item">
            <p className={classes.root}>Booking overview</p>
          </ListItem>
        </List>
      </ContentBox>
    );
}

const ContentBox = styled.div`
font-size:16px !important;
margin-left:15%;
margin-top:2%;
padding:24px 30px;
height:40vh;
position:fixed;
width:17%;

& .back-button{
    display:flex;
    color: blue;
    text-align:center;
    margin:4%;
    margin-left:6%;
}
& .back-text{
    color:blue;
    font-size:13px;
     :hover{
         cursor: pointer;
         text-decoration:underline;
     }
}
& .content-item{
    /* border:1px solid red; */
    width:96%;
    margin:3% auto;
    height:6rem;
}

`;