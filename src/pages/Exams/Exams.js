import React from 'react'
import { Link } from 'react-router-dom'
import { GetUser } from '../../utils/AuthContext';

function Exams() {
    const { user } = GetUser()
    const admin = user?.email === 'www.piltonforever@gmail.com' ? true : false;
    return (
        <div className="container mt-3">
            <h1 className="mb-3">Exams</h1>
            <div className="row">
                {admin && (
                    <div className="col-lg-6">
                        <Link className="text-decoration-none text-white" to="/exams/conduct-exam">
                            <h1 className="bg-danger py-5 text-center shadow">Conduct Exam</h1>
                        </Link>
                    </div>
                )}
                <div className="col-lg-6">
                    <Link className="text-decoration-none text-white" to="/exams/view-results">
                        <h1 className="bg-danger py-5 text-center shadow">View Exams </h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Exams
