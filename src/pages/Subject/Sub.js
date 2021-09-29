import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { useHistory, Link } from "react-router-dom";

function Sub(props) {
    const history = useHistory()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await firestore
                    .collection('subjects')
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
        firestore.collection('subjects')
            .doc(props.match.params.id)
            .delete()
            .then(() => history.push("/subject/view-subjects"))
    }

    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/subject">Subject</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">View subject</li>
                </ol>
            </nav>
            <h1>Subject</h1>
            <div className="row">
                <div className="col-lg-12 bg-danger text-white p-4">
                    {loading && <h1>LOADING......</h1>}
                    {data && <div>
                        <h2>Subject Name : {data.name}</h2>
                    </div>}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 p-4">
                    <button className="btn btn-primary m-3" onClick={handleDelete}>Delete Sub</button>
                    <a href={`/subject/view-subjects/edit-subject/${props.match.params.id}`}>
                        <button className="btn btn-warning m-3">Edit Subject</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sub
