import React, { useState } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { useHistory, Link } from 'react-router-dom';

function Conductexam() {
    const [professor_id, setprofessor_id] = useState('');
    const [sub, setSub] = useState('')
    const [dat, setDat] = useState('');
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('exams').add({
            professor_id: professor_id,
            subject_id: sub,
            date: dat
        }).then(() => {
            alert('added exam')
            history.push('/exams')
        });
    }
    
    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/exams">Exams</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">View exams</li>
                </ol>
            </nav>
            <form className="shadow p-5">
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
