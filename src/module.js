import React from 'react';
import ReactDom from 'react-dom';
import { Router,hashHistory } from 'react-router';
import router from './routers';

ReactDom.render(<Router history={hashHistory} >{router}</Router>, document.getElementById('content'));