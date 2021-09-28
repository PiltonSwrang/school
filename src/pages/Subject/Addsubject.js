import React, { useState } from 'react'
import { firestore } from '../../utils/firebaseConfig'

function Addsubject() {
    const [sub, setSub] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('subjects').add({
            name: sub
        }).then(() => alert('created subject'));
    }

    return (
        <div className="container">
            <h1>Add New Subject</h1>
            <form>
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
