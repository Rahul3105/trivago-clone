import { Switch, Route } from 'react-router-dom';
import { RecentlyHome } from '../Recently-activity/RecentlyHome';
import {Auth} from '../login-signup component/Auth'
import { RecentlyMain } from '../Recently-activity/RecentlyMain';
const Routes = () => {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <RecentlyHome />
          </Route>
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