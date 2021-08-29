import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { BtnsWrapper } from "./GuestCard";
import styled from 'styled-components'
const useStyles = makeStyles({
    root: {
        maxWidth: "300px",
        minWidth: "300px",
        height: "auto",
        margin: "4rem auto",
        display: "grid",
        color: "rgb(10,17,33)",
        fontSize: "13px",
        fontWeight: "bold",
        boxShadow: "1px 1px 20px black",
        borderradius: "1rem",
        position: "absolute",
        top: "15rem",
        right: "29rem",
        zIndex: "1",
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
export const PrettoSlider = withStyles({
    root: {
        color: 'rgb(0,127,173)',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 5,
        borderRadius: 4,
    },
    rail: {
        height: 5,
        borderRadius: 4,
    },
})(Slider);
export function LocationCard({ setPlace, location }) {
    const [distance, setDistance] = useState(20)
    const [selectLocation, setSelectLocation] = useState("city center")
    const [locationInput, setLocationInput] = useState("")
    const classes = useStyles();

    const getDistance = (e, value) => {
        setDistance(value)
    }
    const handleLocationInput = (e) => {
        setLocationInput(e.target.value)
    }
    const handleResetLocation = () => {
        setDistance(20)
        setLocationInput("")
        setSelectLocation("city center")
    }
    const handleSelectLocation = (e) => {
        setSelectLocation(e.target.value)
    }
    const handlePlace = () => {
        setPlace(selectLocation)
    }
    return (
        <Card className={classes.root}>
            <CardContent>
                <div><span>Find me a stay close to...</span></div>
            </CardContent>
            <CardContent>

                <div><span>This popular site:</span></div>
                <LocationSelectWrapper><select value={selectLocation} onChange={handleSelectLocation} defaultValue={selectLocation} name="location">
                    {location.toString().toLowerCase() === "mumbai" ? Mumbai.map((el) => {
                        return <option value={el}>{el}</option>
                    }) : location.toString().toLowerCase() === "delhi" ? delhi.map((el) => {
                        return <option value={el}>{el}</option>
                    }) : location.toString().toLowerCase() === "dubai" ? dubai.map((el) => {
                        return <option value={el}>{el}</option>
                    }) : <><option value="india gate">India Gate</option>

                        <option value="delhi junction railway station">Delhi Junction Railway Station</option>
                        <option value="jantar mantar">Jantar mantar</option>
                        <option value="jama masjid">Jama masjid</option>
                        <option value="lodi garderns">Lodi Gardens</option>
                        <option value="national rail museum">National Rail Museum</option>
                        <option value="presidential palace">Presidential Palace</option></>}

                </select></LocationSelectWrapper>
            </CardContent>
            <CardContent>
                <div><span>Or this address:</span></div>
                <LocationSearchWrapper>
                    <input value={locationInput} onChange={handleLocationInput} placeholder="Enter street address/postcode" type="text" />
                    <SearchIcon className="searchIcon" fontSize="large" color="gray" />
                </LocationSearchWrapper>
            </CardContent>
            <CardContent>
                <div style={{ textAlign: 'end' }}><span>{distance}km</span></div>
                <PrettoSlider step={0.1} onChange={getDistance} max={20} aria-label="pretto slider" value={distance} defaultValue={20} />
            </CardContent>
            <CardContent>

                <BtnsWrapper >
                    <div>
                        <button onClick={handleResetLocation} className="muiBtn1">
                            Reset
                        </button>
                    </div>
                    <div>
                        <button className="muiBtn2" onClick={handlePlace}>Done</button>
                    </div>
                </BtnsWrapper>

            </CardContent>
        </Card >
    );
}
const LocationSelectWrapper = styled.div`

width: 100%;
height: 35px;
margin-top:1rem;
select{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 7px;
    :hover{
        outline:1px dotted black;
    }
}
option{
    height: 30px;
}



`
const LocationSearchWrapper = styled.div`
width: 100%;
height: 35px;
border: 1px solid black;
display:grid;
grid-template-columns: 4fr 1fr;
padding: 7px;
margin-top:1rem;
      border-radius: 5px;
      :hover{
                outline:1px dotted black;
      }
input{
outline: none;
border:none;
height: 100%;


}
.searchIcon{
      position: relative;
    left: 2.4rem;


.MuiSvgIcon-root {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
    color: gray;
}
}



`


const Mumbai = ["city center", "Guru Nanak Nagar", "Sahar Airport", "Ghatkopar", "Juhu Tara", "Kurla", ""]


const delhi = ["Aerocity", "indira Gandhi International Airport", "Rajiv Chowk Metro Station", "Bangla Sahib Gurdwara", "India Gate", " Red Fort - Lal Qila", "Lodhi Garder"]

const dubai = ["Al Garhoud", "Al Barsha Dubai", "Bur Dubai"]