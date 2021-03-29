import React from 'react';
import { Form, Input, Button, Row } from 'antd';
import usersData from "./users";
import { Redirect } from 'react-router-dom';


  
const LoginForm = (props) => {
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };

    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    const onFinish = (values) => {
        props.setUser(values.login);
        props.setFavoriteList();
      };
    
    const onFinishFailed = (errorInfo) => {
    };

    return (
        <Row justify="center" align="middle">
            <Form
                {...layout}
                name="loginForm"
                initialValues={{
                remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{"paddingTop" : "40px"}}
            >
                <Form.Item
                label="Логин"
                name="login"
                rules={[
                    {
                    required: true,
                    message: 'Введите логин!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            
                          if (usersData.find(el => el.login === getFieldValue('login') && el.password === getFieldValue('password'))) {
                            return Promise.resolve();
                          }
            
                          return Promise.reject(new Error('Неверный логин или пароль'));
                        },
                      }),
                ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Пароль"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Введите пароль!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            
                          if (usersData.find(el => el.login === getFieldValue('login') && el.password === getFieldValue('password'))) {

                            return Promise.resolve();
                          }
            
                          return Promise.reject(new Error('Неверный логин или пароль'));
                        },
                      }),
                ]}
                >
                <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
                </Form.Item>
            </Form>
        </Row>
    );
}

const Login = (props) => {
    if(props.token) {
        return <Redirect to="/search" />
    }
    return (
        <LoginForm props={{...props}} setUser={props.setUser} setFavoriteList={props.setFavoriteList}/>
    )
}

export default Login;