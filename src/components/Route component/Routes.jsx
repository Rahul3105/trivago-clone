import { Switch, Route } from 'react-router-dom';

import { AuthRoute } from '../login-signup component/AuthRoute';

import {Home} from '../Home page/Home'
const Routes = () => {
    return (
      <>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/auth/:id'>
                <AuthRoute/>
            </Route>
            <Route>
                <h1>Page not found</h1>
            </Route>
        </Switch>
      </>
    );
}
export { Routes };