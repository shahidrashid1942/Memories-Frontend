import React from 'react';

function Card({ title, description, deletefunc, id, edit }) {
    return (
        <div className="card w-[300px] bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
            <div className='flex justify-end items-center space-x-2 px-4 pb-2'>
            <button onClick={() => edit(title, description, id)}><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 14v-1h7v1zm0-4V9h11v1zm0-4V5h11v1zm8.23 13v-2.21l5.96-5.934l2.19 2.204L15.44 19zm5.96-4.985l.925-.955l-.925-.945l-.95.95z"></path></svg></button>
                <button onClick={() => deletefunc(id)}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20"><path fill="currentColor" d="M3.293 4L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-1.998-2A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM12 12.707l-1-1V14a.5.5 0 0 0 1 0zm-3-3l-1-1V14a.5.5 0 0 0 1 0zM12 8v1.879l3.481 3.48L16.446 5H17.5a.5.5 0 0 0 0-1h-5a2.5 2.5 0 0 0-5 0H6.121L11 8.879V8a.5.5 0 0 1 1 0m-.5-4h-3a1.5 1.5 0 1 1 3 0"></path></svg></button>
            </div>
        </div>
    );
}

export default Card;
