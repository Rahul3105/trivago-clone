import { useParams } from 'react-router-dom';
import { Auth } from './Auth';
import { Login } from './Login';
import {Signup } from './Signup';
const AuthRoute = () => {
    const { id } = useParams();
    if (id === 'signup') {
        return <Auth>
            <Signup/>
        </Auth>
    }
    return <Auth>
        <Login/>
    </Auth>
}
export { AuthRoute };