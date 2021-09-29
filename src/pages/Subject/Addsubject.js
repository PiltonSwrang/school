import React, { useState } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { Link, useHistory } from 'react-router-dom'

function Addsubject() {
    const history = useHistory()
    const [sub, setSub] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('subjects').add({
            name: sub
        }).then(() => {
            alert('created subject')
            history.push('/subject')
        });
    }

    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/library/view-library">Subject</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit book</li>
                </ol>
            </nav>
            <h1>Add New Subject</h1>
            <form className="shadow p-5">
                <div className="mb-3">
                    <label className="form-label">Subject's Name</label>
                    <input type="text" className="form-control" onChange={e => setSub(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Addsubject
