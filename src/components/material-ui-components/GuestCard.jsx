import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { white } from "@material-ui/core/colors";
import { useState, useRef, useEffect } from "react";
import { Select } from "@material-ui/core";
const useStyles = makeStyles({
    root: {
        position: "absolute",
        minWidth: "300px",
        maxWidth: "350px",
        maxHeight: "auto",
        top: "19rem",
        right: "31rem",
    },
    content: {
        display: "grid",
        gridTemplateColumns: "1fr",
        alignItems: "center",
        gridGap: "1rem",
    },
    content2: {
        display: "grid",
        gridTemplateColumns: "1fr",
        alignItems: "center",
        gridGap: "1rem",
        borderTop: "1px solid black",
    },
    btnInput: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function GuestCard() {
    const classes = useStyles();
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);
    const [state, setState] = useState({});
    const [childrenValues, setChildrenValues] = useState([]);
    const [childrenArr, setChildrenArr] = useState([]);
    const reference = useRef(state);
    const handleAdultsChange = (e) => {
        setAdults(e.target.value);
    };

    const handleAdultsAdd = () => {
        setAdults(Number(adults) + 1);
    };
    const handleAdultsReduce = () => {
        setAdults(Number(adults) - 1);
    };
    const handleChildrenChange = (e) => {
        setChildren(e.target.value);
        setChildrenArr(new Array(children + 1).fill(0));
    };
    const handleChildrenAdd = () => {
        setChildren(Number(children) + 1);
        setChildrenArr(new Array(children + 1).fill(0));
    };
    const handleChildrenReduce = () => {
        setChildren(Number(children) - 1);
        setChildrenArr(new Array(children - 1).fill(0));
    };
    const handleRoomsChange = (e) => {
        setRooms(e.target.value);
    };
    const handleRoomsAdd = () => {
        setRooms(Number(rooms) + 1);
    };
    const handleRoomsReduce = () => {
        setRooms(Number(rooms) - 1);
    };
    const handleReset = () => {
        setAdults(2);
        setRooms(1);
        setChildren(0);
        setChildrenArr(new Array(0).fill(0));
    };
    const handleChildrenAge = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
        console.log(state);
        setChildrenValues([...childrenValues, state]);
    };
    useEffect(() => {
        console.log(state);
    }, [state]);
    // console.log(childrenValues)
    // console.log(childrenArr)
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <PeoplesWrapper>
                    <div className="peoplesSpan">
                        <span>Adults</span>
                    </div>
                    <div className="btnInput">
                        <div>
                            <Button
                                disabled={adults === 1}
                                onClick={handleAdultsReduce}
                                style={{
                                    maxWidth: "35px",
                                    maxHeight: "35px",
                                    minWidth: "35px",
                                    minHeight: "35px",
                                    border: "1px solid black",
                                    borderRadius: "5rem",
                                }}
                            >
                                <RemoveIcon fontSize="large" />
                            </Button>
                        </div>
                        <div>
                            <input
                                onChange={handleAdultsChange}
                                value={adults.toString()}
                                type="text"
                            />
                        </div>
                        <div>
                            <Button
                                onClick={handleAdultsAdd}
                                style={{
                                    maxWidth: "35px",
                                    maxHeight: "35px",
                                    minWidth: "35px",
                                    minHeight: "35px",
                                    border: "1px solid black",
                                    borderRadius: "5rem",
                                }}
                            >
                                <AddIcon fontSize="large" />
                            </Button>
                        </div>
                    </div>
                </PeoplesWrapper>
                <PeoplesWrapper>
                    <div className="peoplesSpan">
                        <span>Children</span>
                    </div>
                    <div className="btnInput">
                        <div>
                            <Button
                                disabled={children === 0}
                                onClick={handleChildrenReduce}
                                style={{
                                    maxWidth: "35px",
                                    maxHeight: "35px",
                                    minWidth: "35px",
                                    minHeight: "35px",
                                    border: "1px solid black",
                                    borderRadius: "5rem",
                                }}
                            >
                                <RemoveIcon fontSize="large" />
                            </Button>
                        </div>
                        <div>
                            <input
                                onChange={handleChildrenChange}
                                value={children}
                                type="text"
                            />
                        </div>
                        <div>
                            <Button
                                onClick={handleChildrenAdd}
                                style={{
                                    maxWidth: "35px",
                                    maxHeight: "35px",
                                    minWidth: "35px",
                                    minHeight: "35px",
                                    border: "1px solid black",
                                    borderRadius: "5rem",
                                }}
                            >
                                <AddIcon fontSize="large" />
                            </Button>
                        </div>
                    </div>
                </PeoplesWrapper>
                <PeoplesWrapper>
                    <div className="peoplesSpan">
                        <span>Rooms</span>
                    </div>
                    <div className="btnInput">
                        <div>
                            <Button
                                disabled={rooms === 1}
                                onClick={handleRoomsReduce}
                                variant="outlinedt"
                                style={{
                                    maxWidth: "35px",
                                    maxHeight: "35px",
                                    minWidth: "35px",
                                    minHeight: "35px",
                                    border: "1px solid black",
                                    borderRadius: "5rem",
                                }}
                            >
                                <RemoveIcon fontSize="large" />
                            </Button>
                        </div>
                        <div>
                            <input onChange={handleRoomsChange} value={rooms} type="text" />
                        </div>
                        <div>
                            <Button
                                onClick={handleRoomsAdd}
                                style={{
                                    maxWidth: "35px",
                                    maxHeight: "35px",
                                    minWidth: "35px",
                                    minHeight: "35px",
                                    border: "1px solid black",
                                    borderRadius: "5rem",
                                }}
                            >
                                <AddIcon fontSize="large" />
                            </Button>
                        </div>
                    </div>
                </PeoplesWrapper>
            </CardContent>
            <CardContent className={classes.content2}>
                <ChildrenWrapper>
                    {childrenArr.map((el, index) => {
                        console.log(index);
                        return (
                            <select
                                onChange={handleChildrenAge}
                                defaultValue={6}
                                name={`${index + 1}select`}
                            >
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                                <option value={13}>13</option>
                                <option value={14}>14</option>
                                <option value={15}>15</option>
                                <option value={16}>16</option>
                                <option value={17}>17</option>
                            </select>
                        );
                    })}
                </ChildrenWrapper>
                <BtnsWrapper>
                    <div>
                        <button onClick={handleReset} className="muiBtn1">
                            Reset
                        </button>
                    </div>
                    <div>
                        <button className="muiBtn2">Apply</button>
                    </div>
                </BtnsWrapper>
            </CardContent>
        </Card>
    );
}

const PeoplesWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 1fr;
  .peoplesSpan {
    span {
      font-size: 13px;
      font-weight: bold;
    }
  }
  .btnInput {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 1rem;
    input {
      width: 35px;
      height: 35px;
      border-radius: 7px;
      text-align: center;
    }
  }
`;
const BtnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & > div:nth-child(1) {
    justify-content: start;
  }
  & > div:nth-child(2) {
    text-align: end;
  }
  .muiBtn1 {
    width: 7rem;
    padding: 0.8rem;
    background-color: white;
    border: 1px solid rgb(10, 17, 33);
    color: rgb(10, 17, 33);
    border-radius: 10px;
    outline: none;
    font-size: 14px;
    font-weight: bold;
    :hover {
      background-color: gray;
      color: white;
      border: none;
    }
  }
  .muiBtn2 {
    width: 7rem;
    padding: 0.8rem;
    background-color: white;
    background-color: #007fad;
    border: 1px solid #007fad;
    border-bottom-color: #005f81;
    color: white;
    border-radius: 10px;
    outline: none;
    font-size: 14px;
    font-weight: bold;
    :hover {
      border: none;
      background-color: #005f81;
      cursor: pointer;
    }
  }
`;
const ChildrenWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  select {
    height: 4rem;
    border-radius: 1rem;
    text-align: center;
  }
`;
