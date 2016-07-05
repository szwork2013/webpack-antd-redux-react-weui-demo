import React from 'react';
import '../../css/center.css';

class Footer extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	render(){
		return(
			<div className="ant-layout-footer">
		    Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
		    </div>
		);
	}
}
export default Footer