import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import  './Header.css'

const Header = () => {
    
    const {user,hendelSingOut} = useFirebase()
    console.log(user);

    return (
        <div className='header'>
           <nav>
           <Link to='/'>Home</Link>
           <Link to='/Products'>Products</Link>
           <Link to='/Orders'>Orders</Link>
           <Link to='/Registar'>Registar</Link>
           <span>{user?.displayName && user.displayName}</span>
            {user?.uid 
            ?
             <button onClick={hendelSingOut}>sing out</button>
            :
                <Link to='/Login'>Login</Link>
            }
           </nav>
        </div>
    );
};

export default Header;