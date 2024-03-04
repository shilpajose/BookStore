import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { addBookAPI } from '../Serveices/AllApis';
import AllBooks from '../Pages/AllBooks';

function AddBook({setAddBookResponse}) {
    // Add book 
    const [addBookDetails, setAddBookDetails] = useState({
        bookname: "", authorname: "", publishername: "", image: "", price: ""
    })
    console.log(addBookDetails);

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    setAddBookDetails({...addBookDetails,bookname:"",authorname:"",publishername:"",image:"",price:""})
    }
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    // Save book details to database
    const handleAddBook = async () => {
        // destructure all data
        const { bookname, authorname, publishername, image, price } = addBookDetails
        if (bookname && authorname && publishername && image && price) {
            // api call
            const result = await addBookAPI(addBookDetails)
            if (result.status >= 200 && result.status <= 300) {
                alert(`${bookname} added successfully`)
                setAddBookResponse(result.data)
                handleClose()
                getBooks()
            } else {
                alert('api is called please try again')
            }
            // alert('proceed to save')
        } else {
            alert('Please fill the form')
        }
    }
    return (
        <div>
            {/* Add new book */}
            <Button variant="primary" onClick={handleShow} className='m-5'>
                Add New Book
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control value={addBookDetails.bookname} onChange={(e) => setAddBookDetails({ ...addBookDetails, bookname: e.target.value })}
                                    required
                                    type="text"
                                    placeholder="Book Name"
                                    defaultValue=""
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Publisher Name</Form.Label>
                                <Form.Control value={addBookDetails.publishername} onChange={e => setAddBookDetails({ ...addBookDetails, publishername: e.target.value })}
                                    required
                                    type="text"
                                    placeholder="Publisher Name"
                                    defaultValue=""
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Author Name</Form.Label>
                                <Form.Control value={addBookDetails.authorname} onChange={e => setAddBookDetails({ ...addBookDetails, authorname: e.target.value })}
                                    required
                                    type="text"
                                    placeholder="Author Name"
                                    defaultValue=""
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" placeholder="Image" required value={addBookDetails.image} onChange={e => setAddBookDetails({ ...addBookDetails, image: e.target.value })} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Image.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Price" required value={addBookDetails.price} onChange={e => setAddBookDetails({ ...addBookDetails, price: e.target.value })} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Price.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        {/* <Button type="submit">Submit form</Button> */}
                    </Form>                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAddBook}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddBook