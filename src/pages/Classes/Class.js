import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { useHistory, Link } from "react-router-dom";

function Class(props) {
    console.log(props.match.params.id)
    const history = useHistory()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await firestore
                    .collection('classes')
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
        firestore.collection('classes')
            .doc(props.match.params.id)
            .delete()
            .then(() => {
                alert('class deleted')
                history.push("/classes/view-classes")
            })
    }

    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/library/view-library">Classes</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Class</li>
                </ol>
            </nav>
            <h1>Class</h1>
            <div className="row">
                <div className="col-lg-12 bg-danger text-white p-4">
                    {loading && <h1>LOADING......</h1>}
                    {data && <div>
                        <h2>Student Id : {data.student_id}</h2>
                        <h2>Subject Id : {data.subject_id}</h2>
                        <h2>Volunteer Id : {data.volunteer_id}</h2>
                    </div>}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 p-4">
                    <button className="btn btn-primary m-3" onClick={handleDelete}>Delete Class</button>
                    <a href={`/classes/view-classes/edit-class/${props.match.params.id}`}>
                        <button className="btn btn-warning m-3">Edit Class</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Class
