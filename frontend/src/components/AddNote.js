import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddNote = () => {
    const [title, setTitle] = useState([]);
    const [author, setAuthor] = useState([]);
    const [note, setNote] = useState([]);
    const navigate = useNavigate();

    const saveNote = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/api/notes',{
                title,
                author,
                note
            });
            const modal = document.getElementById('my_modal_1');
            modal.close();
            window.location.reload();
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="text-center mt-2">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn w-3/4 bg-green-500 text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Note</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Adding Note</h3>
                    <form method='dialog' onSubmit={saveNote}>
                        <div className=' text-center'>
                            <input 
                            type="text" 
                            placeholder="Title" 
                            className="input input-bordered input-sm w-full max-w-xs mt-2" 
                            value={title} 
                            onChange={(e)=> setTitle(e.target.value)} 
                            />
                            <input 
                            type="text" 
                            placeholder="Author" 
                            className="input input-bordered input-sm w-full max-w-xs mt-2"
                            value={author} 
                            onChange={(e)=> setAuthor(e.target.value)}
                            />
                            <textarea 
                            placeholder="Note" 
                            className="textarea textarea-bordered textarea-md w-full max-w-xs mt-2" 
                            value={note} 
                            onChange={(e)=> setNote(e.target.value)}
                            ></textarea>
                        </div>
                        <br></br><button type='submit' className="btn w-full">Save</button>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default AddNote