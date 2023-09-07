import { useContext } from "react";
import { useRouter } from 'next/router';
import { UserContext } from "../context";

const Nav = () => {
    const [state, setState] = useContext(UserContext);
    const router = useRouter();

    const logout = () => {
        window.localStorage.removeItem('auth');
        setState(null);
        router.push("/login");
    }

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white text-xl font-bold">Auraverse</a>

                <div className="hidden md:flex space-x-4">
                    <a className={`text-white ${router.pathname === '/user/dashboard' ? 'font-semibold' : ''}`} href="/user/dashboard">Dashboard</a>
                    <a className={`text-white ${router.pathname === '/chatbot' ? 'font-semibold' : ''}`} href="/chatbot">Talk To Lumi</a>
                    <a className="text-white" href="#">Tickets</a>
                    <a className="text-white" href="#">Settings</a>
                </div>

                <div className="md:hidden">
                    <button className="text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                <div className="md:flex items-center space-x-4">
                    {state ? (
                        <button className="text-white" onClick={logout}>Logout</button>
                    ) : (
                        <>
                            <a className="bg-green-400 text-white py-2 px-4 rounded-lg" href="/login">Login</a>
                            <a className="text-white" href="/register">Sign Up</a>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
