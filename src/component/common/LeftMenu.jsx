import React from 'react';
import { Menu,Icon,Card,Affix } from 'antd';
import '../../css/center.css';

const SubMenu=Menu.SubMenu;

class LeftMenu extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	render(){
		return(
			<aside className="ant-layout-sider">
				<Card  bodyStyle={{ padding: 5}}>
					<div className="custom-image">
						<img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
					</div>
					<div className="custom-card">
						<h3>Europe Street beat</h3>
						<p>www.instagram.com</p>
					</div>
				</Card>

				<Menu mode="inline"
				  defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
				  <SubMenu key="sub1" title={<span><Icon type="user" />物品管理</span>}>
				    <Menu.Item key="ItemDefinitions">物品定义</Menu.Item>
				  </SubMenu>
				  <SubMenu key="sub2" title={<span><Icon type="laptop" />报表管理</span>}>
				    <Menu.Item key="RequisitionedDetails">领用明细查询</Menu.Item>
				    <Menu.Item key="StockTransaction">库存事务查询</Menu.Item>
				    <Menu.Item key="TransceiverDepositTransaction">收发存事务查询</Menu.Item>
				  </SubMenu>
				</Menu>
			</aside>
		);
	}
}
export default LeftMenu