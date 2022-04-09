import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Products = () => {
    const [user] = useAuthState(app)
    return (
        <div>
            <h2>this is my products components</h2>
            <strong>
                {
                    user ? user.displayName : 'user nai!!'
                }
            </strong>
        </div>
    );
};

export default Products;