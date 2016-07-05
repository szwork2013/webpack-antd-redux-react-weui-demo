import React from 'react';
import {connect} from 'react-redux';
import {
    Nav,
    Icon,
    Cells,
    CellsTitle,
    Cell,
    CellBody,
    CellFooter
}from 'react-weui-to-mobile';
class MIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        };
    }
    render(){
        return(
            <div>
                <Nav>
                    <a className="left" href="#tab"><Icon type="icon" value="left"/>返回</a>
                    <h1 className="title">办公用品领用</h1>
                </Nav>
                <div className="center">
                    <CellsTitle>选择区域</CellsTitle>
                    <Cells access>
                        <Cell href="#/mobile/app">
                            <CellBody>
                                近铁广场北楼
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                        <Cell href="#/mobile/items">
                            <CellBody>
                                近铁广场南楼
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                        <Cell>
                            <CellBody>
                                馔山办公楼
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                    </Cells>
                </div>
            </div>
        );
    }
}
function mapStatToProps(state){
    return {
        mindex:state.mindex
    }
}

export default connect(mapStatToProps)(MIndex);