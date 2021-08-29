import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
import Map from "../Map/StaticMap";

const Amenity = ({ x }) => {
  const [sho, setSho] = useState(false);
  const [pol, setPol] = useState(false);
  const [load, setLoad] = useState(true);
  //console.log(p.me);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, Math.random() * 3000);
  }, []);

  return load ? (
    <Big>
      <h3>
        <Skeleton animation="wave" width="30%" />
      </h3>
      <p>
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" width="60%" />
      </p>
      <div></div>
      <div></div>
      <div>
        <Amen>
          <Skeleton
            variant="rect"
            width={"100%"}
            height={50}
            animation="wave"
          />
        </Amen>
        <Amen>
          <Skeleton
            variant="rect"
            width={"100%"}
            height={50}
            animation="wave"
          />
        </Amen>
        <Amen>
          <Skeleton
            variant="rect"
            width={"100%"}
            height={50}
            animation="wave"
          />
        </Amen>
        <Amen>
          <Skeleton
            variant="rect"
            width={"100%"}
            height={50}
            animation="wave"
          />
        </Amen>
        <Amen>
          <Skeleton
            variant="rect"
            width={"100%"}
            height={50}
            animation="wave"
          />
        </Amen>
        <Amen>
          <Skeleton
            variant="rect"
            width={"100%"}
            height={50}
            animation="wave"
          />
        </Amen>
        <Amen>
          <Skeleton
            variant="rect"
            width={"100%"}
            height={50}
            animation="wave"
          />
        </Amen>
        <Amen>
          <Skeleton
            variant="rect"
            width={"100%"}
            height={50}
            animation="wave"
          />
        </Amen>
        <Amen>
          <Skeleton
            variant="rect"
            width={"100%"}
            height={50}
            animation="wave"
          />
        </Amen>
        <Amen>
          <Skeleton
            variant="rect"
            width={"100%"}
            height={50}
            animation="wave"
          />
        </Amen>
      </div>
    </Big>
  ) : (
    <>
      <Big>
        <Map w={980} h={300} lat={x.map[0]} long={x.map[1]} />
        <h3>About {x.name} </h3>
        <p>{x.about}</p>
        <h3>Top Amenities</h3>
        <div>
          <Amen>
            <Wifi />
            <p style={{ color: x.topAmenities[0] ? "" : "rgb(194,196,200)" }}>
              WiFi in Lobby
            </p>
          </Amen>
          <Amen>
            <Wifi />
            <p style={{ color: x.topAmenities[1] ? "" : "rgb(194,196,200)" }}>
              WiFi in Room
            </p>
          </Amen>
          <Amen>
            <Pool />
            <p style={{ color: x.topAmenities[2] ? "" : "rgb(194,196,200)" }}>
              Pool
            </p>
          </Amen>
          <Amen>
            <Spa />
            <p style={{ color: x.topAmenities[3] ? "" : "rgb(194,196,200)" }}>
              Spa
            </p>
          </Amen>
          <Amen>
            <Park />
            <p style={{ color: x.topAmenities[4] ? "" : "rgb(194,196,200)" }}>
              Parking
            </p>
          </Amen>
          <Amen>
            <Pets />
            <p style={{ color: x.topAmenities[5] ? "" : "rgb(194,196,200)" }}>
              Pets
            </p>
          </Amen>
          <Amen>
            <AC />
            <p style={{ color: x.topAmenities[6] ? "" : "rgb(194,196,200)" }}>
              AC
            </p>
          </Amen>
          <Amen>
            <Resto />
            <p style={{ color: x.topAmenities[7] ? "" : "rgb(194,196,200)" }}>
              Restaurant
            </p>
          </Amen>
          <Amen>
            <HotBar />
            <p style={{ color: x.topAmenities[8] ? "" : "rgb(194,196,200)" }}>
              Hotel Bar
            </p>
          </Amen>
          <Amen>
            <Gym />
            <p style={{ color: x.topAmenities[9] ? "" : "rgb(194,196,200)" }}>
              Gym
            </p>
          </Amen>
        </div>
        {sho && <AllAm x={x} />}
        <h5 onClick={() => setSho((p) => !p)}>
          {!sho ? "+ Show" : "- Hide "}All Amenities
        </h5>
        {pol && (
          <Poll>
            <h3>Arrival / Departure</h3>
            <p>Check-In : 14:00</p>
            <p>Check-Out : 12:00</p>
            <h3>Contact</h3>
            <p>Sahar, Andheri, 400059, Mumbai, India</p>
            <p>Telephone: +91 (22) 6691 1234 | Fax: +91 (22) 6691 1212</p>
            <h3></h3>
          </Poll>
        )}
        <Butt onClick={() => setPol((p) => !p)}>
          {!pol ? "Show" : "Hide"} Hotel Policies
        </Butt>
      </Big>
    </>
  );
};

