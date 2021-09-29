import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { firestore } from '../../utils/firebaseConfig'
import { Link } from 'react-router-dom';

function Edit(params) {
    const history = useHistory()
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            firestore.collection('volunteers').doc(params.match.params.id).get().then(v => {
                setData(v.data())
            })
        }
        fetchData()
    }, [params.match.params.id])


    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [occupation, setOccupation] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('volunteers').doc(params.match.params.id).set({
            name: name,
            contact: contact,
            occupation: occupation
        }).then(() => {
            alert('edited volunteer')
            history.push('/volunteer/view-volunteers')
        });
    }

    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/volunteer/view-volunteers">Volunteer</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">View volunteers</li>
                </ol>
            </nav>
            <form className="shadow p-5">
                <h1>Edit Volunteer</h1>
                {console.log(name)}
                {data && (
                    <>
                        <div className="mb-3">
                            <label className="form-label">Volunteer Name</label>
                            <input type="text" className="form-control" placeholder={data.name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Volunteer Occupation</label>
                            <input type="text" className="form-control" placeholder={data.name} onChange={e => setOccupation(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Volunteer Contact</label>
                            <input type="number" className="form-control" placeholder={data.name} onChange={e => setContact(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
                    </>
                )}
            </form>
        </div>
    )
}

export default Edit
