import React from 'react'
import { Link } from 'react-router-dom'
import { GetUser } from "./../../utils/AuthContext"

function Students() {
    const { user } = GetUser()
    const admin = user?.email === 'www.piltonforever@gmail.com' ? true : false;
    return (
        <div className="container mt-3">
            <h1 className="mb-3">STUDENTS</h1>
            <div className="row gx-5">
                {admin && (
                    <div className="col-lg-6">
                        <Link className="text-decoration-none text-white" to="students/add-student">
                            <h1 className="bg-primary py-5 text-center shadow">Add Student</h1>
                        </Link>
                    </div>
                )}
                <div className="col-lg-6">
                    <Link className="text-decoration-none text-white" to="students/view-students">
                        <h1 className="bg-primary py-5 text-center shadow">View Students</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Students
