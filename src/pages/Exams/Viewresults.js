import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'

function Viewresults() {
    const [loading, setLoading] = useState(true)
    const [exams, setExams] = useState([])

    useEffect(() => {
        firestore.collection('exams').get().then(observer => {
            const items = []
            observer.forEach(doc => {
                items.push(doc.data())
            })
            setExams(items)
        })
        setLoading(false)
    }, [])

    return (
        <div className="container">
            <h1>View Exam</h1>
            {loading && <h1 className="text-center">LOADING..</h1>}
            <div className="row">
                {exams.map(exam => {
                    return (<div className="col-lg-3 p-3 m-3 bg-success rounded text-white">
                        <h4>Professor ID : {exam.professor_id}</h4>
                        <h4>Subject ID : {exam.subject_id}</h4>
                        <h4>Date : {exam.date.toLocaleString()}</h4>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Viewresults
