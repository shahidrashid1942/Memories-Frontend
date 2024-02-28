import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import noteContext from '../context/notes/Context';
import Card from './card';

function Notes() {
    const { getNotes, notes, deleteNote, updateNote, status } = useContext(noteContext);
    const [loading, setLoading] = useState(true);
    const [modal, showModal] = useState(false);
    const [newNote, updateNewNote] = useState({ note: { title: "", description: "" }, id: "" });

    const handleDelete = async (id) => {
        setLoading(true);
        await deleteNote(id);
        await getNotes();
        setLoading(false);
    }

    useEffect(() => {
        const fetchNotes = async () => {
            setLoading(true); // Set loading state to true while fetching notes
            if (status) {
                await getNotes(); // Fetch notes only if authenticated
            }
            setLoading(false); // Set loading state to false after fetching notes
        };

        fetchNotes(); // Call fetchNotes function on component mount
    }, [status]);

    const openModal = (title, description, id) => {
        updateNewNote({ note: { title: title, description: description }, id: id })
        showModal(true);
    }

    const closeModal = () => {
        showModal(false);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateNewNote(prevInput => ({
            ...prevInput,
            note: {
                ...prevInput.note,
                [name]: value
            }
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        updateNote(newNote.id, newNote.note.title, newNote.note.description);
        showModal(false);
        await getNotes();
        setLoading(false);
    }

    return (
        <div className='min-h-[80dvh] flex flex-col '>
            <div>
                {modal && (
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle p-0" open>
                        <div className="modal-box py-5">
                            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center space-y-2 p-0'>
                                <h2 className='text-2xl'>Update Note</h2>
                                <div className='flex flex-col justify-center items-center space-y-2 '>
                                    <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" required onChange={handleChange} name='title' value={newNote.note.title} minLength={3} />
                                    <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Description" required onChange={handleChange} name='description' value={newNote.note.description} minLength={5}></textarea>
                                    <button className='input input-bordered rounded px-1 py-2 w-full max-w-xs hover:btn-outline'>Update Note</button>
                                </div>
                            </form>
                            <div className="modal-action">
                                <button className="btn" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </dialog>
                )}
            </div>
            <Link className='fixed bottom-[10%] left-[3%]  z-10' to="/addnote">
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3zm-3-7V3.5L18.5 9z"></path></svg>
            </Link>
            {loading ? (
                <div className='flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><circle cx={12} cy={2} r={0} fill="currentColor"><animate attributeName="r" begin={0} calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="currentColor" transform="rotate(45 12 12)"><animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="currentColor" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="currentColor" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="currentColor" transform="rotate(180 12 12)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="currentColor" transform="rotate(225 12 12)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="currentColor" transform="rotate(270 12 12)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="currentColor" transform="rotate(315 12 12)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle></svg>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    {notes && notes.length > 0 ? (
                        <>
                            <h2 className='text-xl font-bold'>Hello {notes[0].username} </h2>
                            <p>Here are your Notes</p>
                            <div className='flex flex-wrap space-x-3 space-y-3 justify-center items-center'>
                                {notes.map((item) => (
                                    <Card key={item._id} title={item.title} description={item.description} deletefunc={handleDelete} id={item._id} edit={openModal} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4zm-7 12v-1h4v1h-4zm5-3v-1H4v1h12zm0-3v-1H4v1h12zm-7-3V6h4v1H6z" clipRule="evenodd" />
                            </svg>
                            <p className="text-lg text-gray-600">No notes found</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Notes;
