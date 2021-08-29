

import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Redirect = () => {
    const {data} = useSelector((state) => state.redirectData);
    const logoObj = {
        goibibo: 'https://cdn.freelogovectors.net/wp-content/uploads/2019/02/goibibo-logo.png',
        agoda: 'https://e7.pngegg.com/pngimages/542/120/png-clipart-logo-agoda-com-hotel-brand-travel-agent-hotel-emblem-text.png',
    }

    return <StyledRedirect>
        <div className="cont">
            <div>
                <img src="/images/trivago.svg" alt='img' />
                <div className="movingArrow">    
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img src={data.redirect === 'GoIbibo' ? logoObj.goibibo : logoObj.agoda} alt='img'/>
            </div>
            <h1>You found a great deal on trivago Taking you to the {data.redirect} website</h1>
        </div>
    </StyledRedirect>
}
const StyledRedirect = styled.div`
    height:100vh;
    display: flex;
    background-color:#222222b7;
    justify-content: center;
    align-items: center;
    img {
        width:200px;
    };
    .cont {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    & .cont h1 {
        color: white;
        width:450px;
        margin-top: 20px;
        line-height:30px;
        text-align: center;
        letter-spacing:1px;
        word-spacing:2px;
    }


    /* moving arrow css starts from here */
    .movingArrow {
        position: relative;
        width:50px;
        height:50px;
        transform:rotate(45deg);
        margin: auto;
        margin-bottom: 75px;
        margin-top: 25px;
    }
    .movingArrow span {
        position: absolute;
        top: 0;
        left:0;
        width:100%;
        height: 100%;
        display: block;
        box-sizing: border-box;
        border:none;
        border-right: 3px solid white;
        border-bottom: 3px solid white;
        animation: animate 1s linear infinite;
    }
    .movingArrow span:nth-child(1) {
        top: -30px;
        left: -30px;
        animation-delay: 0s;
    }
    .movingArrow span:nth-child(2) {
        top: -15px;
        left: -15px;
        animation-delay: 0.2s;
    }
    .movingArrow span:nth-child(3) {
        top: 0px;
        left: 0px;
         animation-delay: 0.4s;
    }
    .movingArrow span:nth-child(4) {
        top: 15px;
        left: 15px;
         animation-delay: 0.6s;
    }
    .movingArrow span:nth-child(5) {
        top: 30px;
        left: 30px;
        animation-delay: 0.8s;

    }
    @keyframes animate  {
        0% {
            border-color: white;
            transform: translate(0,0);
        }
        20% {
            border-color: white;
            transform: translate(15px,15px);
        }
        20.1%, 100%{
            border-color: #222;
        }
        
    }
`;
export { Redirect };