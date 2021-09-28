import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { Link } from 'react-router-dom'

function Viewstudents() {
    const [loading, setLoading] = useState(true)
    const [students, setStudents] = useState([])

    // const [click, setClick] = useState(false);
    // const handleClick = () => {
    //     setClick(true)
    //     console.log('object')
    // }

    useEffect(() => {
        firestore.collection('students').get().then(observer => {
            const items = []
            observer.forEach(doc => {
                items.push(doc.data())
            })
            setStudents(items)
        })
        setLoading(false)
    }, [])

    return (
        <div className="container">
            <div>
                <h1>View Students : </h1>
            </div>
            {loading && <h1 className="text-center">LOADING..</h1>}
            <div className="row">
                {students.map(student => {
                    return (<div className="col-lg-3 bg-danger text-white p-3 m-3 rounded">
                        <Link to="#!" className="text-white">
                            <h4>Name : {student.name}</h4>
                            <h4>Class : {student.class}</h4>
                            <h4>Contact : {student.contact}</h4>
                            <h4>Parent : {student.parent}</h4>
                        </Link>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Viewstudents