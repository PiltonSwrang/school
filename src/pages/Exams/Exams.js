import React from 'react'
import { Link } from 'react-router-dom'

function Exams() {
    return (
        <div className="container mt-3">
            <h1 className="mb-3">Exams</h1>
            <div className="row">
                <div className="col-lg-6">
                    <Link className="text-decoration-none text-white" to="/exams/conduct-exam">
                        <h1 className="bg-danger py-5 text-center">Conduct Exam</h1>
                    </Link>
                </div>
                {/* <div className="col-lg-6">
                    <Link to="/exams/exam-result">
                        <h1 className="text-center">Enter Exam Result</h1>
                    </Link>
                </div> */}
                <div className="col-lg-6">
                    <Link className="text-decoration-none text-white" to="/exams/view-results">
                        <h1 className="bg-danger py-5 text-center">View Exams </h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Exams
