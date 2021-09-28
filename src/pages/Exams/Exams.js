import React from 'react'
import { Link } from 'react-router-dom'

function Exams() {
    return (
        <div className="container">
            <h1>Exams</h1>
            <div className="row">
                <div className="col-lg-6">
                    <Link to="/exams/conduct-exam">
                        <h1 className="text-center">Conduct Exam</h1>
                    </Link>
                </div>
                {/* <div className="col-lg-6">
                    <Link to="/exams/exam-result">
                        <h1 className="text-center">Enter Exam Result</h1>
                    </Link>
                </div> */}
                <div className="col-lg-6">
                    <Link to="/exams/view-results">
                        <h1 className="text-center">View Exams </h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Exams
