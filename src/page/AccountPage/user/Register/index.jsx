import './style.css'
import { Form, Input, Button, Divider, Typography } from "antd"
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { AiOutlineGoogle, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { useState } from 'react';

function Register ()
{
    return (
        <Form
            className='formInp'
        >
            <Form.Item
                rules={ [ {
                    required: true,
                    message: "Vui lòng nhập tên người dùng"
                },
                {
                    min: 6,
                    message: "Tên người dùng phải có ít nhất 6 ký tự",
                },
                ] }
                name={ "user" }
            >
                <Input
                    className='inp'
                    placeholder=' Nhập tên người dùng'
                    prefix={ <UserOutlined /> }
                />
            </Form.Item>
            <Form.Item
                rules={ [ {
                    required: true,
                    message: "vui lòng nhập Email"
                },
                {
                    type: "email",
                    message: "vui lòng nhập đúng Email",
                } ] }
                name={ 'email' }>
                <Input
                    className='inp'
                    placeholder='Nhập mật Khẩu'
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
            <Form.Item
                rules={ [ {
                    required: true,
                    message: "vui lòng nhập lại mật khẩu"
                },
                ( { getFieldValue } ) => ( {
                    validator ( _, value )
                    {
                        if ( !value || getFieldValue( "password" ) === value )
                        {
                            return Promise.resolve()
                        }
                        return Promise.reject(
                            new Error( "Mật khẩu bạn vừa nhập không trùng khớp!" )
                        );
                    }
                    } )
                ] }
                hasFeedback
                name={ 'comfirm' }>
                <Input.Password
                    className='inp'
                    placeholder='Nhập mật Khẩu'
                    prefix={ <LockOutlined /> }
                />
            </Form.Item>
            <button className='btn-regForm'>
                Đăng Ký
            </button>
        </Form>
    )
}

export default Register;