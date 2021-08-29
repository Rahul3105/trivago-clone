import { TextField } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
export const BookingOverview = () => {
  
    return (
      <BookinBox>
        <h1 className="account-heading">Booking Overview</h1>
            <TextField
                className="overview-box"
          id="outlined-multiline-static"
          multiline
          rows={40}
          variant="outlined"
        />
      </BookinBox>
    );
}

const BookinBox = styled.div`
  width: 60%;
  margin:5% 2%;
  & .account-heading {
    font-size: 30px;
    margin: 4% 1%;
  }
  & .overview-box{
      height:70vh;
      width:96%;
      margin:1% auto;
      border-radius:10%;
  }
`;
