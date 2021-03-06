import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { useHistory, Link } from "react-router-dom";

function Volunteer(props) {
    const history = useHistory()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await firestore
                    .collection('volunteers')
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
        firestore.collection('volunteers')
            .doc(props.match.params.id)
            .delete()
            .then(() => history.push("/volunteer/view-volunteers"))
    }

    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/volunteer">Volunteer</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">View subject</li>
                </ol>
            </nav>
            <h1>Volunteer</h1>
            <div className="row">
                <div className="col-lg-12 bg-danger text-white p-4">
                    {data.length === 0 && <h1 className="text-center">No volunteers. Please add new ones</h1>}
                    {loading && <h1>LOADING......</h1>}
                    {data && <div>
                        <h2>Name : {data.name}</h2>
                        <h2>Contact : {data.contact}</h2>
                        <h2>Occupation : {data.occupation}</h2>
                    </div>}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 p-4">
                    <button className="btn btn-primary m-3" onClick={handleDelete}>Delete Volunteer</button>
                    <a href={`/volunteer/view-volunteers/edit-volunteer/${props.match.params.id}`}>
                        <button className="btn btn-warning m-3">Edit Volunteer</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Volunteer
