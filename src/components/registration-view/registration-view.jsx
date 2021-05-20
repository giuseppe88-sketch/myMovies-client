import React, { useState} from 'react';
import { render } from 'react-dom';

export function RegistrationView(props){
     
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail]      =  useState('');

    const submitRequest = (e) => {
        e.preventDefault();
        console.log(username, password, email);
        /* Send a request to the server for authentication */
    /*then call props.onLoggedIn(username) */
        props.onRegisterIn(username);
    };


        return (
            <form>
                <label>
                    Username: <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label> Password: <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <label>Email: <input type="email" value={email} onChange={ e=> setEmail(e.target.value)}/>

                </label>
                <button type="submit" onClick={submitRequest}>Submit</button>
            </form>
        );

    
}
RegistrationView.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }),
    onRegisterIn: PropTypes.func.isRequired,
  };
