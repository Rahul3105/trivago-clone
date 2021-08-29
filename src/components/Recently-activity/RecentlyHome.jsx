import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../store/actions';
import RecentlyData from './RecentlyData';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

export const RecentlyHome = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useSelector(
    (state) => state.activities,
    shallowEqual
  );
  const handleActivities = () => {
    dispatch(getDetails)
  }
  useEffect(() => {
    handleActivities()
  }, [])

  const handleRecentlyMain = () => {
    history.push("/recentlyMain");
  }

  if (isLoading) {
    return (
      <div>
        <Typography>
          ...Loading the data
        </Typography>
      </div>
    )
  }
  if (isError) {
    return (
      <div>
        <Typography>Can not read the data</Typography>
      </div>
    );
  }
  return (
    <ActivityHome>
      <h2 className="activity-heading">Your recent activity</h2>
      <div className="dataa">
        {data.map((item) => (
          <RecentlyData data={item} key={item.id} />
        ))}
      </div>
      <Typography onClick={handleRecentlyMain} className="activity-seeAll">
        See all
      </Typography>
    </ActivityHome>
  );
}

const ActivityHome = styled.div`
  width: 55%;
  min-width: 500px;
  padding-left: 9rem;
  & .activity-heading {
    margin: 4% 25%;
    font-size: 20px;
  }
  & .dataa {
    margin:4% ;
    margin-left:-20%;
  }
  & .activity-seeAll {
    margin: 2% 25%;
    font-size: 14px;

    color: blue;
    cursor: pointer;
  }
`;