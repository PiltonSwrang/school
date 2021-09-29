import React from 'react'
import { Link } from 'react-router-dom'
import { GetUser } from '../../utils/AuthContext'

function Books() {
    const { user } = GetUser()
    const admin = user?.email === 'www.piltonforever@gmail.com' ? true : false;

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
                {admin && (
                    <div className="col-lg-6">
                        <Link className="text-decoration-none text-white" to="library/add-book">
                            <h1 className="bg-success py-5 text-center shadow">Add Book</h1>
                        </Link>
                    </div>
                )}
                <div className="col-lg-6">
                    <Link className="text-decoration-none text-white" to="/library/view-library">
                        <h1 className="bg-success py-5 text-center shadow">Show Books</h1>
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
