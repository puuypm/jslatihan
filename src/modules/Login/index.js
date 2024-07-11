import React, { Fragment, useState } from 'react';
import { Alert, Button, Checkbox, Form, Input, notification } from 'antd';
import axios from 'axios';

const Login = () => {
    const onFinish = (values) => {
        console.log("Success:", values);
        checkValidation(values);
        postToApi(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const openNotification = (IsSuccess) => {
        notification.open({
            message: IsSuccess ? "Login Successfully" : "Failed to login",
            description: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
            onClick: () => {
                console.log("Notification Clicked!");
            },
        });
    };

    const checkValidation = (values) => {
        const { username, password } = values;

        const usernameValid = "test";
        const passwordValid = "test";

        if (username === usernameValid && password === passwordValid) {
            openNotification(true);
        } else {
            openNotification(false);
        }
    };

    const postToApi = (data) => {
        const { username, password } = data;
        axios.post("https://cac11cbe27203b6ec42e.free.beeceptor.com/api/users/", {
            username,
            password,
        });
    };

    const getDataFromApi = async () => {
        const data = await axios.get("https://cac11cbe27203b6ec42e.free.beeceptor.com/api/users/");
        console.log("data dari server : ", data);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Button type="primary" onClick={getDataFromApi}>
                Get Data From Api
            </Button>
        </div>
    );
};

export default Login;