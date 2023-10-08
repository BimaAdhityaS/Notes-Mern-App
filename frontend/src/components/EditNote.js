import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const AddNote = () => {
    const [title, setTitle] = useState([]);
    const [author, setAuthor] = useState([]);
    const [note, setNote] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getNoteById();
    }, []);

    const updateNote = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/api/notes/${id}`, {
                title,
                author,
                note
            });
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    }

    const getNoteById = async () => {
        const response = await axios.get(`http://localhost:5000/api/notes/${id}`);
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setNote(response.data.note);
    }

    return (
        <div className='flex justify-center'>
            <div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Update Note</h3>
                    <form method='dialog' onSubmit={updateNote}>
                        <div className=' text-center'>
                            <input
                                type="text"
                                placeholder="Title"
                                className="input input-bordered input-sm w-full max-w-xs mt-2"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Author"
                                className="input input-bordered input-sm w-full max-w-xs mt-2"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                            <textarea
                                placeholder="Note"
                                className="textarea textarea-bordered textarea-md w-full max-w-xs mt-2"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            ></textarea>
                        </div>
                        <br></br><button type='submit' className="btn w-full">Update</button>
                    </form>
                </div>
            </div >
        </div>
    )
}

export default AddNote