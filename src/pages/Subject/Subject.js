import React from 'react'
import { Link } from 'react-router-dom'

function Subject() {
    return (
        <div className="container">
            <h1>Subject</h1>
            <div className="row">
                <div className="col-lg-6">
                    <Link to="/subject/add-subject">
                        <h1 className="text-center">Add Subject</h1>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link to="/subject/view-subjects">
                        <h1 className="text-center">View Subjects</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Subject
