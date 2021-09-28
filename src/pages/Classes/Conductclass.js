import React, { useState } from 'react'
import { firestore } from '../../utils/firebaseConfig'


function Conductclass() {
    const [student, setStudent] = useState('');
    const [subject, setSubject] = useState('');
    const [volunteer, setVolunteer] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('students').add({
            student_id: student,
            subject_id: subject,
            volunteer_id: volunteer,
        }).then(() => alert('created class'));
    }

    return (
        <div className="container">
            <form>
                <h1>Conduct Class</h1>
                <div className="mb-3">
                    <label className="form-label">Student's ID</label>
                    <input type="string" className="form-control" onChange={e => setStudent(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Subject's ID</label>
                    <input type="string" className="form-control" onChange={e => setSubject(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Volunteer's ID</label>
                    <input type="string" className="form-control" onChange={e => setVolunteer(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Conductclass
