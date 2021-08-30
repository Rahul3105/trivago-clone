import styled from "styled-components";
import { loginUser } from "../../store/login/actions";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// material ui imports
import Alert from "@material-ui/lab/Alert";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

//react-google component
import GoogleLogin from "react-google-login";

const Auth = ({ children }) => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const loginStore = useSelector((state) => state.login);
  const handleAuthLogin = ({ profileObj }) => {
    let payload = {
      ...profileObj,
      googleAuth: true,
    };
    dispatch(loginUser(payload));
  };
  const handleAuthFailure = (response) => {
    console.log(response);
  };
  if (loginStore.isAuth) {
    history.push("/");
  }
  return (
    <>
      <StyledAuth>
        <header>
          <button className="goback-btn" onClick={() => history.goBack()}>
            <ArrowBackIosIcon />
          </button>
          <div className="logo-cont">
            <img src="/images/trivago.svg" width="200" alt="trivago-logo" />
          </div>
        </header>
        {loginStore.error && (
          <Alert className="alert" variant="filled" severity="error">
            {loginStore.error}
          </Alert>
        )}
        <section className="Auth-section">
          <div className="auth-route">{children}</div>
          <div className="goggle-auth">
            <h2>Or use trivago with another account</h2>
            <GoogleLogin
              clientId={
                "214132727180-jurfse2h9060p5foq65qd9j817clv0i0.apps.googleusercontent.com"
              }
              buttonText="Continue with Google"
              onSuccess={handleAuthLogin}
              onFailure={handleAuthFailure}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => (
                <StyledAuthBtn
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <img src="/images/google-icon.png" alt="" /> Continue with
                  Google
                </StyledAuthBtn>
              )}
            ></GoogleLogin>
            <StyledAuthBtn>
              <img src="/images/facebook-icon.png" alt="facebook-icon" />
              Continue with Facebook
            </StyledAuthBtn>
            <StyledAuthBtn>
              <img src="/images/apple-icon.png" alt="apple-icon" />
              Continue with Apple
            </StyledAuthBtn>
          </div>
        </section>
        <footer>
          <p>
            Reminder: by signing up, you are agreeing to our Privacy Policy and
            Terms of Use.
          </p>
        </footer>
      </StyledAuth>
      {id === "login" && (
        <CreateAccountBtnCont>
          <h1>Don't have an account yet?</h1>
          <button onClick={() => history.push("/auth/signup")}>
            Create an account
          </button>
        </CreateAccountBtnCont>
      )}
    </>
  );
};

export { Auth };

const StyledAuth = styled.div`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgb(41 51 57 / 50%);
  width: 77rem;
  margin: auto;
  margin-top: 30px;
  padding: 10px 20px;
  padding-bottom: 30px;
  min-height: 40rem;
  max-height: 60rem;
  & p {
    font-size: 16px;
  }
  & .alert {
    font-size: 15px;
  }

  //header css
  & > header {
    display: flex;
    height: 7.4rem;
    display: flex;
    align-items: center;
  }
  & > header .goback-btn {
    border: none;
    background-color: white;
    cursor: pointer;
    width: 7.4rem;
    display: flex;
    align-items: center;
  }
  & > header .goback-btn > svg {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }

  & > header .logo-cont {
    margin-left: 33%;
    width: 110px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  /* Auth-section */
  section[class="Auth-section"] {
    display: flex;
    margin-bottom: 20px;
  }
  section[class="Auth-section"] > * {
    width: 50%;
  }

  & > section[class="Auth-section"] > .goggle-auth {
    height: 18rem;
    border-left: 1px solid gainsboro;
    margin-top: 7rem;
    padding-left: 30px;
  }
  & > section[class="Auth-section"] > .auth-route {
    padding-right: 30px;
  }
`;
const StyledAuthBtn = styled.div`
  border: 1px solid #697379;
  height: 45px;
  margin-top: 5px;
  margin-bottom: 12px;
  font-weight: 700;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  /* text-align: center; */
  &:hover {
    background-color: #697379;
    color: white;
  }
  & > img {
    width: 24px;
    margin-right: 50px;
  }
`;

const CreateAccountBtnCont = styled.footer`
  width: 77rem;
  margin: auto;
  margin-top: 3rem;
  padding-left: 3rem;
  & > button {
    border: 1px solid #697379;
    height: 45px;
    font-weight: 700;
    padding: 1px 15px;
    font-size: 16px;
    cursor: pointer;
    :hover {
      background-color: #697379;
      color: white;
    }
    background-color: white;
  }
  & > h1 {
    font-size: 1.9rem;
    margin-bottom: 12px;
  }
`;
