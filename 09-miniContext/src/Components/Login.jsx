import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [usernamme, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSummit = (e)=>{
    e.preventDefault()
    setUser({usernamme,password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={usernamme} onChange={(e)=>setUsername(e.target.value)} placeholder='username'  />
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'  />
            <button onClick={handleSummit}>summit</button>

        </div>
    )
}

export default Login
