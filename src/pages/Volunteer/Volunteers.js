import { Link } from 'react-router-dom'
import React from 'react'
import { GetUser } from '../../utils/AuthContext';

function Volunteer() {
    const { user } = GetUser()
    const admin = user?.email === 'www.piltonforever@gmail.com' ? true : false;
    
    return (
        <div className="container mt-3">
            <h1 className="mb-3">VOLUNTEERS</h1>
            <div className="row">
                {admin && (
                    <div className="col-lg-6">
                        <Link className="text-decoration-none text-white" to="/volunteer/add-volunteer" >
                            <h1 className="bg-secondary py-5 text-center">Add Volunteer</h1>
                        </Link>
                    </div>
                )}
                <div className="col-lg-6">
                    <Link className="text-decoration-none text-white" to="/volunteer/view-volunteers" >
                        <h1 className="bg-secondary py-5 text-center">View Volunteers</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Volunteer
