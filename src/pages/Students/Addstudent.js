import React, { useState } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { useHistory, Link } from 'react-router-dom';


function Addstudent() {
    const history = useHistory()
    const [name, setName] = useState('');
    const [pname, setPName] = useState('');
    const [clas, setClas] = useState('');
    const [contact, setContact] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('students').add({
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
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/students">Students</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Student</li>
                </ol>
            </nav>
            <form className="shadow p-5">
                <h1>Add New Student</h1>
                <div className="mb-3">
                    <label className="form-label">Student's Name</label>
                    <input type="text" className="form-control" onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Student's Class</label>
                    <input type="number" className="form-control" onChange={e => setClas(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Student's Parent's Name</label>
                    <input type="text" className="form-control" onChange={e => setPName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Student's Contact Number</label>
                    <input type="number" className="form-control" onChange={e => setContact(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Addstudent
