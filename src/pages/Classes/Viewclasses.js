import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'

function Viewclasses() {
    const [loading, setLoading] = useState(true)
    const [clas, setClas] = useState([])

    useEffect(() => {
        firestore.collection('classes').get().then(observer => {
            const items = []
            observer.forEach(doc => {
                items.push(doc.data())
            })
            setClas(items)
        })
        setLoading(false)
    }, [])
    return (
        <div className="container">
            <div>
                <h1>View Classes : </h1>
            </div>
            {loading && <h1 className="text-center">LOADING..</h1>}
            <div className="row">
                {clas.map(cla => {
                    return (<div className="col-lg-3 p-3 bg-secondary text-white m-3 rounded">
                        <h4>Student Id : {cla.student_id}</h4>
                        <h4>Subject Id : {cla.subject_id}</h4>
                        <h4>Volunteer Id : {cla.volunteer_id}</h4>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Viewclasses
