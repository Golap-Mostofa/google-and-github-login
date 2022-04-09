import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {singinWhithGoogle} = useFirebase()
    return (
        <div>
            <h2>Pleash Login New</h2>
            <br /><br />
            <button onClick={singinWhithGoogle}>sinin Google</button>
            <form >
                <input type="name"  placeholder='Your Name'/>
                <br />
                <input type="email" placeholder='Your password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;