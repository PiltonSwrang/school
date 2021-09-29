import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { useHistory, Link } from "react-router-dom";

function Exam(props) {
    console.log(props.match.params.id)
    const history = useHistory()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await firestore
                    .collection('exams')
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
        firestore.collection('exams')
            .doc(props.match.params.id)
            .delete()
            .then(() => {
                alert('exam deleted')
                history.push("/exams/view-results")
            })
    }

    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/exams/view-exams">Exams</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Exam</li>
                </ol>
            </nav>
            <h1>Exam</h1>
            <div className="row">
                <div className="col-lg-12 bg-danger text-white p-4">

                    {loading && <h1>LOADING......</h1>}
                    {data && <div>
                        <h2>Professor Id : {data.professor_id}</h2>
                        <h2>Subject Id : {data.subject_id}</h2>
                        {/* <h2>Date : {data.date.toLocalestring()}</h2> */}
                    </div>}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 p-4">
                    <button className="btn btn-primary m-3" onClick={handleDelete}>Delete Exam</button>
                    <a href={`/exams/view-results/edit-exam/${props.match.params.id}`}>
                        <button className="btn btn-warning m-3">Edit Exam</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Exam
