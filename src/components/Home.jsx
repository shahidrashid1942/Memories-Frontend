import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import noteContext from '../context/notes/Context';

function Home() {
    const { status } = useContext(noteContext);
    
    return (

        <div className='min-h-[80dvh] flex justify-center items-center'>
            <div className='flex flex-col space-y-2 p-4 justify-center items-center'>
                <p className='text-justify'>Say hello to a smarter way of note-taking! Our app simplifies your life by offering a secure platform to create and save notes. With your data stored indefinitely in our database, you can rest assured that your valuable insights are always at your fingertips. Join us today and discover the joy of organized thinking.</p>
                <Link to={status? '/notes' : '/signup'}><button className='border border-2px px-1 py-2 rounded btn btn-outline'> {status ? 'Your Notes' : 'Join Now!'}</button></Link>
            </div>
        </div>
    )
}

export default Home