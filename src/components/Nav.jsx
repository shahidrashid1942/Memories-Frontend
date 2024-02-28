import React, { useState, useContext } from 'react'
import { Moon, Sun } from '../svg icons/moon';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/Context';


function Nav({ darkMode }) {
    const [isDark, setDark] = useState(false);
    const { loggingOut, status } = useContext(noteContext);
    const navigate = useNavigate();


    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li>
                            <a href='https://shahidrashid.vercel.app' target='_blank'>Portfolio</a>
                            </li>
                        </ul>
                    </div>
                    <h1 className=" text-2xl font-bold">Memories</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><a href="https://shahidrashid.vercel.app" target='_blank'>Portfolio</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {status && <button className='btn mx-2' onClick={() => {
                        loggingOut();
                        navigate("/");
                    }}>Logout?</button>}
                    <button className="btn" onClick={() => {
                        setDark(!isDark)
                        return darkMode(!isDark)
                    }}>
                        {isDark ? <Sun /> : <Moon /> }
                    </button>
                </div>
            </div>
        </>
    )
}

export default Nav;