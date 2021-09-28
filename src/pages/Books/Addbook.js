import React, { useState } from 'react'
import { firestore } from '../../utils/firebaseConfig'


function Addbok() {
    const [name, setName] = useState('');
    const [aname, setAName] = useState('');
    const [id, setId] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('books').add({
            name: name,
            book_author: aname,
            book_id: id
        }).then(() => alert('added'));
    }
    return (
        <div className="container">
            <form>
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
                    <label className="form-label">Book's Author's Name</label>
                    <input type="text" className="form-control" onChange={e => setAName(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Addbok
