import React from 'react';

import  { ReactComponent as Logo} from '../../assets/original.svg';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/firebase.utils';

import './header.styles.scss';
const Header = ({currentUser}) => (
    <div className = "header">
        <Link to = "/">
            <Logo className="logo-container" />
        </Link>
            <div className='options' >
                <Link className="option" to = '/shop'>
                Shop
                </Link>
          
                <Link to = '/contact'>
                Contact
                </Link>
                {
                    currentUser ? 
                    <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
                    :
                    <Link className='option' to ='/login'>Sign In</Link>
                }
                </div>
    </div>
)

export default Header;