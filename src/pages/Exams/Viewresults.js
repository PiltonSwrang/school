import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { Link } from 'react-router-dom'

function Viewresults() {
    const [loading, setLoading] = useState(true)
    const [exams, setExams] = useState([])

    useEffect(() => {
        firestore.collection('exams').get().then(observer => {
            const items = []
            observer.forEach(doc => {
                items.push({ id: doc.id, ...doc.data() })
            })
            setExams(items)
        })
        setLoading(false)
    }, [])

    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/exams">Exams</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">View exams</li>
                </ol>
            </nav>
            <h1>View Exam</h1>
            <h3 className="mb-3">Total exams -- {exams.length}</h3>
            {loading && <h1 className="text-center">LOADING..</h1>}
            <div className="row">
                {exams.length === 0 && <h1 className="text-center">No exam results now</h1>}
                {exams.map(exam => {
                    return (<div className="col-lg-3   text-white">
                        <Link to={`/exams/view-results/${exam.id}`} className="text-decoration-none text-white" key={exam.id}>
                            <div className="shadow py-5 px-3 mb-3 bg-danger rounded">
                                <h4>Professor ID : {exam.professor_id}</h4>
                                <h4>Subject ID : {exam.subject_id}</h4>
                                <h4>Date : {exam.date.toLocaleString()}</h4>
                            </div>
                        </Link>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Viewresults
