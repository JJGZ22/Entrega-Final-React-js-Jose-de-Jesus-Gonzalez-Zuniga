import { useState } from "react"
import { useAuth } from "../../context/AuthContext"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useAuth()

    const handleLogin = (e) => {
        e.preventDefault()

        login(username, password)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleLogin}>
                <label>
                    USERNAME :
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    PASSWORD :
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button className="btn btn-info btn-outline-danger  ">LOGIN</button>
            </form>
        </div>
    )
}

export default Login