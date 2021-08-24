import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../login-signup component/AuthRoute';
const Routes = () => {
    return <>
        <Switch>
            <Route exact path='/'>
                <h1>This is home page</h1>
            </Route>
            <Route path='/auth/:id'>
                <AuthRoute/>
            </Route>
            <Route>
                <h1>Page not found</h1>
            </Route>
        </Switch>
    </>
}
export { Routes };