import { GoogleLogout } from 'react-google-login';

import { getLocalStorage } from '../../utils/LocalStorage';
import { logoutUser } from '../../store/login/actions';
import {useDispatch} from 'react-redux';
const ShowProfile = () => {
    const userInfo = getLocalStorage('currLoggedIn');
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(logoutUser())
    }
    return <>
        <h2>{userInfo?.firstName} {userInfo?.lastName} {userInfo?.name}</h2>
        {userInfo.googleAuth ? 
            <GoogleLogout
                clientId={process.env?.REACT_APP_GOOGLE_API_KEY}
                buttonText="Logout"
                onLogoutSuccess={logout}
            >
            </GoogleLogout> :
            <button onClick={() => dispatch(logoutUser())}>Log out</button>
        }
    </>
}
export { ShowProfile };
