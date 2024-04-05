import './style.css'
import { useState } from 'react';

import Login from './user/Login';
import Register from './user/Register';


function Account ()
{


    const [ isLogin, setIslogin ] = useState( true )

    const handleToggle = () =>
    {
        setIslogin( !isLogin )
    }

    return (
        <>
            <div className='account-page'>
                <div className='acc-img'>

                </div>
                <div className='user-login-register'>
                    <div class="form-container">
                        <div className='form-account-btn'>
                            <span className='vcb' onClick={ () => { handleToggle() } }>Đăng Nhập</span>
                            <span className='vcb' onClick={ () => { handleToggle() } }>Đăng ký</span>
                            <hr id="Indicator" style={ { transform: isLogin ? 'translateX(10px)' : 'translateX(130px)' } } />
                        </div>
                        <div className='bao'>
                            { isLogin ?
                                ( <Login /> )
                                :
                                ( <Register /> )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account;