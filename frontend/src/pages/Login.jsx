import { useState } from "react"
import { useLogin } from "../Hooks/useLogin"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }
    return (
        <div className="flex w-full h-screen justify-center py-5">
            <form className="bg-black/60 max-w-md w-full rounded-lg p-5 h-max shadow-md shadow-black/50" onSubmit={handleSubmit}>
                <h3 className="text-3xl font-semibold text-white mb-3">Log in</h3>

                <label className="text-md text-white">Email:</label>
                <input
                    className="shadow-inner shadow-black/50 border-none"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} />

                <label className="text-md text-white">Password:</label>
                <input
                    className="shadow-inner shadow-black/50 border-none"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} />

                <button disabled={isLoading} className="bg-black/80 px-5 rounded-md shadow-md shadow-black/50 hover:bg-black/60">Login</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )

}

export default Login