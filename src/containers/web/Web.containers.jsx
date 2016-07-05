import React from 'react';
import LeftMenu from '../../component/common/LeftMenu.jsx';
import Head from '../../component/common/Head.jsx';
import BreadcrumbItem from '../../containers/web/BreadcrumbItem.containers.jsx';
import Footer from '../../component/common/Footer.jsx';
import  '../../css/center.css';


 class Web extends React.Component{
     constructor(props) {
         super(props);
     }
    render(){
        return(
            <div className="ant-layout-aside">
                <Head></Head>
              <LeftMenu></LeftMenu>
              <div className="ant-layout-main">
                <BreadcrumbItem></BreadcrumbItem>
                <div className="ant-layout-container">
                  <div className="ant-layout-content">
                    <div style={{ height: 1024 }}>
                      {this.props.children}
                    </div>
                  </div>
                </div>

              </div>
            </div>
        )
    }
}
export default Web