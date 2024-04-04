import './style.css'

import Logo from './Logo'
import Menu from './Menu'
import Row from './Row'


function Header ()
{
    return (
        <div className='header'>
            <div className='container'>
                <div className='navbar'>
                    <Logo />
                    <Menu />
                </div>
                <Row />
            </div>
        </div>
    )
}

export default Header