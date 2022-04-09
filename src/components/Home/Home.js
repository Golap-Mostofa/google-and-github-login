import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div><p>
            {user ? user.displayName : "Pleash Login"}
            <br />
            {user ? user.email : "email note aveleble"}
            
        </p>
            
        </div>
    );
};

export default Home;