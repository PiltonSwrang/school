import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { Link } from 'react-router-dom'

function Viewstudents() {
    const [loading, setLoading] = useState(true)
    const [students, setStudents] = useState([])

    useEffect(() => {
        firestore.collection('students').get().then(observer => {
            const items = []
            observer.forEach(doc => {
                items.push({ id: doc.id, ...doc.data() })
            })
            setStudents(items)
        })
        setLoading(false)
    }, [])

    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/students">Students</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">View Students</li>
                </ol>
            </nav>
            <div>
                <h1 className="mb-3">View Students : </h1>
            </div>
            {loading && <h1 className="text-center">LOADING..</h1>}
            <div className="row">
                {students.length === 0 && <h1 className="my-2 text-center">There is no students now. Please add new students</h1>}
                {students.map(student => {
                    return (<div className="col-lg-3 text-white">
                        <Link to={`/students/view-students/${student.id}`} className="text-white text-decoration-none" key={student.id}>
                            <div className="py-5 px-3 mb-3 bg-primary rounded">
                                <h4>Name : {student.name}</h4>
                                <h4>Class : {student.class}</h4>
                                <h4>Contact : {student.contact}</h4>
                                <h4>Parent : {student.parent}</h4>
                            </div>
                        </Link>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Viewstudents