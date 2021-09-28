import React from 'react'
import { Link } from 'react-router-dom'

function Classes() {
    return (
        <div className="container">
            <h1>STUDENTS</h1>
            <div className="row">
                <div className="col-lg-6">
                    <Link to="/classes/conduct-class">
                        <h1 className="text-center">Conduct Class</h1>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link to="/classes/view-classes">
                        <h1 className="text-center">View Classes Taken</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Classes
