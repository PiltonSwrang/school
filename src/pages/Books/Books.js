import React from 'react'
import { Link } from 'react-router-dom'

function Books() {
    return (
        <div className="container">
            <h1>Books</h1>
            <div className="row">
                <div className="col-lg-6">
                    <Link to="library/add-book">
                        <h1 className="text-center">Add Book</h1>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link to="library/view-library">
                        <h1 className="text-center">Lend Books</h1>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link to="library/return-book">
                        <h1 className="text-center">Return Book</h1>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link to="/library/view-library">
                        <h1 className="text-center">Show Books</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Books
