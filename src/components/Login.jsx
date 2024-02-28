import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import noteContext from '../context/notes/Context';
import { useNavigate } from 'react-router-dom'; 

function Login(props) {
    const [input, setInput] = useState({ email: "", password: "" });
    const { login } = useContext(noteContext);
    const navigate = useNavigate(); 


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prevInput => ({
            ...prevInput,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(input.email, input.password);
            navigate("/notes"); // Navigate to "/notes" if login is successful
        } catch (error) {
            navigate("/login");
            setInput({ email: "", password: "" }); // Navigate to home route ("/") if login fails
        }
    }


    return (
        <div className='min-h-[80dvh] flex flex-col justify-center items-center'>
            <h2 className='text-2xl'>Login</h2>
            <div className='space-y-2 p-8 shadow-xl rounded-lg'>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center space-y-2'>
                    <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="email" className="grow" placeholder="Email" required onChange={handleChange} name='email' value={input.email} />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input type="password" className="grow" placeholder='password' required onChange={handleChange} name='password' value={input.password} minLength={8} />
                </label>
                <button className='input input-bordered rounded px-1 py-2 w-full max-w-xs hover:btn-outline'>Submit</button>
                </form>
                <p className='text-sm text-center'>Don't have an account? <Link className={props.dark ? `underline decoration-white` : `underline decoration-black`} to="/signup">Signup</Link></p>
            </div>
        </div>
    )
}

export default Login;