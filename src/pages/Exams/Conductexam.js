import React, { useState } from 'react'
import { firestore } from '../../utils/firebaseConfig'


function Conductexam() {
    const [professor_id, setprofessor_id] = useState('');
    const [sub, setSub] = useState('')
    const [dat, setDat] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('exams').add({
            professor_id: professor_id,
            subject_id: sub,
            date: dat
        }).then(() => alert('added'));
    }
    return (
        <div className="container">
            <form>
                <h1>Conduct Exam</h1>
                <div className="mb-3">
                    <label className="form-label">Professor's ID</label>
                    <input type="number" className="form-control" onChange={e => setprofessor_id(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Subject's ID</label>
                    <input type="number" className="form-control" onChange={e => setSub(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Exam Date</label>
                    <input type="date" className="form-control" onChange={e => setDat(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Conductexam
