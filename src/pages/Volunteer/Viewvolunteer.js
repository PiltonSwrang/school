import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { Link } from 'react-router-dom';

function Viewvolunteer() {
    const [loading, setLoading] = useState(true)
    const [vol, setVol] = useState([])

    useEffect(() => {
        firestore.collection('volunteers').get().then(observer => {
            const items = []
            observer.forEach(doc => {
                items.push({ id: doc.id, ...doc.data() })
            })
            setVol(items)
        })
        setLoading(false)
    }, [])
    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/volunteer">Volunteer</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">View subject</li>
                </ol>
            </nav>
            <h1>View Volunteers</h1>
            <h3 className="mb-3">Total volunteers - {vol.length}</h3>
            {loading && <h1 className="text-center">LOADING..</h1>}
            <div className="row">
                {vol.map(v => {
                    return (<div className="col-lg-3 text-white">
                        <Link to={`/volunteer/view-volunteers/${v.id}`} className="text-decoration-none text-white">
                            <div className="py-5 px-3 mb-3 bg-secondary rounded">
                                <h4>Name : {v.name}</h4>
                                <h4>Occupation : {v.occupation}</h4>
                                <h4>Contact : {v.contact}</h4>
                            </div>
                        </Link>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Viewvolunteer
