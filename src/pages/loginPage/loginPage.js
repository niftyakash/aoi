import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';
import { authenticationState } from '../../recoil/authenticationAtoms';
import { useNavigate, useNavigation } from 'react-router-dom';

function LoginPage() {

    const navigate = useNavigate()

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const adminCredentials = useRecoilValue(authenticationState)

    const onSubmitClick = () => {
        const adminId = adminCredentials.adminUserId;
        const adminPass = adminCredentials.adminPassword;

        if(adminId === user && password === adminPass)
        {
            // routes to next screen
            navigate('/home')
        }
        else
        {
            // document.getElementById('userEmail').reset();
            // document.getElementById('userPass').reset();
            setUser('');
            setPassword('');
            console.log("authentication failed");
        }
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const onInputChange = (event) => {
        setUser(event.target.value)
    }

  return (
    <div>
        <div>
            Login Page
        </div>
        <div>
            <div>
                <input id='userEmail' placeholder='email or Phone Number' onChange={onInputChange} value={user}/>
            </div>
            <div>
                <input id='userPass' placeholder='password' onChange={onPasswordChange} value={password}/>
            </div>
            <div className='link-button'>
                <button>
                    forgot password?
                </button>
            </div>
            <div>
                <button onClick={onSubmitClick}>
                    Submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default LoginPage