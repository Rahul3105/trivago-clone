import React, { useState } from "react";
import styled from "styled-components";

const Clean = () => {
  const [see, setSee] = useState(false);
  return (
    <Big>
      <h3>Cleanliness policies</h3>
      <Fir>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          tabindex="-1"
          width="80"
          height="80"
          viewBox="0 0 80 80"
        >
          <g fill="none" fill-rule="evenodd">
            <circle fill="#F2F8FA" cx="40" cy="40" r="40"></circle>
            <path
              d="M67.933 45c.664-.17 1.05-.3 1.094-.314a.42.42 0 00.276-.3.411.411 0 00-.114-.39c-.608-.596.005-3.228.64-4.921 1.296-3.897 1.725-6.045 1.853-7.14.084-.486.145-.953.196-1.412 0-.009.005-.016.005-.025.946-8.776-4.078-12.454-6.285-13.628v-1.288c0-1.424-1.18-2.582-2.63-2.582h-2.935c-1.45 0-2.63 1.158-2.63 2.582v1.288c-2.21 1.175-7.24 4.855-6.283 13.623l-.002.006c0 .006.003.01.004.016.05.455.11.917.194 1.4"
              stroke="#000"
              stroke-width="1.286"
              fill="#F2F8FA"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M65.901 42c.506-.133.801-.234.834-.245a.325.325 0 00.123-.539c-.463-.466.004-2.522.488-3.845.987-3.045 1.314-4.723 1.412-5.577.064-.38.11-.746.149-1.104 0-.007.004-.012.004-.02.72-6.856-3.107-9.73-4.789-10.647v-1.006A2.013 2.013 0 0062.118 17h-2.235a2.013 2.013 0 00-2.005 2.017v1.006c-1.683.919-5.516 3.793-4.787 10.644v.004l.002.013c.038.355.084.716.148 1.093"
              fill="#FFF"
            ></path>
            <circle fill="#BFDFEA" opacity=".6" cx="30" cy="40" r="5"></circle>
            <circle
              fill="#BFDFEA"
              opacity=".6"
              cx="52.5"
              cy="36.5"
              r="4.5"
            ></circle>
            <circle fill="#BFDFEA" cx="58.5" cy="43.5" r="6.5"></circle>
            <circle fill="#BFDFEA" cx="50" cy="46" r="6"></circle>
            <circle fill="#BFDFEA" cx="43" cy="42" r="11"></circle>
            <circle fill="#E5F2F6" cx="46.5" cy="45.5" r="5.5"></circle>
            <path
              d="M41.92 33.275c-1.868-.261-3.718.36-4.92 1.802"
              stroke="#FFF"
              stroke-width="1.429"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M17 41.541c1.732-1.072 4.022-1.585 6.87-1.538 4.274.07 5.993.583 8.602 1.795s4.173 3.383 4.427 3.383h8.09c1.425 0 3.035 1.404 2.595 3.18-.44 1.777-1.987 2.051-3.055 2.051H33.086h10.421c1.324 0 4.541 0 5.862-.103 1.32-.103 11.804-4.39 12.418-4.604a4.22 4.22 0 011.476-.257c.407 0 1.058.246 1.527 1.323.61 1.128-.255 2.05-.763 2.307-4.021 2.205-9.594 5.428-20.255 10.255-1.4.634-2.392.667-3.868.667-2.595 0-4.936-.667-4.936-.667L17 54.258V41.54z"
              stroke="#000"
              stroke-width="1.429"
              fill="#FFF"
              stroke-linejoin="round"
            ></path>
            <path
              d="M11.738 38h3.966c.702 0 1.296.563 1.296 1.228v16.543c0 .665-.594 1.229-1.296 1.229H8.04c-3.724-5.736 3.752-12.291 3.698-19z"
              stroke="#000"
              stroke-width="1.429"
              fill="#CDD0D2"
              stroke-linejoin="round"
            ></path>
            <circle fill="#FFF" cx="11.5" cy="52.5" r="1.5"></circle>
            <path
              d="M51.79 36.325c-1.69-2.874-4.582-4.91-8.032-5.273-4.538-.477-8.731 2.08-10.758 6.109m.488-1.839a4.697 4.697 0 00-3.766-1.384c-2.6.23-4.524 2.534-4.298 5.148m32.692-2.092a4.697 4.697 0 00-1.36-3.774c-1.848-1.844-4.85-1.837-6.707.016m14.813 11.961c1.437-2.648.135-5.88-2.909-7.219-2.15-.946-4.596-.693-6.353.471"
              stroke="#000"
              stroke-width="1.429"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M42 42.58c-.497-1.443-1.986-1.999-3.326-1.241-.948.535-1.567 1.583-1.674 2.661m14.968 2a5.252 5.252 0 00-1.64-4.42c-2.27-2.146-5.999-2.1-8.328.1"
              stroke="#000"
              stroke-width="1.286"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M49 42.754c-1.243-.648-2.715-.648-4-.16m9.251-8.538c-.566-.36-1.338-.497-2.251-.263"
              stroke="#FFF"
              stroke-width="1.429"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <circle
              stroke="#000"
              stroke-width="1.429"
              fill="#BFDFEA"
              stroke-linecap="round"
              stroke-linejoin="round"
              cx="58"
              cy="25"
              r="2"
            ></circle>
            <circle
              stroke="#000"
              stroke-width="1.429"
              fill="#BFDFEA"
              stroke-linecap="round"
              stroke-linejoin="round"
              cx="30.5"
              cy="27.5"
              r="2.5"
            ></circle>
            <circle
              stroke="#000"
              stroke-width="1.429"
              fill="#BFDFEA"
              stroke-linecap="round"
              stroke-linejoin="round"
              cx="63.5"
              cy="32.5"
              r="2.5"
            ></circle>
            <path
              d="M43.456 17c.51.817 1.41 2.18 2.468 3.813 1.842 2.84.941 4.28.08 5.136A3.599 3.599 0 0143.455 27c-.98 0-1.842-.39-2.547-1.051-1.842-1.829-.392-4.396.078-5.136L43.456 17z"
              stroke="#000"
              stroke-width="1.429"
              fill="#BFDFEA"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M42.92 25c-1.865-1.068-.396-2.568.08-3"
              stroke="#FFF"
              stroke-width="1.429"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M63.295 10V7.48L69 7.485V4H50.762c-.485.048-6.78.888-7.762 6.394l3.456.606c.537-3.002 4.484-3.525 4.524-3.53l8.804.007v2.522l3.51.001z"
              stroke="#000"
              stroke-width="1.286"
              fill="#BFDFEA"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              stroke="#000"
              stroke-width="1.286"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M59 10h5v3h-5z"
            ></path>
          </g>
        </svg>
        <p>
          The following measures are taken at this property to protect the
          health and safety of guests and staff.
        </p>
      </Fir>
      <List onClick={() => setSee(true)}>
        <div>
          <div>
            <Blu />
            <h3>New safety protocols</h3>
          </div>
          {see && (
            <p>
              Protocols are in place to reduce risk of infection as required by
              an external authority
            </p>
          )}
        </div>
        <div>
          <div>
            <Blu />
            <h3>Safe distance</h3>
          </div>
          {see && (
            <p>
              Measures are in place to help guests and staff maintain a safe
              distance
            </p>
          )}
        </div>
        <div>
          <div>
            <Blu />
            <h3>Doctor on site</h3>
          </div>
          {see && (
            <p>
              There is a doctor on site whom guests and staff have reliable
              access to
            </p>
          )}
        </div>
        <div>
          <div>
            <Blu />
            <h3>Hand sanitizer provided</h3>
          </div>
          {see && (
            <p>
              Both common areas and guests' rooms are supplied with hand
              sanitizer
            </p>
          )}
        </div>
        <div>
          <div>
            <Blu />
            <h3>Temperature screening</h3>
          </div>
          {see && (
            <p>
              Safety protocol at this property includes checking the temperature
              of guests and staff
            </p>
          )}
        </div>
        <div>
          <div>
            <Blu />
            <h3>Cashless payment</h3>
          </div>
          {see && <p>Guests can use cashless payment methods</p>}
        </div>
        <div>
          <div>
            <Blu />
            <h3>Online check in/check out</h3>
          </div>
          {see && <p>Check in/check out can be done online</p>}
        </div>
        <div>
          <div>
            <Blu />
            <h3>Masks provided</h3>
          </div>
          {see && (
            <p>
              Disposable masks are provided within guest rooms or common areas
            </p>
          )}
        </div>
        <div>
          <div>
            <Blu />
            <h3>Room service</h3>
          </div>
          {see && (
            <p>
              Food from the on-site dining facility can be delivered to guests’
              rooms
            </p>
          )}
        </div>
      </List>
      <p>
        Claims of safety measures taken by the property are not checked by
        trivago for accuracy
      </p>
      <Butt onClick={() => setSee((p) => !p)}>
        {!see ? "See" : "Close"} Policy Details
      </Butt>
    </Big>
  );
};

