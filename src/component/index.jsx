import React from 'react';
import { Form, Input, Button, Checkbox,Row, Col ,message} from 'antd';
// import { _PURL,F } from '../components/common/common.jsx'
import  '../css/index.css'
const FormItem = Form.Item;
function noop() {
    return false;
}
class Index extends React.Component{
    handleSubmit = function(e){
        e.preventDefault();
        let me = this;
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                console.log('Errors in form!!!');
                return;
            }
            console.log('Submit!!!');
            console.log(values);
       /*     sessionStorage.setItem('token', "123");
            me.props.history.pushState({},"test");
            return;*/
            // let to = {token:values.password}
            // let params = {username:values.username,password:values.password}
            // F.AJAXH(_PURL.userlogin,"POST",JSON.stringify(params), function(data) {
            //     if(data.code==0){
                    sessionStorage.setItem('token', '123456');
                    sessionStorage.setItem('userid','userid');
                    sessionStorage.setItem('loginusername', 'loginusername');
                    sessionStorage.setItem('psnname', '朱羽明');
                    sessionStorage.setItem('userinfo', 'userinfo');

                    console.log(me.props.history.params);
                    me.props.history.pushState({},"tabledemo");

            //     }else{
            //         message.success(data.msg, 2)
            //     }

            // });
        });

    }
    render(){
        const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
        const nameProps = getFieldProps('username', {
            rules: [
                { required: true,  message: '请填写帐号' }
            ],
        });
        const passwdProps = getFieldProps('password', {
            rules: [
                { required: true, whitespace: true, message: '请填写密码' }
            ],
        });
        return(
            <div>
                <Row>
                    <Col span="24" className="text-center des">
                        { /*<span>企聊后台管理</span>*/}
                    </Col>
                </Row>

                <Form className="box login" form={this.props.form} horizontal onSubmit={e=>this.handleSubmit(e)}>
                    <fieldset className="boxBody">
                        <FormItem
                            label="账户："
                            hasFeedback>
                            <Input  {...nameProps} placeholder="请输入账户名"
                                />
                        </FormItem>
                        <FormItem
                            label="密码："
                            hasFeedback>
                            <Input{...passwdProps} type="password" autoComplete="off"
                                                   onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
                                   />
                        </FormItem>
                    </fieldset>
                    <footer>
                        <Button className="btnLogin" type="primary" htmlType="submit">登录</Button>
                    </footer>
                </Form>
            </div>
        )
    }
}
Index = Form.create()(Index);
export default Index