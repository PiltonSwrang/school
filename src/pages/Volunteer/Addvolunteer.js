import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { firestore } from '../../utils/firebaseConfig'
import { Link } from 'react-router-dom';

function Addvolunteer() {
    const history = useHistory()
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [contact, setContact] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('volunteers').add({
            name: name,
            occupation: occupation,
            contact: contact
        }).then(() => {
            alert('added new volunteer')
            history.push('/volunteer')
        });
    }

    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/volunteer">Volunteer</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">View subject</li>
                </ol>
            </nav>
            <form className="shadow p-5">
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
