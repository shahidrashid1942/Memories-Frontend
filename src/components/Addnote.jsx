import React, {useState, useContext} from 'react'
import noteContext from '../context/notes/Context';
import { useNavigate } from 'react-router-dom'; 

function Addnote() {
    const { addNote } = useContext(noteContext);
    const [input, setInput] = useState({ title: "", description: "" });
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prevInput => ({
            ...prevInput,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(input.title, input.description);
        navigate("/notes");
    }



    return (
        <div className='min-h-[80dvh] flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
                <h2 className='text-2xl'>Add Your Note Here</h2>
                <div className='flex flex-col justify-center items-center space-y-2 p-8 shadow-xl rounded-lg'>
                    <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" required onChange={handleChange} name='title' value={input.title} minLength={3}/>
                    <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Description" required onChange={handleChange} name='description' value={input.description} minLength={5}></textarea>
                    <button className='input input-bordered rounded px-1 py-2 w-full max-w-xs hover:btn-outline'>Add Note</button>
                </div>
            </form>
        </div>
    )
}

export default Addnote