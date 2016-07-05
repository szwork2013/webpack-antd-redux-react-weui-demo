import React from 'react';
import { connect } from 'react-redux'
import { Breadcrumb } from 'antd';
import '../../css/center.css';

class BreadcrumbItem extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		let rows=[];
		this.props.breadcrumbitem.breadcrumbitem.forEach(function(row){
			rows.push(<Breadcrumb.Item key={row.title}>{row.title}</Breadcrumb.Item>);
		});
		return(
			<div className="ant-layout-breadcrumb">
	          <Breadcrumb>
				  {rows}
	          </Breadcrumb>
	        </div>
		);
	}
}

function mapStateToProps(state) {
	return { breadcrumbitem: state.breadcrumbitem };
}
export default connect(mapStateToProps)(BreadcrumbItem);