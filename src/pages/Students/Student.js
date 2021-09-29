import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { useHistory } from "react-router-dom";

function Student(props) {
    const history = useHistory()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await firestore
                    .collection('students')
                    .doc(props.match.params.id)
                    .get()
                    .then(snapshot => {
                        setData(snapshot.data());
                        setLoading(false)
                    })
                console.log('response', response);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [props.match.params.id])

    const handleDelete = () => {
        firestore.collection('students')
            .doc(props.match.params.id)
            .delete()
            .then(() => history.push("/students/view-students"))
    }

    return (
        <div className="container mt-3">
            <h1>Student</h1>
            <div className="row">
                <div className="col-lg-12 bg-danger text-white p-4">
                    {loading && <h1>LOADING......</h1>}
                    {data && <div>
                        <h2>Name : {data.name}</h2>
                        <h2>Parent Name : {data.parent}</h2>
                        <h2>Class : {data.class}</h2>
                        <h2>Contact : {data.contact}</h2>
                    </div>}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 p-4">
                    <button className="btn btn-primary m-3" onClick={handleDelete}>Delete Student</button>
                    <a href={`/students/view-students/edit-student/${props.match.params.id}`}>
                        <button className="btn btn-warning m-3">Edit Student</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Student
