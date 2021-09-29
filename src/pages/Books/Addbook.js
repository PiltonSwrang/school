import React, { useState } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { Link, useHistory } from 'react-router-dom';

function Addbok() {
    const history = useHistory()
    const [name, setName] = useState('');
    const [aname, setAName] = useState('');
    const [id, setId] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('books').add({
            name: name,
            book_author: aname,
            book_id: id
        }).then(() => {
            alert('added new book')
            history.push('/library')
        });
    }
    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/library">Library</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Book</li>
                </ol>
            </nav>
            <form className="shadow p-5">
                <h1>Add New Book</h1>
                <div className="mb-3">
                    <label className="form-label">Book's Name</label>
                    <input type="text" className="form-control" onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Book's ID</label>
                    <input type="number" className="form-control" onChange={e => setId(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Author's Name</label>
                    <input type="text" className="form-control" onChange={e => setAName(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Addbok
