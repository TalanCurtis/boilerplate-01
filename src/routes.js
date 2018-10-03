import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import views
import Landing from './views/Landing/Landing';
import AView01 from './views/AView01/AView01';
import AView02 from './views/AView02/AView02';
import ATestSecretArea from './views/ATestSecretArea/ATestSecretArea';
import Home from './views/Home/Home';
import LoggedOut from './views/LoggedOut/LoggedOut';
import PageNotFound from './views/PageNotFound/PageNotFound';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/AView01' component={AView01} />
        <Route path='/AView02' component={AView02} />
        <Route path='/ATestSecretArea' component={ATestSecretArea} />
        <Route path='/Home' component={Home} />
        <Route path='/LoggedOut' component={LoggedOut} />
        <Route component={PageNotFound} />
    </Switch>
)