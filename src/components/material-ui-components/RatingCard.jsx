import CheckIcon from '@material-ui/icons/Check';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { useState } from 'react';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components'
import { priceFilter } from '../../store/actions';
import {useDispatch} from 'react-redux';
const useStyles = makeStyles({
    root: {
        minWidth: "250px",
        maxWidth: "250px",
        maxHeight: "200px",
        minHeight: "200px",
        boxShadow: "1px 1px 20px black",
        margin: "4rem auto",
        display: "grid",
        position: "absolute",
        top: "-6rem",
        left: "87rem",
        zIndex: "1",
        border:'1px solid lime'


    },
    ratingContent: {
        borderBottom: "1px solid black",
        display: "grid",
        gridTemplateColumns: "2fr 5fr 1fr",
        alignItems: "center",
        fontSize: "10px",
        fontWeight: "bold",
        backgroundColor: "rgb(235,236,237)",
        height: "40px"

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export function RatingCard() {
    const classes = useStyles();
    const [darkgreentick, setDarkgreentick] = useState(false)
    const [greenTick, setGreenTick] = useState(false)
    const [lightgreentick, setLightgreentick] = useState(false)
    const [coraltick, setCoraltick] = useState(false)
    const [redtick, setRedtick] = useState(false)
    const dispatch = useDispatch();
    const handledarkGreenHover = () => {
        setDarkgreentick(true)
    }
    const handlegreenHover = () => {
        setGreenTick(true)
        setDarkgreentick(true)
    }
    const handlelightgreyHover = () => {
        setLightgreentick(true)
        setGreenTick(true)
        setDarkgreentick(true)
    }
    const handlecoralHover = () => {
        setCoraltick(true)
        setLightgreentick(true)
        setGreenTick(true)
        setDarkgreentick(true)
    }
    const handleredHover = () => {
        setRedtick(true)
        setCoraltick(true)
        setLightgreentick(true)
        setGreenTick(true)
        setDarkgreentick(true)
    }
    // const handleMouseOUt = () => {
    //     setRedtick(false)
    //     setCoraltick(false)
    //     setLightgreentick(false)
    //     setGreenTick(false)
    // }
    const handleRatingSort = (rating) => {
        dispatch(priceFilter(rating, 'mumbai' , 'rating'))
    }
    return (
        <RatingWrapper>
            <Card className={classes.root} >
                <CardContent onMouseEnter={handledarkGreenHover} onClick={() => handleRatingSort(8.5)} className={darkgreentick ? `greenTicked ${classes.ratingContent}` : `${classes.ratingContent}`}>
                    <Grn backgroundColor="darkgreen" ><span>8.5</span></Grn>
                    <span>Excellent</span>
                    <CheckIcon />
                </CardContent>
                <CardContent onMouseEnter={handlegreenHover} onClick={() => handleRatingSort(8.0)} className={greenTick ? `greenTicked ${classes.ratingContent}` : `${classes.ratingContent}`}>
                    <Grn backgroundColor="green" ><span>8.0</span></Grn>
                    <span>Very good</span>
                    <CheckIcon />
                </CardContent>
                <CardContent onMouseEnter={handlelightgreyHover} onClick={() => handleRatingSort(7.5)} className={lightgreentick ? `greenTicked ${classes.ratingContent}` : `${classes.ratingContent}`}>
                    <Grn backgroundColor="lightgreen"><span>7.5</span></Grn>
                    <span>Good</span>
                    <CheckIcon />
                </CardContent>
                <CardContent onMouseEnter={handlecoralHover} onClick={() => handleRatingSort(7.0)} className={coraltick ? `greenTicked ${classes.ratingContent}` : `${classes.ratingContent}`} >
                    <Grn backgroundColor="rgb(252,158,21)" ><span>7.0</span></Grn>
                    <span>Fair</span>
                    <CheckIcon />
                </CardContent>
                <CardContent onMouseEnter={handleredHover} onClick={() => handleRatingSort(0)} className={redtick ? `greenTicked ${classes.ratingContent}` : `${classes.ratingContent}`} >
                    <Grn backgroundColor="red"><span>0</span></Grn>
                    <span>Okay</span>
                    <CheckIcon />
                </CardContent>

            </Card>
        </RatingWrapper>
    );
}




const Grn = styled.p`
width: 25px;
    height: 13px;
    background-color:${(props) => (props.backgroundColor)};
    border-radius: 10px;
    text-align:center;
    span{
  color: white;
    position: relative;
    top: 0px;
    font-weight: bold;
    font-size: 10px;
    }
    
`;

const RatingWrapper = styled.div`
    width: 300px;
    height: 300px;
    margin: auto;
    position: absolute;

    .MuiSvgIcon-root {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
    color: rgb(205,208,210);
}
.greenTicked{
  background-color:white;
    .MuiSvgIcon-root {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
    color: green;
}
}




`