export default Amenity;

const AllAm = ({ x }) => {
  console.log(x.allAmenities.hotel);
  return (
    <Hold>
      <h3>All Amenities</h3>
      <div>
        <div>
          <ul>Hotel Facilities</ul>
          {x.allAmenities.hotel.map((item) => (
            <li>{item}</li>
          ))}
        </div>
        <div>
          <ul>Room Facilities</ul>
          {x.allAmenities.room.map((item) => (
            <li>{item}</li>
          ))}
        </div>
        <div>
          <ul>Wellness / Spa</ul>
          {x.allAmenities.spa.map((item) => (
            <li>{item}</li>
          ))}
          <ul>Accessability</ul>
          {x.allAmenities.accessability.map((item) => (
            <li>{item}</li>
          ))}
          <ul>For Children</ul>
          {x.allAmenities.children.map((item) => (
            <li>{item}</li>
          ))}
        </div>
      </div>
    </Hold>
  );
};
const Hold = styled.div`
  padding: 15px;
  > h3 {
    padding: 10px 10px 0;
    font-size: 16px;
    margin-bottom: 10px;
  }
  > div {
    display: flex;
    > div {
      width: 32%;
      margin: 0.5%;
      * {
        font-size: 14px;
      }
      > ul {
        padding: 15px 0 10px;
      }
      li {
        padding: 5px 10px;
      }
    }
  }
`;
const Poll = styled.div`
  > h3 {
    padding: 15px 10px 8px;
    font-size: 14px;
    margin-bottom: 10px;
  }
  > p {
    align-self: center;
    font-size: 13px;
    padding: 0px 10px;
    color: rgb(55, 69, 77);
    word-break: break-word;
    word-wrap: break-word;
    line-height: 1.6;
    font-weight: 500;
  }
`;
const Big = styled.div`
  max-width: 1000px;
  padding: 10px;
  background-color: white;
  border: 1px solid rgb(205, 208, 210);
  margin: 10px auto;
  border-radius: 15px;
  > h3 {
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
  }
  > p {
    align-self: center;
    font-size: 14px;
    padding: 15px;
    color: rgb(55, 69, 77);
    word-break: break-word;
    word-wrap: break-word;
    line-height: 1.6;
    font-weight: 400;
  }
  > :nth-child(5) {
    display: flex;
    flex-wrap: wrap;
  }
  > h5 {
    color: rgb(74, 164, 197);
    font-size: 13px;
    cursor: pointer;
    font-weight: 500;
    padding: 15px 10px;
  }
`;
const Amen = styled.div`
  display: flex;
  width: 18%;
  margin: 1%;
  padding: 10px;

  > p {
    align-self: center;
    padding-left: 30px;
    font-size: 13px;
  }
`;
const Butt = styled.button`
  width: 100%;
  padding: 6px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 1px solid rgb(205, 208, 210);
`;
const Wifi = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      tabindex="-1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g class="svg-color--primary" fill="#37454D">
        <path d="M12.1 5C8.2 5 4.7 6.6 2.2 9.1l.7.7C5.3 7.5 8.5 6 12.1 6s6.8 1.5 9.2 3.8l.7-.7C19.5 6.6 16 5 12.1 5z"></path>
        <path d="M4.3 11.2l.7.7C6.8 10.1 9.3 9 12.1 9s5.3 1.1 7.1 2.9l.7-.7c-2-2-4.7-3.2-7.8-3.2s-5.8 1.2-7.8 3.2z"></path>
        <path d="M6.5 13.4l.6.6c1.3-1.3 3-2 5-2s3.7.8 5 2l.7-.7c-1.4-1.5-3.4-2.4-5.6-2.4s-4.3 1-5.7 2.5zm2.1 2.1l.7.7c.7-.7 1.7-1.2 2.8-1.2s2.1.5 2.8 1.2l.7-.7c-.9-.9-2.2-1.5-3.5-1.5s-2.6.6-3.5 1.5z"></path>
        <circle cx="12.1" cy="18" r="1"></circle>
      </g>
    </svg>
  );
};
const Pool = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      tabindex="-1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M16.2 16.1c.2.2.5.2.7 0 .2-.2.2-.5 0-.7-1.2-1.1-2.5-1.1-3.7 0-.8.8-1.5.8-2.3 0-1.2-1.2-2.5-1.2-3.7 0-.2.2-.2.5 0 .7s.5.2.7 0c.8-.8 1.5-.8 2.3 0 .6.6 1.2.9 1.9.9.6 0 1.2-.3 1.8-.9.7-.8 1.4-.8 2.3 0zm-6.1 2.3c-.8.8-1.5.8-2.3 0-1.2-1.2-2.5-1.2-3.7 0-.2.2-.2.5 0 .7s.5.2.7 0c.8-.8 1.5-.8 2.3 0 .7.6 1.3.9 1.9.9.6 0 1.2-.3 1.8-.9.2-.2.2-.5 0-.7-.1-.2-.5-.2-.7 0zm9.7 0c-1.2-1.1-2.5-1.1-3.7 0-.8.8-1.5.8-2.3 0-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7.6.6 1.2.9 1.9.9.6 0 1.2-.3 1.8-.9.8-.8 1.5-.8 2.3 0 .2.2.5.2.7 0 .3-.2.2-.5 0-.7zM7.5 14c.3 0 .5-.2.5-.5V12h7v1.5c0 .3.2.5.5.5s.5-.2.5-.5v-9c0-.3.2-.5.5-.5s.5.2.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.8-.7-1.5-1.5-1.5S15 3.7 15 4.5V8H8V4.5c0-.3.2-.5.5-.5s.5.2.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2C10 3.7 9.3 3 8.5 3S7 3.7 7 4.5v9c0 .3.2.5.5.5zM8 9h7v2H8V9z"
        fill="#37454D"
      ></path>
    </svg>
  );
};
const Spa = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      tabindex="-1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        class="svg-color--primary"
        fill="#37454D"
        d="M17 12.5c0 .3-.1.7-.2 1 2.8.6 4.2 1.7 4.2 2.5 0 1.2-3.5 3-9 3s-9-1.8-9-3c0-.8 1.5-1.8 4.2-2.5-.1-.3-.2-.6-.2-1-3 .7-5 2-5 3.5 0 2.2 4.5 4 10 4s10-1.8 10-4c0-1.5-2-2.8-5-3.5z"
      ></path>
      <path
        class="svg-color--primary"
        fill="#37454D"
        d="M8.2 13.3c0 .1 0 .1 0 0 0 .1.1.2.1.3.1.2.2.4.3.5.1.1.1.2.2.2.1.2.2.3.4.5 0 .2.1.2.2.3l.2.2c.1.1.2.1.3.2.2.1.4.2.7.3.1 0 .1 0 .2.1.1 0 .2 0 .3.1s.2 0 .3.1h1.4c.1 0 .2 0 .3-.1s.2 0 .3-.1c.1 0 .1 0 .2-.1.2-.1.5-.2.7-.3.1-.1.2-.1.3-.2.1 0 .1-.1.2-.2s.2-.1.2-.2c.2-.2.4-.4.6-.7.1-.1.1-.3.2-.4s.1-.3.2-.4c.1-.3.2-.6.2-1v-.3c0-.2-.1-1.3-1.2-2.6-1.3-1.8-1.9-2.8-1.9-2.8L12 5l-.9 1.5s-.6 1.1-1.9 2.9C8.1 10.8 8 11.8 8 12v.4c0 .3.1.6.2.9zM10 10c1.4-1.9 2-3 2-3s.6 1.1 2 3c1 1.2 1 2 1 2v.2c0 .8-.3 1.4-.7 1.9-.6.6-1.4.9-2.3.9s-1.7-.3-2.2-.9c-.5-.5-.8-1.1-.8-1.9V12s0-.8 1-2z"
      ></path>
      <path
        class="svg-color--primary"
        fill="#37454D"
        d="M5 16c0 .6 0 2 7 2s7-1.4 7-2c0-.4 0-1.2-2.5-1.7-.1.1-.1.3-.2.4l-.3.5-.1.1c1.3.2 2.1.5 2.1.8 0 .5-2.5 1-5.7 1H12c-3.3 0-6-.4-6-1 0-.3.8-.6 2.1-.8 0-.1-.1-.2-.1-.3-.1-.1-.2-.3-.2-.4-.1-.1-.1-.2-.2-.3C5 14.8 5 15.6 5 16z"
      ></path>
    </svg>
  );
};
const Park = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      tabindex="-1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g class="svg-color--primary" fill="#37454D">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 19c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"></path>
        <path d="M13 5H9.5c-.3 0-.5.2-.5.5v12.9c0 .4.2.6.5.6s.5-.2.5-.5V13h3c2.2 0 4-1.8 4-4s-1.8-4-4-4zm0 7h-3V6h3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path>
      </g>
    </svg>
  );
};
const Pets = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      tabindex="-1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 11c-3.5 0-6 3-6 7.2 0 1 0 2.8 1.8 2.8.6 0 1.3-.4 2-.8s1.6-1 2.3-1c.7 0 1.6.5 2.3 1 .7.4 1.4.8 2 .8 1.7 0 1.7-1.7 1.7-2.8C18 14 15.5 11 12 11zm4.3 9c-.9 0-2.6-1.8-4.3-1.8S8.6 20 7.8 20c-.6 0-.8-.2-.8-1.8 0-4 2.2-6.2 5-6.2s5 2.2 5 6.2c0 1.6-.2 1.8-.7 1.8zm-2-10.1c.2 0 .3.1.5.1 1.2 0 2.3-1 2.6-2.4.4-1.6-.4-3.2-1.7-3.5-.2 0-.3-.1-.5-.1-1.2 0-2.3 1-2.6 2.4-.4 1.7.4 3.2 1.7 3.5zm-.7-3.2c.2-1 .9-1.6 1.7-1.6h.3c.8.2 1.2 1.2 1 2.3-.2 1-.9 1.6-1.7 1.6h-.3c-.8-.2-1.3-1.3-1-2.3zM9.2 10h.4c.6-.1 1.1-.5 1.4-1 .4-.7.6-1.6.4-2.4-.3-1.4-1.4-2.5-2.6-2.5h-.4c-.5.1-1.1.5-1.4 1-.4.7-.6 1.5-.4 2.4C6.9 9 8 10 9.2 10zm-.6-4.9h.2c.7 0 1.4.7 1.6 1.7.2 1.1-.3 2.1-1.1 2.2h-.1c-.7 0-1.5-.7-1.6-1.7-.3-1.1.2-2.1 1-2.2zm-1.5 7.1c.2-.8.1-1.7-.3-2.5C6.3 8.7 5.3 8 4.2 8c-.4 0-.7.1-1 .3-.5.3-.9.8-1.1 1.4-.2.8-.1 1.7.3 2.5.6 1 1.6 1.6 2.6 1.6.4 0 .7-.1 1-.3.6-.2 1-.7 1.1-1.3zm-1.5.5c-.2.1-.4.1-.6.1-.6 0-1.3-.4-1.7-1.2-.5-1-.4-2.1.4-2.5.2 0 .3-.1.5-.1.7 0 1.4.5 1.8 1.2.5 1 .3 2.1-.4 2.5zm16.5-3c-.2-.6-.6-1.1-1.1-1.4-.3-.2-.6-.3-1-.3-1 0-2 .7-2.6 1.7-.4.8-.5 1.7-.3 2.5.2.6.6 1.1 1.1 1.4.3.2.7.3 1 .3 1 0 2-.7 2.6-1.7.5-.9.6-1.8.3-2.5zM21 11.6c-.4.7-1.1 1.2-1.7 1.2-.2 0-.4 0-.6-.1-.7-.4-.9-1.5-.4-2.5.4-.7 1.1-1.2 1.7-1.2.2 0 .4 0 .6.1.7.5.9 1.6.4 2.5z"
        fill="#37454D"
      ></path>
    </svg>
  );
};
const AC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      tabindex="-1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        class="svg-color--primary"
        fill="#37454D"
        d="M21.345 12.736l-4.766 1.228L13.04 12l3.538-1.963 4.766 1.228a.524.524 0 00.637-.354.495.495 0 00-.367-.61l-3.76-.97 2.967-1.646a.49.49 0 00.19-.684.53.53 0 00-.71-.183l-2.967 1.646 1.008-3.615a.481.481 0 00-.05-.38.525.525 0 00-.317-.232.524.524 0 00-.637.354L16.06 9.17l-3.54 1.964V7.207l3.49-3.354a.487.487 0 000-.707.536.536 0 00-.736 0L12.52 5.793V2.5c0-.276-.232-.5-.52-.5s-.52.224-.52.5v3.293L8.726 3.146c-.203-.195-.532-.195-.736 0s-.203.512 0 .707l3.49 3.354v3.927L7.94 9.17 6.665 4.59a.523.523 0 00-.637-.354.5.5 0 00-.368.612l1.007 3.615L3.7 6.817A.53.53 0 002.99 7a.488.488 0 00.19.683L6.147 9.33l-3.76.97a.498.498 0 00-.37.61c.076.268.36.426.638.355l4.766-1.228L10.96 12l-3.538 1.963-4.766-1.228a.524.524 0 00-.637.354c-.075.266.09.54.367.61l3.76.97-2.967 1.647a.488.488 0 00-.19.683c.144.24.462.32.71.183l2.968-1.646-1.008 3.615c-.074.267.09.54.368.612a.523.523 0 00.637-.354l1.277-4.58 3.538-1.964v3.927l-3.49 3.354c-.202.195-.202.512 0 .707s.533.195.737 0l2.753-2.646V21.5c0 .276.233.5.52.5s.52-.224.52-.5v-3.293l2.753 2.646a.53.53 0 00.368.147c.134 0 .267-.05.37-.146a.488.488 0 000-.707l-3.49-3.354v-3.927l3.538 1.963 1.277 4.58c.074.267.36.425.637.354a.5.5 0 00.368-.612l-1.008-3.615 2.967 1.646a.532.532 0 00.71-.183.49.49 0 00-.19-.683L17.85 14.67l3.76-.968a.52.52 0 00.317-.232.48.48 0 00.05-.38.52.52 0 00-.635-.354z"
      ></path>
    </svg>
  );
};
const Resto = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      tabindex="-1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M4.71 4.29a.989.989 0 00-1.18-.17.69.69 0 00-.2.13l-.04.04a1 1 0 00-.06 1.35l7.07 8.48c.04.05.09.1.14.14a1.012 1.012 0 001.34-.07l.7-.71 6.66 6.37c.2.2.51.2.71 0 .2-.2.2-.51 0-.71L4.71 4.29zM4 5l7.78 7.77-.71.71L4 5zm5.08 9.22l-4.93 4.94c-.2.19-.2.51 0 .69.18.2.5.2.69 0l4.89-4.89-.21-.21-.44-.53zm11.78-8.29c-.2-.19-.5-.19-.7 0l-3.48 3.48c-.2.2-.5.2-.69 0-.2-.2-.2-.5 0-.7l3.47-3.48c.2-.19.2-.5 0-.69-.19-.2-.5-.2-.69 0l-3.48 3.47c-.2.2-.5.2-.7 0-.2-.19-.2-.49 0-.69l3.48-3.48c.19-.2.19-.5 0-.7a.501.501 0 00-.7 0l-3.82 3.83c-.77.77-.77 2.02 0 2.78l-.91.91.7.68.01.01.9-.9c.76.77 2.01.77 2.78 0l3.83-3.82c.19-.2.19-.51 0-.7z"
        fill="#37454D"
      ></path>
    </svg>
  );
};
const HotBar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      tabindex="-1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g class="svg-color--primary" fill="#37454D">
        <path d="M12.7 14.7l6-6c.3-.3.4-.7.2-1.1-.1-.4-.5-.6-.9-.6h-7.2L10 4.4c0-.3-.2-.4-.4-.4H6c-.3 0-.5.2-.5.5s.2.5.5.5h3.2l.6 2H6c-.4 0-.8.2-.9.6-.2.4-.1.8.2 1.1l6 6c.1.1.1.1.2.1V20H9c-.3 0-.5.2-.5.5s.2.5.5.5h6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-2.5v-5.2c.1 0 .1 0 .2-.1zM6 8h4.1l.9 3.3c.1.2.3.4.5.4h.1c.3-.1.4-.4.3-.6l-.9-3h7l-6 6L6 8z"></path>
        <circle cx="14" cy="10" r="1"></circle>
      </g>
    </svg>
  );
};
const Gym = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      tabindex="-1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        class="svg-color--primary"
        fill="#37454D"
        d="M21.5 12H20V9.5c0-.83-.67-1.5-1.5-1.5-.18 0-.34.03-.5.09V7.5c0-.83-.67-1.5-1.5-1.5S15 6.67 15 7.5V12H9V7.5C9 6.67 8.33 6 7.5 6S6 6.67 6 7.5v.59C5.84 8.03 5.68 8 5.5 8 4.67 8 4 8.67 4 9.5V12H2.5c-.28 0-.5.22-.5.5s.22.5.5.5H4v2.5a1.498 1.498 0 002.06 1.39c.16.64.74 1.11 1.44 1.11.83 0 1.5-.67 1.5-1.5V13h6v3.5c0 .83.67 1.5 1.5 1.5.7 0 1.28-.47 1.44-1.11A1.498 1.498 0 0020 15.5V13h1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm-16 4c-.28 0-.5-.22-.5-.5v-6c0-.28.22-.5.5-.5s.5.22.5.5v6c0 .28-.22.5-.5.5zm2.5.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9zm9 0c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9zm2-1c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-6c0-.28.22-.5.5-.5s.5.22.5.5v6z"
      ></path>
    </svg>
  );
};
