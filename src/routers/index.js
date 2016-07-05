import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from '../component/main.jsx';
import Index from '../component/index.jsx';

import Mobile from './mobile.router.jsx';
import Web from './web.router.jsx';

const router = (
    <Route path='/' component={Main}>
        <IndexRoute component={Index}/>
        {Web}
        {Mobile}
        <Route path='*' component={Index}></Route>
    </Route>
)
export default router;