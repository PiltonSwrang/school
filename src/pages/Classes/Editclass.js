import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { Link, useHistory } from 'react-router-dom';

function Edit(params) {
    const history = useHistory()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            firestore.collection('classes').doc(params.match.params.id).get().then(v => {
                setData(v.data())
                setLoading(false)
            })
        }
        fetchData()
    }, [params.match.params.id])

    const [student, setStudent] = useState('');
    const [subject, setSubject] = useState('');
    const [volunteer, setVolunteer] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('classes').doc(params.match.params.id).set({
            student_id: student,
            subject_id: subject,
            volunteer_id: volunteer,
        }).then(() => {
            alert('edited class')
            history.push(`/classes/view-classes`)
        });
    }

    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/classes">Classes</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit class</li>
                </ol>
            </nav>
            <form className="shadow p-5">
                <h1>Edit Class</h1>
                {data && !loading && (
                    <>
                        <div className="mb-3">
                            <label className="form-label">Student Id </label>
                            <input type="text" className="form-control" placeholder={data.student_id} onChange={e => setStudent(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Volunteer Id </label>
                            <input type="number" className="form-control" placeholder={data.volunteer_id} onChange={e => setVolunteer(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Subject Id </label>
                            <input type="text" className="form-control" placeholder={data.subject_id} onChange={e => setSubject(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
                    </>
                )}
            </form>
        </div>
    )
}

export default Edit