export default Clean;

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
    font-size: 13px;
    padding: 15px;
    color: #697379;
  }
`;
const Fir = styled.div`
  display: flex;
  border-top: 1px solid rgb(205, 208, 210);
  padding: 15px;
  > p {
    align-self: center;
    font-size: 13px;
    color: rgb(63, 68, 81);
    padding-left: 15px;
  }
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.3%;
  > div > div {
    display: flex;
    padding: 13px;
    > :nth-child(1) {
      width: 25px;
      height: 25px;
    }
    > :nth-child(2) {
      align-self: center;
      padding-left: 12px;
      font-size: 13px;
      font-weight: bolder;
    }
  }
  > div {
    width: 32%;
  }
  > div > p {
    align-self: center;
    font-size: 13px;
    margin-top: 4px;
    color: rgb(63, 68, 81);
    padding: 0 0 15px 15px;
  }
`;
const Butt = styled.button`
  width: 100%;
  padding: 6px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 1px solid rgb(205, 208, 210);
`;
const Blu = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      tabindex="-1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fill-rule="evenodd">
        <path d="M0 0h24v24H0z"></path>
        <path
          class="svg-color--primary"
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1a9 9 0 00-9 9 9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9zm5.707 5.293a1 1 0 01.083 1.32l-.083.094-7 7a.995.995 0 01-.53.277l-.118.014h-.118a.996.996 0 01-.648-.29l-3-3a1 1 0 011.32-1.498l.094.083L10 14.585l6.293-6.292a1 1 0 011.414 0z"
          fill="#007FAD"
          fill-rule="nonzero"
        ></path>
      </g>
    </svg>
  );
};
