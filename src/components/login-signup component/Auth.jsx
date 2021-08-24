
import { Login } from './Login';

// import { Signup } from './Signup';

import styled from 'styled-components';

// material ui imports

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

//react-google component 
import GoogleLogin from 'react-google-login';
const Auth = () => {
    return <>
        <StyledAuth>
            <header>
                <button className='goback-btn'><ArrowBackIosIcon /></button>
                <div className="logo-cont">
                    <img src="images/trivago.svg" width="200" ></img>
                </div>
            </header>
            <section className='Auth-section'>
                <div><Login/></div>
                <div className='goggle-auth'>
                    <strong>Or use trivago with another account</strong>
                    <StyledAuthBtn>Continue with Google</StyledAuthBtn>
                    <StyledAuthBtn>Continue with Facebook</StyledAuthBtn>
                    <StyledAuthBtn>Continue with Apple</StyledAuthBtn>
                </div>
            </section>
            <footer>
                <p>Reminder: by signing up, you are agreeing to our Privacy Policy and Terms of Use.</p>
            </footer>
        </StyledAuth>
        <CreateAccountBtnCont>
            <h4>Don't have an account yet?</h4>
            <button>Create an account</button>
        </CreateAccountBtnCont>
    </>
}
export { Auth };





const StyledAuth = styled.div`
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgb(41 51 57 / 50%);
    width:77rem;
    margin: auto;
    margin-top:30px;
    padding:10px 20px;
    min-height: 40rem;
    
    
    
    //header css
    & > header {
        display: flex;
        height: 7.4rem;
        display: flex;
        align-items: center;
    }
    & > header .goback-btn{
        border:none;
        background-color: white;
        cursor:pointer;
        width:7.4rem;
        display: flex;
        align-items: center;
    }
    & > header .goback-btn > svg {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:40px;
    }

    & > header .logo-cont {
        margin-left: 33%;
        width:110px;
        height:50px;
        img {
            width:100%;
            height:100%;
        }
    }
    /* Auth-section */
    section[class ='Auth-section'] {
        height:27rem;
        display: flex;

    }
    section[class ='Auth-section'] > * {
        width:50%;
    }

    & > section[class ='Auth-section'] > .goggle-auth {
        height:18rem;
        border-left: 1px solid gainsboro;
        margin-top: 7rem;
        padding-left: 15px
    }
`;
const StyledAuthBtn = styled.div`
    border: 1px solid #697379;
    height: 45px;
    margin-top:5px;
    margin-bottom: 12px ;
    font-weight: 700;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #697379;
        color: white;
    }
`

const CreateAccountBtnCont = styled.footer`
    width:77rem;
    margin: auto;
    margin-top:3rem;
    padding-left: 3rem;
    & > button {
        border: 1px solid #697379;
        height: 45px;
        font-weight: 700;
        padding: 10px;
        cursor: pointer;
        :hover {
            background-color: #697379;
            color: white;
        }
        background-color: white;

    }
    & > h4 {
        font-size: 1.9rem;
        margin-bottom:12px;
    }
`