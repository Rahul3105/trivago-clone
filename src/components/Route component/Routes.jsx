import { Switch, Route } from 'react-router-dom';
import {Auth} from '../login-signup component/Auth'
const Routes = () => {
    return <>
        <Switch>
            <Route exact path='/'>
                <h1>This is home page</h1>
            </Route>
            <Route exact path='/auth'>
                <Auth/>
            </Route>
            <Route>
                <h1>Page not found</h1>
            </Route>
        </Switch>
    </>
}
export { Routes };