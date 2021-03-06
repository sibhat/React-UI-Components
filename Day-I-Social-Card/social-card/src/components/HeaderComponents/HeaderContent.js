import React from 'react';
import HeaderTitle from './HeaderTitle';
import './Header.css';

const HeaderContent = ()=> {
    return (
        <div className='header__content'>
            <HeaderTitle />
            <p>Let's learn React by buliding simple interface with components.
                Don't try to overthink it, just keep it simple and have fun.
                Once you feel comfortable using components you are well on your way to mastering React!
            </p>
        </div>
    );
}
export default HeaderContent;