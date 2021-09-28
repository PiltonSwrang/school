import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'

function Viewsubjects() {
    const [loading, setLoading] = useState(true)
    const [sub, setSub] = useState([])

    useEffect(() => {
        firestore.collection('subjects').get().then(observer => {
            const items = []
            observer.forEach(doc => {
                items.push(doc.data())
            })
            setSub(items)
        })
        setLoading(false)
    }, [])
    return (
        <div className="container">
            <h1>All Subjects</h1>
            {loading && <h1 className="text-center">LOADING..</h1>}
            <div className="row">
                {sub.map(s => {
                    return (<div className="col-lg-3 p-3 bg-danger text-white m-3 rounded">
                        <h4 className="text-center">Subject : {s.name}</h4>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Viewsubjects
