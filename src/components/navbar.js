import React from 'react'
import {Link} from 'react-router-dom';
import {useState, useContext, useEffect} from 'react';
import {MdFingerprint} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Button} from './button'
import  './navbar.css';
import {IconContext} from 'react-icons/lib';
import {AuthContext} from '../Pages/context/contex'




function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true);
    const values = useContext(AuthContext);



    const closeMobileMenu = () => {setClick(false);}
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    const handleSignOut = () => {
        values.signout();
    }
    console.log(values);

    useEffect(()=>
    {showButton();}
    )

    const handleClick = () => {
        setClick(!click);
    }
    window.addEventListener('resize',showButton)
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/'className="navbar-logo" onClick={closeMobileMenu}>
                    <MdFingerprint className='navbar-icon' />
                    Habit Tracker 
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                {click? <FaTimes />: <FaBars />}
                </div>
                <ul className={click? 'nav-menu active':'nav-menu'}>
                    <li  className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                        
                    </li>
                    <li  className="nav-item">
                        <Link to='/habits' className="nav-links" >
                            Habits
                        </Link>
                        
                    </li>
                    <li  className="nav-btn">
                        {values.SignedOut &&

                        <div>
                                  {button?
                        ( 
                           
                                <Button buttonStyle='btn--outline' onClick={handleSignOut}>Log Out</Button>
                            
                        ):
                        ( 
                           
                                <Button buttonStyle='btn--outline' buttonSize='btn-mobile' onClick={handleSignOut}>Log Out</Button>
                            
                        )

                        }
                        </div>
                        
                        
                        
                        }
                  
                        
                    </li>
                    <li  className="nav-btn">
                        {button?
                        ( 
                            <Link to='/signup' className='btn-link'>
                                <Button buttonStyle='btn--outline'>Sign Up</Button>
                            </Link>
                        ):
                        ( 
                            <Link  to='signup' className='btn-link'>
                                <Button buttonStyle='btn--outline' buttonSize='btn-mobile'>Sign Up</Button>
                            </Link>
                        )

                        }
                        
                    </li>


                </ul>
            </div>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
