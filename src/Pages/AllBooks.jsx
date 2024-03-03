import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddBook from '../Components/AddBook';
import { getAllBooksAPI } from '../Serveices/AllApis';
import BookHistory from './BookHistory';
import TableOfBookData from '../Components/TableOfBookData';

function AllBooks() {
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

  // alert buy message
  const handleBuy=()=>{
    alert('Your book added to cart successfully, make payment and get this book!!!')
  }

  return (
    <div>
      <AddBook />
      {/* display all books */}
      <h3 className='text-danger text-center mt-5'>AllBooks</h3>
      <Row>
        {allBooks?.length > 0 ? allBooks?.map((books, index) => (
          <Col>
            <div key={index} className='m-5 p-4 border'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={books.image} style={{height:'200px',width:'100%'}}/>
                <Card.Body>
                  <Card.Title>{books.bookname}</Card.Title>
                  <Card.Text>
                    <h5>
                      {books.authorname}
                    </h5>
                    <h6>
                      {books.publishername}
                    </h6>
                    <h3>
                      {books.price}₹/- only
                    </h3>                
                    </Card.Text>
                  <Button variant="warning" onClick={()=>handleBuy()}>Buy</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        )) :
          <p>Nothing to display</p>
        }
      </Row>
      <div>
        <BookHistory displayBooks={allBooks}/>
      </div>
    </div>
  )
}

export default AllBooks