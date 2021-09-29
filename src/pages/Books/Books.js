import React from 'react'
import { Link } from 'react-router-dom'

function Books() {
    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>
            <h1 className="mb-3">Books</h1>
            <div className="row">
                <div className="col-lg-6">
                    <Link className="text-decoration-none text-white" to="library/add-book">
                        <h1 className="bg-success py-5 text-center">Add Book</h1>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link className="text-decoration-none text-white" to="/library/view-library">
                        <h1 className="bg-success py-5 text-center">Show Books</h1>
                    </Link>
                </div>
                {/* <div className="col-lg-6">
                    <Link to="library/view-library">
                        <h1 className="text-center">Lend Books</h1>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link to="library/return-book">
                        <h1 className="text-center">Return Book</h1>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default Books
