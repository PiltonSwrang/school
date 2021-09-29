import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { firestore } from '../../utils/firebaseConfig'
function Edit(params) {
    const history = useHistory()
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            firestore.collection('students').doc(params.match.params.id).get().then(v => {
                setData(v.data())
            })
        }
        fetchData()
    }, [params.match.params.id])


    const [name, setName] = useState('');
    const [pname, setPName] = useState('');
    const [clas, setClas] = useState('');
    const [contact, setContact] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('students').doc(params.match.params.id).set({
            name: name,
            parent: pname,
            class: clas,
            contact: contact
        }).then(() => {
            alert('added')
            history.push('/students')
        });
    }

    return (
        <div className="container mt-3">
            <form className="shadow p-5">
                <h1>Edit Student</h1>
                {console.log(name)}
                {data && (
                    <>
                        <div className="mb-3">
                            <label className="form-label">Student's Name</label>
                            <input type="text" className="form-control" placeholder={data.name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Student's Class</label>
                            <input type="number" className="form-control" placeholder={data.class} onChange={e => setClas(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Student's Parent's Name</label>
                            <input type="text" className="form-control" placeholder={data.parent} onChange={e => setPName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Student's Contact Number</label>
                            <input type="number" className="form-control" placeholder={data.contact} onChange={e => setContact(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
                    </>
                )}
            </form>
        </div>
    )
}

export default Edit
