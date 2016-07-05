import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Mobile from '../containers/mobile/Mobile.containers.jsx';
import Counter from '../containers/Counter.containers.jsx';
import Application from '../containers/mobile/Application.containers.jsx';
import MIndex from '../containers/mobile/Mobile.index.containers.jsx';
import Items from '../containers/mobile/Items.containers.jsx';

export default (
    <Route path='mobile' component={Mobile} >
        <IndexRoute component={MIndex}/>
        <Route path="app" component={Application} />
        <Route path="items" component={Items} />
    </Route>
);

//http://localhost:3001/#/mobile?_k=4wly06