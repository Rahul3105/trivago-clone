import styled from 'styled-components';
import { useState } from 'react';
import { loginUser } from '../../store/login/actions';
import { useDispatch, useSelector } from 'react-redux';
import{useHistory} from 'react-router-dom'

const Login = ({ handleError }) => {
    const [loginInfo, setLoginInfo] = useState({});
    const login = useSelector((state) => state.login);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        let payload = {
            ...loginInfo,
            [name]: value
        }
        setLoginInfo(payload);
    }
    const handleSubmit = (  e  ) => {
        e.preventDefault();
        
        if (loginInfo.email === undefined || loginInfo.password === undefined || loginInfo.email === '' || loginInfo.password === '') {
            alert('Please fill your email and password');
        } else {
            let payload = {
                ...loginInfo,
                googleAuth: false
            }
            dispatch(loginUser(payload));
        }
    }
    if (login.isAuth) {
        history.push('/')
    }
    return (
        <StyledLogin>
            <h1>Log in or create an account</h1>
            <p> Enter your email address to start</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email address</p> 
                    <input onChange = {handleChange} type="text" name="email" placeholder="Email address" />
                </label>

                <label>
                    <p>Password</p> 
                    <input onChange = {handleChange} type="password" name="password" placeholder="Password" />
                </label>
                <button>Log In</button>
            </form>
        
        </StyledLogin>
    )

}


const StyledLogin = styled.div`
    animation: 0.5s AnimateRight 0s forwards;
    transform: scaleX(2%);
    @keyframes AnimateRight {
        to {
            transform: scaleX(1);
        }
    }
    & > h1 {
        font-size: 20px;
        margin: 8px 0;
    }
    & h1 + p {
        font-size:16px;
    }
    /* form css */
    & > form > label ,form > input, .form > button{
        display: block;
        
    }
    & > form >label {
        margin:22px 0;
        
    }
    & > form >label > p {
        font-weight: 700;
        font-size: 14px;
        margin-bottom:5px;
    }
    & > form input {
        padding: 0 12px;
        height: 44px;
        border: 1px solid #9ba2a6; 
        width:100%;
        font-size: 16px;
        
    }
    & > form > button {
        width:100%;
        height:44px;
        background-color: #007fad;
        color: white;
        border:none;
        border-radius: 2px;
        font-weight: 700;
        font-size: 16px;
        cursor:pointer;
        transition: 0.5s;
    }
    & > form > button:hover {
        background-color: #0d4e66;
        transition: 0.5s;
        transform: scale(1.1);
    }
`;

export { Login, StyledLogin };