import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { firestore } from '../../utils/firebaseConfig'
import { Link } from 'react-router-dom';

function Edit(params) {
    const history = useHistory()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            firestore.collection('books').doc(params.match.params.id).get().then(v => {
                setData(v.data())
                setLoading(false)
            })
        }
        fetchData()
    }, [params.match.params.id])

    const [bookname, setBookname] = useState('');
    const [author, setauthor] = useState('');
    const [bookId, setBookid] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        firestore.collection('books').doc(params.match.params.id).set({
            name: bookname,
            book_author: author,
            book_id: bookId,
        }).then(() => {
            alert('edited book')
            history.push(`/library/view-library`)
        });
    }

    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/library/view-library">Library</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit book</li>
                </ol>
            </nav>
            <form className="shadow p-5">
                <h1>Edit Book</h1>
                {data && !loading && (
                    <>
                        <div className="mb-3">
                            <label className="form-label">Book Name</label>
                            <input type="text" className="form-control" placeholder={data.name} onChange={e => setBookname(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Author Name</label>
                            <input type="number" className="form-control" placeholder={data.book_author} onChange={e => setauthor(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Book id</label>
                            <input type="text" className="form-control" placeholder={data.book_id} onChange={e => setBookid(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
                    </>
                )}
            </form>
        </div>
    )
}

export default Edit
