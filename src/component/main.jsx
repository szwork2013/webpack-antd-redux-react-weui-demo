import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

import reactTapEvent from 'react-tap-event-plugin';
reactTapEvent();
const store = configureStore();

import '../style.css';
import '../../node_modules/antd/dist/antd.css';

export default class Main extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="page"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    style={{height: '100%'}}
                >
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </ReactCSSTransitionGroup>
            </Provider>
        )
    }
}