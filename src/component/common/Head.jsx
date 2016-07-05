import React from 'react';
import '../../css/center.css';
import { Row,Col,Menu,Icon,Affix } from 'antd';
import SearchInput from './SearchInput.jsx';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import {Link} from 'react-router';

class Head extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
		  username:sessionStorage.getItem('psnname'),
		  current: 'mail',
	  };
	}
	handleClick=function(e) {
		console.log('click ', e);
		this.setState({
			current: e.key,
		});
	}.bind(this);
	logout=function(){
		sessionStorage.clear();
		window.location.href="/";
	}.bind(this);
	render(){
		return(
			<Affix >
				<Row className="ant-layout-header">
					<Col xs={2} md={2} lg={2} sm={2}>
						<div className="ant-layout-logo"></div>
					</Col>
					<Col xs={24} md={10} lg={10} sm={10} >
						<Menu theme="dark" onClick={this.handleClick}
							  selectedKeys={[this.state.current]}
							  style={{lineHeight: '62px'}}
							  mode="horizontal">
							<Menu.Item key="mail">
								<Icon type="mail" />导航一
							</Menu.Item>
							<Menu.Item key="app" disabled>
								<Icon type="appstore" />导航二
							</Menu.Item>
							<Menu.Item key="center" disabled>
								<Icon type="center" />导航三
							</Menu.Item>
							<Menu.Item key="alipay">
								<Link to="ItemDefinitions" >办公用品</Link>
							</Menu.Item>
						</Menu>
					</Col>
					<Col xs={24} md={12} lg={12} sm={12} >
						<Menu theme="dark" onClick={this.handleClick}
							  selectedKeys={[this.state.current]}
							  style={{lineHeight: '62px'}}
							  mode="horizontal"
						className="right">
							<Menu.Item key="app" disabled>
								<Icon type="user" />{this.state.username}
							</Menu.Item>
							<Menu.Item key="logout">
								<a href="javascript:void(0)" onClick={e=>this.logout()}>退出</a>
							</Menu.Item>
						</Menu>
					</Col>
				</Row>



			</Affix>
		);
	}
}
export default Head