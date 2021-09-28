import React, { useState, useEffect } from 'react'
import { firestore } from '../../utils/firebaseConfig'

function Viewbooks() {
    const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState([])

    useEffect(() => {
        firestore.collection('books').get().then(observer => {
            const items = []
            observer.forEach(doc => {
                items.push(doc.data())
            })
            setBooks(items)
        })
        setLoading(false)
    }, [])
    return (
        <div className="container">
            <h1>View Books</h1>
            {loading && <h1 className="text-center">LOADING..</h1>}
            <div className="row">
                {books.map(book => {
                    return (<div className="col-lg-3 p-3 m-3 bg-success rounded text-white">
                        <h4>Name : {book.name}</h4>
                        <h4>Author Name : {book.author_name}</h4>
                        <h4>Book ID : {book.book_id}</h4>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Viewbooks