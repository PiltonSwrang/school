import React from 'react'
import { Link } from 'react-router-dom'
import { GetUser } from '../../utils/AuthContext'
function Subject() {
    const { user } = GetUser()
    const admin = user?.email === 'www.piltonforever@gmail.com' ? true : false;
    return (
        <div className="container mt-3">
            <h1 className="mb-3">Subject</h1>
            <div className="row gx-5">
                {admin && (
                    <div className="col-lg-6">
                        <Link className="text-decoration-none text-white" to="/subject/add-subject">
                            <h1 className="bg-warning py-5 text-center shadow">Add Subject</h1>
                        </Link>
                    </div>
                )}
                <div className="col-lg-6">
                    <Link className="text-decoration-none text-white" to="/subject/view-subjects">
                        <h1 className="bg-warning py-5 text-center shadow">View Subjects</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Subject
