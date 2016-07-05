import React from 'react';
import {connect} from 'react-redux';
import {
    ButtonArea,
    Button,
    Nav,
    NavBar,
    NavBarItem,
    Icon,
    Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarIcon,
    TabBarLabel,
    Article,
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,

    CellsTitle,
    CellsTips,

    Form,
    FormCell,

    Input,
    Label,
    TextArea,
    Switch,
    Radio,
    Checkbox,
    Select,
    Uploader
} from 'react-weui-to-mobile';
import {vConsole} from 'vconsole';

import iconSrc from '../../images/icon.png';
import vcodeSrc from '../../images/vcode.jpg';
import avatarSrc from '../../images/avatar.jpg';


const appMsgIcon = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" />
const smallIcon =
    <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
        style={{
    width: '20px',
    marginRight: '5px',
    display: 'block'
}}/>;

class Application extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            tab:0,
            insidetab:0,
            demoFiles : [
                {
                    url: avatarSrc,
                    onClick: e=>alert('事件测试')
                },
                {
                    url: avatarSrc
                },
                {
                    url: avatarSrc
                },
                {
                    url: avatarSrc,
                    error: true
                },
                {
                    url: avatarSrc,
                    status: '50%'
                }
            ]
        };
    }

    backIndex=()=>{
        console.log(678);
    };

    render(){
        console.log(123,'hello');
        return(
            <div  style={{height:'100%'}}>
                <Nav>
                    <a className="left" href="javascript:void(0);" onClick={()=>this.backIndex()}><Icon type="icon" value="left"/>返回</a>
                    <a className="right" href="#">刷新<Icon type="icon" value="refresh"/></a>
                    <h1 className="title">标题</h1>
                </Nav>
                <Tab>
                    <TabBody>
                        <div style={{display: this.state.tab == 0 ? null : 'none',marginTop:'55px'}}>
                            <Panel access>
                                <PanelHeader>
                                    图文组合列表
                                </PanelHeader>
                                <PanelBody>
                                    <MediaBox type="appmsg" href="javascript:void(0);">
                                        <MediaBoxHeader>{appMsgIcon}</MediaBoxHeader>
                                        <MediaBoxBody>
                                            <MediaBoxTitle>标题一</MediaBoxTitle>
                                            <MediaBoxDescription>
                                                由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                                            </MediaBoxDescription>
                                        </MediaBoxBody>
                                    </MediaBox>
                                    <MediaBox type="appmsg" href="javascript:void(0);">
                                        <MediaBoxHeader>{appMsgIcon}</MediaBoxHeader>
                                        <MediaBoxBody>
                                            <MediaBoxTitle>标题二</MediaBoxTitle>
                                            <MediaBoxDescription>
                                                由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                                            </MediaBoxDescription>
                                        </MediaBoxBody>
                                    </MediaBox>
                                </PanelBody>
                                <PanelFooter href="javascript:void(0);">
                                    查看更多
                                </PanelFooter>
                            </Panel>

                            <Panel access>
                                <PanelHeader>
                                    文字组合列表
                                </PanelHeader>
                                <PanelBody>
                                    <MediaBox type="text">
                                        <MediaBoxTitle>标题一</MediaBoxTitle>
                                        <MediaBoxDescription>
                                            由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                                        </MediaBoxDescription>
                                    </MediaBox>
                                    <MediaBox type="text">
                                        <MediaBoxTitle>标题二</MediaBoxTitle>
                                        <MediaBoxDescription>
                                            由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                                        </MediaBoxDescription>
                                    </MediaBox>
                                </PanelBody>
                                <PanelFooter href="javascript:void(0);">
                                    查看更多
                                </PanelFooter>
                            </Panel>

                            <Panel>
                                <PanelHeader>
                                    小图文组合列表
                                </PanelHeader>
                                <PanelBody>
                                    <MediaBox type="small_appmsg">
                                        <Cells access>
                                            <Cell href="javascript:;">
                                                <CellHeader>{smallIcon}</CellHeader>
                                                <CellBody>
                                                    <p>文字标题</p>
                                                </CellBody>
                                                <CellFooter/>
                                            </Cell>
                                            <Cell href="javascript:;">
                                                <CellHeader>{smallIcon}</CellHeader>
                                                <CellBody>
                                                    <p>文字标题</p>
                                                </CellBody>
                                                <CellFooter/>
                                            </Cell>
                                        </Cells>
                                    </MediaBox>
                                </PanelBody>
                            </Panel>

                            <Panel>
                                <PanelHeader>
                                    文字列表附来源
                                </PanelHeader>
                                <PanelBody>
                                    <MediaBox type="text">
                                        <MediaBoxTitle>标题一</MediaBoxTitle>
                                        <MediaBoxDescription>
                                            由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                                        </MediaBoxDescription>
                                        <MediaBoxInfo>
                                            <MediaBoxInfoMeta>文字来源</MediaBoxInfoMeta>
                                            <MediaBoxInfoMeta>时间</MediaBoxInfoMeta>
                                            <MediaBoxInfoMeta extra>其它信息</MediaBoxInfoMeta>
                                        </MediaBoxInfo>
                                    </MediaBox>
                                </PanelBody>
                            </Panel>
                        </div>
                        <div style={{display: this.state.tab == 1 ? null : 'none',marginTop:'55px'}}>
                            <Article>
                                <h1>大标题</h1>
                                <Button >Increase</Button>
                                <section>
                                    <h2 className="title">章标题</h2>
                                    <section>
                                        <h3>1.1 节标题</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute</p>
                                    </section>
                                    <section>
                                        <h3>1.2 节标题</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </section>
                                </section>
                            </Article>
                        </div>
                        <div style={{display: this.state.tab == 2 ? null : 'none',marginTop:'55px'}}>
                            <CellsTitle>带说明的列表项</CellsTitle>
                            <Cells>
                                <Cell>
                                    <CellBody>
                                        标题文字
                                    </CellBody>
                                    <CellFooter>
                                        说明文字
                                    </CellFooter>
                                </Cell>
                            </Cells>

                            <CellsTitle>带图标、说明的列表项</CellsTitle>
                            <Cells>
                                <Cell>
                                    <CellHeader>
                                        <img src={iconSrc} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                                    </CellHeader>
                                    <CellBody>
                                        标题文字
                                    </CellBody>
                                    <CellFooter>
                                        说明文字
                                    </CellFooter>
                                </Cell>
                                <Cell>
                                    <CellHeader>
                                        <img src={iconSrc} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                                    </CellHeader>
                                    <CellBody>
                                        标题文字
                                    </CellBody>
                                    <CellFooter>
                                        说明文字
                                    </CellFooter>
                                </Cell>
                            </Cells>

                            <CellsTitle>带说明、跳转的列表项</CellsTitle>
                            <Cells access>
                                <Cell href="javascript:;">
                                    <CellBody>
                                        标题文字
                                    </CellBody>
                                    <CellFooter>
                                        说明文字
                                    </CellFooter>
                                </Cell>
                                <Cell>
                                    <CellBody>
                                        标题文字
                                    </CellBody>
                                    <CellFooter>
                                        说明文字
                                    </CellFooter>
                                </Cell>
                            </Cells>

                            <CellsTitle>带图标、说明、跳转的列表项</CellsTitle>
                            <Cells access>
                                <Cell href="javascript:;">
                                    <CellHeader>
                                        <img src={iconSrc} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                                    </CellHeader>
                                    <CellBody>
                                        标题文字
                                    </CellBody>
                                    <CellFooter>
                                        说明文字
                                    </CellFooter>
                                </Cell>
                                <Cell>
                                    <CellHeader>
                                        <img src={iconSrc} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                                    </CellHeader>
                                    <CellBody>
                                        标题文字
                                    </CellBody>
                                    <CellFooter>
                                        说明文字
                                    </CellFooter>
                                </Cell>
                            </Cells>

                            <CellsTitle>单选列表项</CellsTitle>
                            <Form radio>
                                <FormCell radio>
                                    <CellBody>标题文字</CellBody>
                                    <CellFooter>
                                        <Radio name="radio1" value="1" defaultChecked/>
                                    </CellFooter>
                                </FormCell>
                                <FormCell radio>
                                    <CellBody>标题文字</CellBody>
                                    <CellFooter>
                                        <Radio name="radio1" value="2"/>
                                    </CellFooter>
                                </FormCell>
                            </Form>

                            <CellsTitle>复选列表项</CellsTitle>
                            <Form checkbox>
                                <FormCell checkbox>
                                    <CellHeader>
                                        <Checkbox name="checkbox1" value="1"/>
                                    </CellHeader>
                                    <CellBody>标题文字</CellBody>
                                </FormCell>
                                <FormCell checkbox>
                                    <CellHeader>
                                        <Checkbox name="checkbox2" value="2" defaultChecked/>
                                    </CellHeader>
                                    <CellBody>标题文字</CellBody>
                                </FormCell>
                            </Form>

                            <CellsTitle>开关</CellsTitle>
                            <Form>
                                <FormCell switch>
                                    <CellBody>标题文字</CellBody>
                                    <CellFooter>
                                        <Switch/>
                                    </CellFooter>
                                </FormCell>
                            </Form>

                            <Form>
                                <FormCell>
                                    <CellHeader>
                                        <Label>qq</Label>
                                    </CellHeader>
                                    <CellBody>
                                        <Input type="tel" placeholder="请输入qq号"/>
                                    </CellBody>
                                </FormCell>
                                <FormCell vcode={true}>
                                    <CellHeader>
                                        <Label>验证码</Label>
                                    </CellHeader>
                                    <CellBody>
                                        <Input type="number" placeholder="请输入验证码"/>
                                    </CellBody>
                                    <CellFooter>
                                        <img src={vcodeSrc} />
                                    </CellFooter>
                                </FormCell>
                                <FormCell>
                                    <CellHeader>
                                        <Label>银行卡</Label>
                                    </CellHeader>
                                    <CellBody>
                                        <Input type="number" placeholder="请输入银行卡号"/>
                                    </CellBody>
                                </FormCell>
                                <FormCell vcode={true} warn={true}>
                                    <CellHeader>
                                        <Label>验证码</Label>
                                    </CellHeader>
                                    <CellBody>
                                        <Input type="number" placeholder="请输入验证码"/>
                                    </CellBody>
                                    <CellFooter>
                                        <Icon value="warn" />
                                        <img src={vcodeSrc} />
                                    </CellFooter>
                                </FormCell>
                            </Form>

                            <ButtonArea>
                                <Button>确定</Button>
                                <Button type="default">取消</Button>
                            </ButtonArea>

                            <CellsTitle>上传</CellsTitle>
                            <Form>
                                <FormCell>
                                    <CellBody>
                                        <Uploader
                                            title="图片上传"
                                            maxCount={6}
                                            files={this.state.demoFiles}
                                            onError={msg => alert(msg)}
                                            onChange={(file,e) => {
                                    let newFiles = [...this.state.demoFiles, {url:file.data}];
                                    this.setState({
                                        demoFiles: newFiles
                                    });
                                }}
                                        />
                                    </CellBody>
                                </FormCell>
                            </Form>

                            <CellsTitle>文本域</CellsTitle>
                            <Form>
                                <FormCell>
                                    <CellBody>
                                        <TextArea placeholder="请输入评论" rows="3" maxlength="200"></TextArea>
                                    </CellBody>
                                </FormCell>
                            </Form>

                            <CellsTitle>选择</CellsTitle>
                            <Form>
                                <FormCell select selectPos="before">
                                    <CellHeader>
                                        <Select>
                                            <option value="1">+86</option>
                                            <option value="2">+80</option>
                                            <option value="3">+84</option>
                                            <option value="4">+87</option>
                                        </Select>
                                    </CellHeader>
                                    <CellBody>
                                        <Input type="tel" placeholder="请输入号码"/>
                                    </CellBody>
                                </FormCell>
                            </Form>

                            <CellsTitle>选择</CellsTitle>
                            <Form>
                                <FormCell select>
                                    <CellBody>
                                        <Select defaultValue="2">
                                            <option value="1">微信号</option>
                                            <option value="2">QQ号</option>
                                            <option value="3">Email</option>
                                        </Select>
                                    </CellBody>
                                </FormCell>
                                <FormCell select selectPos="after">
                                    <CellHeader>国家/地区</CellHeader>
                                    <CellBody>
                                        <Select data={[
                                {
                                    value: 1,
                                    label: '中国'
                                },
                                {
                                    value: 2,
                                    label: '美国'
                                },
                                {
                                    value: 3,
                                    label: '英国'
                                }
                            ]} />
                                    </CellBody>
                                </FormCell>
                            </Form>
                        </div>
                        <div style={{display: this.state.tab == 3 ? null : 'none',marginTop:'45px'}}>
                            <Tab>
                                <NavBar>
                                    <NavBarItem active={this.state.insidetab == 0} onClick={e=>this.setState({insidetab:0})}>选项一</NavBarItem>
                                    <NavBarItem active={this.state.insidetab == 1} onClick={e=>this.setState({insidetab:1})}>选项二</NavBarItem>
                                    <NavBarItem active={this.state.insidetab == 2} onClick={e=>this.setState({insidetab:2})}>选项三</NavBarItem>
                                </NavBar>
                                <TabBody>
                                    <Article style={{display: this.state.insidetab == 0 ? null : 'none'}}>
                                        <h1>选项页1</h1>
                                        <section>
                                            <h2 className="title">章标题</h2>
                                            <section>
                                                <h3>1.1 节标题</h3>
                                                <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                                            </section>
                                        </section>
                                    </Article>
                                    <Article style={{display: this.state.insidetab == 1 ? null : 'none'}}>
                                        <h1>选项页2</h1>
                                        <section>
                                            <h2 className="title">章标题</h2>
                                            <section>
                                                <h3>2.1 节标题</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute</p>
                                            </section>
                                            <section>
                                                <h3>2.2 节标题</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </section>
                                        </section>
                                    </Article>
                                    <Article style={{display: this.state.insidetab == 2 ? null : 'none'}}>
                                        <h1>选项页3</h1>
                                        <section>
                                            <h2 className="title">章标题</h2>
                                            <section>
                                                <h3>3.1 节标题</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute</p>
                                            </section>
                                            <section>
                                                <h3>3.2 节标题</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </section>
                                        </section>
                                    </Article>
                                </TabBody>
                            </Tab>
                        </div>
                    </TabBody>
                    <TabBar>
                        <TabBarItem
                            active={this.state.tab == 0}
                            onClick={e=>this.setState({tab:0})}
                            icon={<Icon type="icon" value="message" />}
                            label="微信"
                        />
                        <TabBarItem active={this.state.tab == 1} onClick={e=>this.setState({tab:1})}>
                            <TabBarIcon>
                                <Icon type="icon" value="me" />
                            </TabBarIcon>
                            <TabBarLabel>通讯录</TabBarLabel>
                        </TabBarItem>
                        <TabBarItem
                            active={this.state.tab == 2}
                            onClick={e=>this.setState({tab:2})}
                            icon={<Icon type="icon" value="code" />}
                            label="发现"
                        />
                        <TabBarItem
                            active={this.state.tab == 3}
                            onClick={e=>this.setState({tab:3})}
                            icon={<Icon type="icon" value="emoji" />}
                            label="我"
                        />
                    </TabBar>
                </Tab>
            </div>
        );
    }
}

function mapStatToProps(state){
    return {
        application:state.application
    }
}

export default connect(mapStatToProps)(Application);