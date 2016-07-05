import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Web from '../containers/web/Web.containers.jsx';
import ItemDefinitions from '../containers/web/ItemDefinitions.containers.jsx';

export default (
    <Route path='web' component={Web}>
        <Route  path='ItemDefinitions/:token' component={ItemDefinitions}></Route>
    </Route>
);

//http://localhost:3001/#/web/ItemDefinitions/123?_k=4wly06