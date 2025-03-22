import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { getBookAction } from "../../redux/book/bookActions";
import { Alert, Badge, Button, Col, Image, Row, Stack } from "react-bootstrap";
import BookDetailsTab from "../../components/BookDetailTabs";
import { format } from "date-fns";
import BorrowBookModal from "../../components/BorrowBookModal";

const BookDetailsPage = () => {
  // Get the book id from url
  const { _id } = useParams()

  const { book } = useSelector(state => state.book)
  const { user } = useSelector(state => state.user)

  const isLoggedIn = !!user?._id
  const isAvailable = book.status === "available"

  // Dispatch the get book action to populate book state with data
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getBookAction(_id))
  }, [_id, dispatch])


  // Logic to show book borrow modal
  const [showBorrowBookModal, setShowBorrowBookModal] = useState(false)

  return ( 
    <>
    <Row className="mt-4">
      <Col xs={4}>
        <Image 
          src={`${import.meta.env.VITE_BASE_API_URL}${book.thumbnail}`}
          thumbnail
        />
      </Col>

      <Col xs={8}>
        <Stack gap={1}>
          <div className="fw-bold h1">{book.title}</div>
          <div className="fst-italic">By {book.author}</div>
          <div>Publish Year: {book.publish_year}</div>
          <div><Badge bg="warning">ISBN: {book.isbn}</Badge></div>

          {!isLoggedIn && 
            <Link to="/" state={{ from: `students/book/${_id}`}}>
              <Button
                variant="outline-danger"
              >
                Login To Borrow Book
              </Button>
            </Link>
          }

          {isAvailable && isLoggedIn &&
            <Button
              variant="outline-primary"
              onClick={() => setShowBorrowBookModal(true)}
            >
              Borrow Book
            </Button>
          }

          {!isAvailable && book.due_date &&
            <Alert variant="danger">
              Not Available, Available from: {format(new Date(book.due_date), 'MMMM d, yyyy', '')}
            </Alert>
          }
        </Stack>
      </Col>
    </Row>

    <Row className="mt-4">
        <BookDetailsTab book={book} />
    </Row>

    {/* Borrow Book Modal */}
    <BorrowBookModal
      showModal={showBorrowBookModal}
      setShowModal={setShowBorrowBookModal}
    />
    </>
   );
}
 
export default BookDetailsPage;