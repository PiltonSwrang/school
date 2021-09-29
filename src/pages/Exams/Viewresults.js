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
            <h1>View Exam</h1>
            {loading && <h1 className="text-center">LOADING..</h1>}
            <div className="row">
                {exams.length === 0 && <h1 className="text-center">No exam results now</h1>}
                {exams.map(exam => {
                    return (<div className="col-lg-3 p-3 m-3 bg-danger rounded text-white">
                        <Link to={`/exams/view-results/${exam.id}`} className="text-decoration-none text-white" key={exam.id}>
                            <h4>Professor ID : {exam.professor_id}</h4>
                            <h4>Subject ID : {exam.subject_id}</h4>
                            <h4>Date : {exam.date.toLocaleString()}</h4>
                        </Link>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Viewresults
