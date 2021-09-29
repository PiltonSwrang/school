import React from 'react'
import { Link } from 'react-router-dom'

function Subject() {
    return (
        <div className="container mt-3">
            <h1 className="mb-3">Subject</h1>
            <div className="row gx-5">
                <div className="col-lg-6">
                    <Link className="text-decoration-none text-white" to="/subject/add-subject">
                        <h1 className="bg-warning py-5 text-center">Add Subject</h1>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link className="text-decoration-none text-white" to="/subject/view-subjects">
                        <h1 className="bg-warning py-5 text-center">View Subjects</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Subject
