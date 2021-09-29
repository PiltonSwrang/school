import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { firestore } from '../../utils/firebaseConfig'
import { Link } from 'react-router-dom';

function Edit(params) {
    const history = useHistory()
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            firestore.collection('subjects').doc(params.match.params.id).get().then(v => {
                setData(v.data())
            })
        }
        fetchData()
    }, [params.match.params.id])


    const [name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('subjects').doc(params.match.params.id).set({
            name: name,
        }).then(() => {
            alert('edited subject')
            history.push('/subject/view-subjects')
        });
    }

    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/subject/view-subjects">Subject</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">View subjects</li>
                </ol>
            </nav>
            <form className="shadow p-5">
                <h1>Edit Subject</h1>
                {console.log(name)}
                {data && (
                    <>
                        <div className="mb-3">
                            <label className="form-label">Subject's Name</label>
                            <input type="text" className="form-control" placeholder={data.name} onChange={e => setName(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
                    </>
                )}
            </form>
        </div>
    )
}

export default Edit
