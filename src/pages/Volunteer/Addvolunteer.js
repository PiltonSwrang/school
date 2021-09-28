import React, { useState } from 'react'
import { firestore } from '../../utils/firebaseConfig'

function Addvolunteer() {
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [contact, setContact] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('students').add({
            name: name,
            occupation: occupation,
            contact: contact
        }).then(() => alert('added'));
    }

    return (
        <div className="container">
            <form>
                <h1>Add New Volunteer</h1>
                <div className="mb-3">
                    <label className="form-label">Volunteer's Name</label>
                    <input type="text" className="form-control" onChange={e => setName(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Volunteer's Occupation</label>
                    <input type="text" className="form-control" onChange={e => setOccupation(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Volunteer's Contact</label>
                    <input type="number" className="form-control" onChange={e => setContact(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Addvolunteer
