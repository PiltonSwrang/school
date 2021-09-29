import React, { useState } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { Link, useHistory } from 'react-router-dom';

function Conductclass() {
    const history = useHistory()
    const [student, setStudent] = useState('');
    const [subject, setSubject] = useState('');
    const [volunteer, setVolunteer] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('classes').add({
            student_id: student,
            subject_id: subject,
            volunteer_id: volunteer,
        }).then(() => {
            alert('created class')
            history.push('/classes')
        });
    }

    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link
                        className="text-decoration-none" to="/classes">Classes</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">View volunteers</li>
                </ol>
            </nav>
            <form className="shadow p-5">
                <h1>Conduct Class</h1>
                <div className="mb-3">
                    <label className="form-label">Student ID</label>
                    <input type="string" className="form-control" onChange={e => setStudent(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Subject ID</label>
                    <input type="string" className="form-control" onChange={e => setSubject(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Volunteer ID</label>
                    <input type="string" className="form-control" onChange={e => setVolunteer(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Conductclass
