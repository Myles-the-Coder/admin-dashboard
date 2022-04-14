import React, {useState} from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <>
    <input type="username" name="username" id="username" onChange={({target}) => setUsername(target)} />
    <input type="password" name="password" id="password" onChange={({target}) => setPassword(target)} />
    </>
  )
}

export default Login