import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table,Row,Col,Button,Icon,Input,Select,Switch,Form } from 'antd';
import {itemdefinitions} from '../../actions/breadcrumbitem.action';
import {
	itemsDefinitionInitData,
	itemsDefinitionGetAddID,
	itemsDefinitionGetUoms,
	itemsDefinitionCancleAdd,
	itemsDefinitionEdit,
	itemsDefinitionCancleEdit,
	itemsDefinitionInsertRow,
	itemsDefinitionSaveRow,
	itemsDefinitionSaveToMemary,
	itemsDefinitionSubmitSearch
	} from '../../actions/itemsdefinition.action';

const Option = Select.Option;
const FormItem = Form.Item;

class ItemDefinitions extends React.Component{

	componentWillMount(){
		// sessionStorage.setItem('token',this.props.params.token);
		// let param={token:"5e9771e4-389f-4253-aac0-ee79c5c23d3c"};
		// F.AJAXF(_PURL.userinfo,"POST",param,function(data){
		// 	console.log('----de------',data);
		// });
	}
	componentDidMount(){

	}

	constructor(props) {
	  	super(props);
	  	this.props.dispatch(itemdefinitions([{title:'首页'},{title:'办公用品'}]));
		const { dispatch } = this.props;
		let pagination={pageSize:10,current:1}
		itemsDefinitionInitData(dispatch,pagination,{});
		itemsDefinitionGetUoms(dispatch);
	}

	getUom=(text)=>{
		return this.props.itemsdefinition.itemuoms.get(text);
	};

	initTableSelectItemUoms=(text)=>{
		let options=[];
		for(var [key, val] of this.props.itemsdefinition.itemuoms.entries()){
			options.push(<Option key={key} value={key}>{val}</Option>);
		}
		return(
			<Select defaultValue={this.getUom(text)} style={{ width: 120 }} onChange={(e)=>this.handleEdit(e,"item_uom")}>
				{options}
			</Select>
		);
	};

	cancleClick=(record,index)=>{
		if(record.isadd){
			this.props.dispatch(itemsDefinitionCancleAdd());
		}
		if(record.isedit){
			this.props.dispatch(itemsDefinitionCancleEdit(index));
		}
	};

	editClick=(index)=>{
		this.props.dispatch(itemsDefinitionEdit(index));
	};

	saveClick=(record,index)=>{
		const { itemsdefinition,dispatch } = this.props;
		let nr=itemsdefinition.newrecord;
		let search=itemsdefinition.searchmemaray;
		if(nr.enable){
			if(record.isadd){
				itemsDefinitionInsertRow(dispatch,record.item_id,nr,search);
			}
			if(record.isedit){
				itemsDefinitionSaveRow(dispatch,record.item_id,nr,search);
			}
		}
		
		
	};

	handleEdit=(e,key)=>{
		this.props.dispatch(itemsDefinitionSaveToMemary({key:key,val:e}));
	};
	switchHandleEdit=(e)=>{
		if(e){
			this.handleEdit('Y','enabled_flag');
		}else{
			this.handleEdit('N','enabled_flag');
		}
	};

	handleSubmit=(e)=>{
		const { itemsdefinition,dispatch } = this.props;
		e.preventDefault();
		console.log('收到表单值：', this.props.form.getFieldsValue());
		this.props.dispatch(itemsDefinitionSubmitSearch(this.props.form.getFieldsValue()));
		let pagination={pageSize:10,current:1};
		itemsDefinitionInitData(dispatch,pagination,this.props.form.getFieldsValue());
	};


