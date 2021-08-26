import styled from 'styled-components';


const Login = () => {
    return (
        <StyledLogin>

            <h1>Log in or create an account</h1>
            <p> Enter your email address to start</p>
            <form>
                <label>
                    <p>Email address</p> 
                    <input type="text" name="email-address" placeholder="Email address" />
                </label>
                <button>Next</button>
            </form>
        
        </StyledLogin>
    )

}


const StyledLogin = styled.div`
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
    }
    
`;

export { Login, StyledLogin };