import React from 'react'
import { Link } from 'react-router-dom'

function Classes() {
    return (
        <div className="container mt-3">
            <h1 className="mb-3">STUDENTS</h1>
            <div className="row">
                <div className="col-lg-6">
                    <Link className="text-decoration-none text-white" to="/classes/conduct-class">
                        <h1 className="bg-info py-5 text-center">Conduct Class</h1>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link className="text-decoration-none text-white" to="/classes/view-classes">
                        <h1 className="bg-info py-5 text-center">View Classes Taken</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Classes
