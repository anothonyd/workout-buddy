import { NavLink } from "react-router-dom"
import { useLogout } from "../Hooks/useLogout"
import { useAuthContext } from "../Hooks/useAuthContext"

export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className='container flex justify-between w-full  mx-auto max-w-7xl'>
                <NavLink to='/'>
                    <h1 className="text-3xl font-bold my-4">Workout Buddy</h1>
                </NavLink>
                <nav className="flex font-semibold ">
                    {user && (
                        <div >
                            <span className="font-normal">{user.email}</span>
                            <button
                                className="bg-transparent ms-2 text-black/50 border-2 border-black/50 p-1 px-2 cursor-pointer rounded hover:scale-95 transition-all duration-100"
                                onClick={handleClick}>Log out
                            </button>
                        </div>
                    )}
                    {!user && (
                        <div className="flex gap-2 items-center">
                            <NavLink to='/login'>
                                <h6 className="text-md border-b-[3px] py-1 border-transparent hover:border-black/80 transition-all duration-200">Log in</h6>
                            </NavLink>
                            |
                            <NavLink to='/signup'>
                                <h6 className="text-md border-b-[3px] py-1 border-transparent hover:border-black/80 transition-all duration-200">Sign up</h6>
                            </NavLink>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}
