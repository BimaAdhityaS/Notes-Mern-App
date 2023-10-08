import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddNote from './AddNote';
import { Link } from 'react-router-dom';

const NoteList = () => {
    const [notes, setNotes] = useState([]);
    const [editNoteId, setEditNoteId] = useState(null); // Tambahkan state untuk id catatan yang akan diedit

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        const response = await axios.get('http://localhost:5000/api/notes');
        setNotes(response.data);
    }

    const deleteNote = async (id) => {
        await axios.delete(`http://localhost:5000/api/notes/${id}`);
        getNotes();
    }

    return (
        <div>
            <div className="note align-middle text-center border-b-2">
                <h1 className="text-4xl font-medium py-3">NOTE</h1>
            </div>
            <div className="flex flex-wrap justify-center">
                {notes.map((note) => (
                    <div className="card w-96 bg-base-100 shadow-xl mr-2 my-2" key={note.id}>
                        <div className="card-body">
                            <h2 className="card-title">{note.id}. {note.title}</h2>
                            <p className='text-sm'>{note.author}</p>
                            <p>{note.note}</p>
                            <div className="card-actions justify-end mt-1.5">
                                <Link to={`edit/${note.id}`} className="btn btn-primary">Edit</Link>
                                <button onClick={() => deleteNote(note.id)} className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <AddNote />
        </div>
    );
}

export default NoteList;

