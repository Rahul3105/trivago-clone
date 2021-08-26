import { Switch, Route } from 'react-router-dom';

import { AuthRoute } from '../login-signup component/AuthRoute';

const Routes = () => {
    return (
      <>
        <Switch>
          
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/recentlyMain">
            <RecentlyMain />
          </Route>
          <Route>
            <h1>Page not found</h1>
          </Route>

        </Switch>
      </>
    );
}
export { Routes };