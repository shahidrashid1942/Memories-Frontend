import React, { useState, useEffect } from "react";
import noteContext from "./Context";
import { useAlert } from "../alert/AlertContext";
import axios from 'axios';


const NoteState = (props) => {
    const [notes, setNotes] = useState();
    const [status, setStatus] = useState(null);
    const { showAlert } = useAlert();
    const url = process.env.BASE_URL;
    const authToken = localStorage.getItem('authToken');

    
    const checkStatus = () => {
        if (localStorage.getItem("authToken")) {
            setStatus(true);
        } else {
            setStatus(false);
        }
    }
    useEffect(() => {
        checkStatus();
    }, []);

    const loggingOut = () => {
        localStorage.removeItem("authToken");
        checkStatus();
        setNotes([]);
        showAlert("Logged out successfully.", true);
    }


    const getNotes = async () => {
        try {
            if (status) {
                const headers = {
                    "Content-Type": "application/json",
                    "auth-token": authToken
                };
                const res = await axios.get(`${url}api/notes/fetchallnotes`, { headers });
                setNotes(res.data);
            } else {
                showAlert("Please login to view notes.", false);
            }
        } catch (error) {
            console.error('Error fetching notes:', error.message);
        }
    };

    const deleteNote = async (id) => {
        const headers = {
            "Content-Type": "application/json",
            "auth-token": authToken
        };
        try {
            const res = await axios.delete(`${url}api/notes/deletenote/${id}`, { headers });
            showAlert("Note Deleted Successfully", true);
        } catch (error) {
            showAlert("Opps! Some Error Ocuured, try again.", false);
            console.error('Error deleting note:', error.message);
        }
    }

    const updateNote = async (id, title, description) => {
        const body = {
            title: title,
            description: description
        };
        const headers = {
            "Content-Type": "application/json",
            "auth-token": authToken
        };
        try {
            const res = await axios.put(`${url}api/notes/updatenote/${id}`, body, { headers });
            showAlert("Note Updated Successfully", true);
            getNotes();
        } catch (error) {
            showAlert("Opps! Some Error Ocuured, try again.", false);
            console.error('Error updating note:', error.message);
        }
    }

    const addNote = async (title, description) => {
        const body = {
            title: title,
            description: description
        };
        const headers = {
            "Content-Type": "application/json",
            "auth-token": authToken
        };
        try {
            const res = await axios.post(`${url}api/notes/addnote/`, body, { headers });
            showAlert("Your note has been successfully added", true);
            console.log(res);
        } catch (error) {
            showAlert("Opps! Some Error Ocuured, try again.", false);
            console.error('Error updating note:', error.message);
        }
    }
    const signup = async (username, email, password) => {
        const body = {
            name: username,
            email: email,
            password: password
        };
        const headers = {
            "Content-Type": "application/json"
        };
        try {
            const res = await axios.post(`${url}api/auth/createuser`, body, { headers });
            showAlert("User Created Successfully.", true);
        } catch (error) {
            showAlert("Failed to create user. Please try again.", false);
            history.push('/');
            console.error('Error creating user:', error.message);
        }
    }
    
    const login = async (email, password) => {
    const body = {
        email: email,
        password: password
    };
    const headers = {
        "Content-Type": "application/json"
    };
    try {
        const res = await axios.post(`${url}api/auth/login`, body, { headers });
        if(res.data.authToken) {
            localStorage.setItem('authToken', res.data.authToken);
            checkStatus();
            await getNotes();
            showAlert("Logged in successfully.", true);
        }
    } catch (error) {
        showAlert("Invalid Email or Password! Try Again.", false);
        history.push('/login'); 
        console.error('Error logging in:', error.message);
    }
}


    return (
        <noteContext.Provider value={{ notes, getNotes, deleteNote, updateNote, addNote, signup, login, checkStatus, status, loggingOut }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;