	render(){
		const { itemsdefinition,dispatch } = this.props;
		const { getFieldProps } = this.props.form;
		console.log('-----itemsdefinition-----',itemsdefinition);
		const columns=[{
			title: '物品编码',
			dataIndex: 'item_code',
			key:'itemcode',
			render: (text,record,index)=>{
				return(
					<div>
						{
							(record.isadd||record.isedit)?
								<Input defaultValue={text} onChange={(e) => this.handleEdit(e.nativeEvent.target.value,"item_code")} />
								:
								<a>{text}</a>
						}
					</div>
				);
			},
			width: '20%'
		}, {
			title: '物品名称',
			dataIndex: 'item_name',
			key:'itemname',
			render: (text,record)=>{
				return(
					<div>
						{
							(record.isadd||record.isedit)?
								<Input defaultValue={text} onChange={(e) => this.handleEdit(e.nativeEvent.target.value,"item_name")} />
								:
								<a>{text}</a>
						}
					</div>
				);

			},
			width: '20%'
		}, {
			title: '规格',
			dataIndex: 'specifications',
			key:'spec',
			render: (text,record)=>{
				return(
					<div>
						{
							(record.isadd||record.isedit)?
								<Input defaultValue={text} onChange={(e) => this.handleEdit(e.nativeEvent.target.value,"specifications")} />
								:
								<a>{text}</a>
						}
					</div>
				);

			},
		}, {
			title: '单位',
			dataIndex: 'item_uom',
			key:'itemuom',
			render: (text,record)=>{
				return(
					<div>
						{
							(record.isadd||record.isedit)?
								this.initTableSelectItemUoms(text)
								:
								<span>{this.getUom(text)}</span>
						}
					</div>
				);

			},

		}, {
			title: '启用',
			dataIndex: 'enabled_flag',
			key:'enabled_flag',
			render:(text,record,index)=>{
				return(
					<div>
						{
							(record.isadd||record.isedit)?
							text=="Y"?
							<Switch checkedChildren="是" unCheckedChildren="否" defaultChecked={true} onChange={ (e)=>this.switchHandleEdit(e) }/>
							:
							<Switch checkedChildren="是" unCheckedChildren="否" defaultChecked={false} onChange={ (e)=>this.switchHandleEdit(e) }/>
							:
							text=="Y"?
							<Switch checkedChildren="是" unCheckedChildren="否" checked={true} disabled/>
							:
							<Switch checkedChildren="是" unCheckedChildren="否" checked={false} disabled/>
						}
					</div>
				);
			}
		}, {
			title:'操作',
			key: 'itemoperator',
			width: 160,
			render: (text,record,index)=>{
				return(
					<div>
						{
						(record.isadd||record.isedit)?
						<p>
							<a onClick={()=>{this.saveClick(record,index)}}>保存</a>
							<span style={ { color: '#DEDEDE', display: 'inline-block', padding: '0 5px', transform: 'scale(1, 0.6)' } } > | </span>
							<a onClick={()=>this.cancleClick(record,index)}>取消</a>
						</p>
						:
						(itemsdefinition.addbutton)?
						<a disabled>编辑</a>
						:
						<a onClick={()=>this.editClick(index)}>编辑</a>
						}
					</div>
				);

			},
		}];


		return(
			<div>

				<Form inline className="ant-advanced-search-form" onSubmit={this.handleSubmit}>
					<FormItem
						label="物品编码"
					>
						<Input placeholder="请输入搜索物品编码" size="default" {...getFieldProps('itemcode')} />
					</FormItem>
					<FormItem
						label="物品名称"
					>
						<Input placeholder="请输入搜索物品名称" size="default" {...getFieldProps('itemname')}/>
					</FormItem>

					<Button type="primary" htmlType="submit">搜索</Button>
					<Button>清除条件</Button>
				</Form>


				<Row>
					<Col span={6}>
						<Button type="primary" icon="plus"
								onClick={()=>itemsDefinitionGetAddID(dispatch,itemsdefinition)}
								disabled={itemsdefinition.addbutton} >
							Add
						</Button>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<Table columns={columns}
							   rowkey={record=>record.item_id}
							   dataSource={itemsdefinition.data}
							   pagination={itemsdefinition.pagination}
							   loading={itemsdefinition.loading}
							   onChange={(pagination)=>itemsDefinitionInitData(dispatch,pagination)}
						/>
					</Col>
				</Row>


			</div>
		);
	}
}
ItemDefinitions = Form.create({})(ItemDefinitions);
function mapStateToProps(state) {
	return { itemsdefinition: state.itemsdefinition };
}
export default connect(mapStateToProps)(ItemDefinitions);
