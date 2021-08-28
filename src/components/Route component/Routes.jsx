import { Switch, Route } from 'react-router-dom';

import { AuthRoute } from '../login-signup component/AuthRoute';

import { Home } from '../Home page/Home'
import { RecentlyMain } from '../Recently-activity/RecentlyMain';
import { HotelPage } from '../Hotel Page/HotelPage';
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
          <RecentlyMain />
        </Route>

        <Route exact path="/hotel-booking">
          <HotelPage />
        </Route>
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </>
  );
}
export { Routes };