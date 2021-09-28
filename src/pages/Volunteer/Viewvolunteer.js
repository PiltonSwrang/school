import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'

function Viewvolunteer() {
    const [loading, setLoading] = useState(true)
    const [vol, setVol] = useState([])

    useEffect(() => {
        firestore.collection('volunteers').get().then(observer => {
            const items = []
            observer.forEach(doc => {
                items.push(doc.data())
            })
            setVol(items)
        })
        setLoading(false)
    }, [])
    return (
        <div className="container">
            <h1>View Volunteers</h1>
            <h3>Total volunteers - {vol.length}</h3>
            {loading && <h1 className="text-center">LOADING..</h1>}
            <div className="row">
                {vol.map(v => {
                    return (<div className="col-lg-3 p-3 bg-warning text-white m-3 rounded">
                        <h4 className="text-center">Subject : {v.name}</h4>
                        <h4 className="text-center">Occupation : {v.occupation}</h4>
                        <h4 className="text-center">Contact : {v.contact}</h4>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Viewvolunteer
