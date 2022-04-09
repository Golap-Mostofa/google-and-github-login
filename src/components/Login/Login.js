import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import app from '../../firebase.init';

const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle,user] = useSignInWithGoogle(auth)
    return (        
        <div>
            <h2>Pleash Login New</h2>
            <br /><br />
            <button onClick={()=>signInWithGoogle()}>sinin Google</button>
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