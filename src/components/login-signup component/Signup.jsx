import {StyledLogin} from './Login'
const Signup = () => {
    return <StyledLogin>
            <h1>Create your account</h1>
            <p>Add a strong password to finish up</p>
            <form>
                <label>
                    <p>Email address</p> 
                    <input type="text" name="email-address" placeholder="Email address" />
                </label>
                <label>
                    <p>Password</p> 
                    <input type="password" name="password" placeholder="Password" />
                </label>
                <button>Register</button>
            </form>
        
        </StyledLogin>
}
export { Signup };