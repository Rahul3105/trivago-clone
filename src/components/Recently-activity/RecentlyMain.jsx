import { Button, Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { RecentlyContent } from './RecentlyContent';
import RecentlyViewed from './RecentlyViewed';
import { getAllDetails } from '../../store/actions';
import { AccountSetting } from './AccountSetting';
export const RecentlyMain = () => {
     const dispatch = useDispatch()
     const { data, isLoading, isError } = useSelector(
       (state) => state.activities,
       shallowEqual
    );
     const handleAllDetails = () => {
       dispatch(getAllDetails);
     };
     useEffect(() => {
       handleAllDetails();
     }, []);
    return (
      <RecentlyBox>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <RecentlyContent />
          </Grid>

          <Grid item xs={8}>
            {data.map((item) => (
              <RecentlyViewed item={item} key={item.id} />
            ))}
            <ButtonPart>
              <Button variant="outlined">Show Fewer</Button>
              <Typography className="clear-link">
                Clear recently viewed
              </Typography>
            </ButtonPart>
            <hr style={{width:"70%"}}/>
            <AccountSetting />
          </Grid>
        </Grid>
      </RecentlyBox>
    );
}

const RecentlyBox = styled.div`
width:96%;
margin:2% auto;
border:1px solid red;
`
const ButtonPart = styled.div`
  width: 60%;
  margin: 4% 2%;
  display: flex;

  & .clear-link {
    margin-left: 50%;
    margin-top: 1%;
    color: #808080;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    
  }
`;