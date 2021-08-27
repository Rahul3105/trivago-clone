import { Switch, Route } from 'react-router-dom';

import { AuthRoute } from '../login-signup component/AuthRoute';

import {Home} from '../Home page/Home'
import { RecentlyMain } from '../Recently-activity/RecentlyMain';
const Routes = () => {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/auth/:id">
            <AuthRoute />
          </Route>
          <Route exact path="/recentlyMain">
            <RecentlyMain/>
          </Route>
          <Route>
            <h1>Page not found</h1>
          </Route>
        </Switch>
      </>
    );
}
export { Routes };