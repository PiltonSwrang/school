import React from 'react'
import { Link } from 'react-router-dom'

function Students() {
    return (
        <div className="container">
            <h1>STUDENTS</h1>
            <div className="row">
                <div className="col-lg-6">
                    <Link to="students/add-student">
                        <h1 className="text-center">Add Student</h1>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link to="students/view-students">
                        <h1 className="text-center">View Students</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Students
