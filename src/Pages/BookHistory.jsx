import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { deleteBookAPI, getAllBooksAPI } from '../Serveices/AllApis';

function BookHistory() {
  // state for get all books
  const [allBooks, setAllBooks] = useState([])

  // get all Books
  const getBooks = async () => {
    const result = await getAllBooksAPI()
    setAllBooks(result.data);
  }

  useEffect(() => {
    getBooks()
  }, [])

  // delete book details
  const deleteBook=async(id)=>{
    await deleteBookAPI(id)
    getBooks()
  }

  return (
    <div>
      <div className='container mt-3 p-5'>
        <h2 className='text-center text-danger mb-5'>Books History</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Book Name</th>
              <th>Image</th>
              <th>Author Name</th>
              <th>Publisher</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allBooks?.length >= 0 ? allBooks?.map((a, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{a.bookname}</td>
                <td><img src={a.image} alt="" style={{ height: '80px', width: '100%' }} /></td>
                <td>{a.authorname}</td>
                <td>{a.publishername}</td>
                <td>{a.price}</td>
                <td className='text-center'><Button onClick={e=>deleteBook(a.id)}><i className='fa-solid fa-trash text-danger'></i></Button></td>
              </tr>
            )) :
              <p>Nothing To display</p>
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default BookHistory