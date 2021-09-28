import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="container" style={{ height: '100%' }}>
            <div className="row text-center" style={{}}>
                <div className="col-lg-4 col-sm-6 p-4">
                    <Link to="/students">
                        <div className="p-3 py-5 bg-primary">
                            <h1 className="text-white">STUDENTS</h1>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-sm-6 p-4">
                    <Link to="/classes">
                        <div className="p-3 py-5 bg-primary">
                            <h1 className="text-white">CLASSES</h1>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-sm-6 p-4">
                    <Link to="/exams">
                        <div className="p-3 py-5 bg-primary">
                            <h1 className="text-white">EXAMS</h1>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-sm-6 p-4">
                    <Link to="/library">
                        <div className="p-3 py-5 bg-primary">
                            <h1 className="text-white">LIBRARY</h1>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-sm-6 p-4">
                    <Link to="/subject">
                        <div className="p-3 py-5 bg-primary">
                            <h1 className="text-white">SUBJECTS</h1>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-sm-6 p-4">
                    <Link to="/volunteer">
                        <div className="p-3 py-5 bg-primary">
                            <h1 className="text-white">VOLUNTEERS</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
