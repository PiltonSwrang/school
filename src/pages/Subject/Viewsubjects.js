import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { Link } from 'react-router-dom'

function Viewsubjects() {
    const [loading, setLoading] = useState(true)
    const [sub, setSub] = useState([])

    useEffect(() => {
        firestore.collection('subjects').get().then(observer => {
            const items = []
            observer.forEach(doc => {
                items.push({ id: doc.id, ...doc.data() })
            })
            setSub(items)
        })
        setLoading(false)
    }, [])
    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/subject">Subject</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit book</li>
                </ol>
            </nav>
            <h1 className="mb-3">All Subjects</h1>
            {loading && <h1 className="text-center">LOADING..</h1>}
            <div className="row">
                {sub.map(s => {
                    return (<div className="col-lg-3 text-white">
                        <Link to={`/subject/view-subjects/${s.id}`} className="text-white text-decoration-none" key={s.id}>
                            <div className="py-5 px-3 mb-3 bg-warning rounded">
                                <h4>Subject : {s.name}</h4>
                            </div>
                        </Link>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Viewsubjects
