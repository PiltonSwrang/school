import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'
import { Link } from 'react-router-dom'

function Viewbooks() {
    const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState([])

    useEffect(() => {
        firestore.collection('books').get().then(observer => {
            const items = []
            observer.forEach(doc => {
                items.push({ id: doc.id, ...doc.data() })
            })
            setBooks(items)
        })
        setLoading(false)
    }, [])

    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/library">Library</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">View Library</li>
                </ol>
            </nav>
            <h1 className="mb-3">View Books</h1>
            {loading && <h1 className="text-center">LOADING..</h1>}
            <div className="row">
                {!loading && books.length === 0 && <h1 className="text-center my-3">No books at present. Please add new books</h1>}
                {books.map(book => {
                    return (<div className="col-lg-3 text-white">
                        <Link to={`/library/view-library/${book.id}`} className="text-white text-decoration-none" key={book.id}>
                            <div className="py-5 px-3 mb-3 bg-success rounded">
                                <h4>Name : {book.name}</h4>
                                <h4>Author Name : {book.book_author}</h4>
                                <h4>Book ID : {book.book_id}</h4>
                            </div>
                        </Link>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Viewbooks