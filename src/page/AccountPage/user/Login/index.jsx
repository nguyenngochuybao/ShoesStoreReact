import './style.css'
import { Form, Input, Button, Divider, Typography } from "antd"
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { AiOutlineGoogle, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { useState } from 'react';

function Login ()
{
    return (

        <Form className='formInp'>
            <Form.Item
                rules={ [ {
                    required: true,
                    message: "vui lòng nhập lại Email"
                }
                    ,
                {
                    type: 'email',
                    message: "vui lòng nhập đúng Email"
                } ] }

                name={ "email" }
            >
                <Input
                    className='inp'
                    placeholder=' Nhập tên Email'
                    prefix={ <MailOutlined /> }
                />
            </Form.Item>
            <Form.Item
                rules={ [ {
                    required: true,
                    message: "vui lòng nhập lại mật khẩu"
                },
                {
                    min: 6,
                    message: "Mật khẩu phải có ít nhất 6 ký tự",
                } ] }
                name={ 'password' }>
                <Input.Password
                    className='inp'
                    placeholder='Nhập mật Khẩu'
                    prefix={ <LockOutlined /> }
                />
            </Form.Item>

            <button className='btn-loginForm'>
                Đăng Nhập
            </button>
            <br />
            <a href="">Forgot Passwword</a>
        </Form>
    )
}

export default Login;