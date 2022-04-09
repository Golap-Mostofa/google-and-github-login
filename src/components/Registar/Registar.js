import React from 'react';

const Registar = () => {
    return (
        <div>
            <h2>Pleash Registar New</h2>
            <form >
                <input type="name"  placeholder='Your Name'/>
                <br />
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Your password' />
                <br />
                <input type="submit" value="registar" />
            </form>
        </div>
    );
};

export default Registar;