import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { Link, useHistory } from 'react-router-dom';

function Edit(params) {
    const history = useHistory()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            firestore.collection('exams').doc(params.match.params.id).get().then(v => {
                setData(v.data())
                setLoading(false)
            })
        }
        fetchData()
    }, [params.match.params.id])

    const [professor_id, setprofessor_id] = useState('');
    const [sub, setSub] = useState('')
    const [dat, setDat] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('exams').doc(params.match.params.id).set({
            professor_id: professor_id,
            subject_id: sub,
            date: dat
        }).then(() => {
            alert('edited exam')
            history.push('/exams/view-results')
        });
    }

    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/exams">Exam</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit exam</li>
                </ol>
            </nav>
            <form className="shadow p-5">
                <h1>Edit Exam</h1>
                {data && !loading && (
                    <>
                        <div className="mb-3">
                            <label className="form-label">Professor ID</label>
                            <input type="number" className="form-control" placeholder={data.professor_id} onChange={e => setprofessor_id(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Subject ID</label>
                            <input type="number" className="form-control" placeholder={data.subject_id} onChange={e => setSub(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Exam Date</label>
                            <input type="date" className="form-control" placeholder={data.date} onChange={e => setDat(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
                    </>
                )}
            </form>
        </div>
    )
}

export default Edit
