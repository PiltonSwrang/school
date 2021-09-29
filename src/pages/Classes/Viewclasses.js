import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { Link } from 'react-router-dom'

function Viewclasses() {
    const [loading, setLoading] = useState(true)
    const [clas, setClas] = useState([])

    useEffect(() => {
        firestore.collection('classes').get().then(observer => {
            const items = []
            observer.forEach(doc => {
                items.push({ id: doc.id, ...doc.data() })
            })
            setClas(items)
        })
        setLoading(false)
    }, [])

    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/classes">Classes</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">View volunteers</li>
                </ol>
            </nav>
            <div>
                <h1 className="mb-3">View Classes : </h1>
            </div>
            {loading && <h1 className="text-center">LOADING..</h1>}
            <div className="row">
                {clas.length === 0 && <h1 className="text-center">No class created</h1>}
                {clas.map(cla => {
                    return (<div className="col-lg-3  text-white rounded">
                        <Link to={`/classes/view-classes/${cla.id}`} className="text-decoration-none text-white" key={cla.id}>
                            <div className="py-5 px-3 mb-3 bg-info">
                                <h4>Student Id : {cla.student_id}</h4>
                                <h4>Subject Id : {cla.subject_id}</h4>
                                <h4>Volunteer Id : {cla.volunteer_id}</h4>
                            </div>
                        </Link>
                    </div>)
                })}

            </div>
        </div>
    )
}

export default Viewclasses
