import React from 'react'

export default function Examresult() {
    return (
        <div className="container mt-3">
            <form className="shadow p-5">
                <h1>Enter Exam Result</h1>
                <div className="mb-3">
                    <label className="form-label">Exam ID</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Student's ID</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Subject's ID</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Total Marks</label>
                    <input type="number" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
