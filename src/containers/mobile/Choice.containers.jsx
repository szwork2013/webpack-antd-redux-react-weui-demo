import React from 'react';
import {connect} from 'react-redux';
class Choice extends React.Component{
    render(){
        return(

        );
    }
}
function mapStatToProps(state){
    return {
        application:state.application
    }
}

export default connect(mapStatToProps)(Choice);