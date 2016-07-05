import React from 'react';
import {connect} from 'react-redux';
import {increment} from '../actions/counter.action';
import { bindActionCreators } from 'redux';


class Counter extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        console.log('------',this.props);
        const { counter, increment } = this.props;
        return(
            <div>
                <span>{counter.counter}</span>
                <button onClick={()=>increment(1000)}>Increase</button>
            </div>
        );
    }
}

function mapStatToProps(state){
    return {
        counter:state.counter
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ increment: increment }, dispatch);
}

export default connect(mapStatToProps,mapDispatchToProps)(Counter);