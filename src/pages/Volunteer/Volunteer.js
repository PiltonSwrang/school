import { Link } from 'react-router-dom'
import React from 'react'

function Volunteer() {
    return (
        <div className="container">
            <h1>VOLUNTEERS</h1>
            <div className="row">
                <div className="col-lg-6">
                    <Link to="/volunteer/add-volunteer">
                        <h1 className="text-center">Add Volunteer</h1>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link to="/volunteer/view-volunteers">
                        <h1 className="text-center">View Volunteers</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Volunteer
