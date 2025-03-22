import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBorrowsAction, returnBorrowAction } from "../../redux/borrow/borrowActions";
import { Button, Container, Table } from "react-bootstrap";
import ReviewBookModal from "../../components/ReviewBookModal";

const StudentBorrowPage = () => {
  const { borrows } = useSelector(state => state.borrow)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBorrowsAction())
  }, [dispatch])

  // handleOnReturnBook
  const handleOnReturnBook = (borrow) => {
    // dispatch action to return borrow
    dispatch(returnBorrowAction(borrow._id))
  }

  // handleOnReview
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [selectedBorrow, setSelectedborrow] = useState({})

  const handleOnReview = (borrow) => {
    setSelectedborrow(borrow)
    setShowReviewModal(true)
  }

  return (
    <>
    <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Book Name</th>
              <th>Due Date</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {borrows.map((borrow, index) => 
              <tr key={borrow._id}>
                <td>{index+1}</td>
                <td>{borrow.book_name}</td>
                <td>{format(new Date(borrow.due_date), 'MMMM d, yyyy', '')}</td>
                <td className="text-center">
                  {!borrow.is_returned && 
                    <Button
                      variant="outline-success"
                      onClick={() => handleOnReturnBook(borrow)}
                    >
                      Return Book
                    </Button>
                  }

                  {borrow.is_returned && !borrow.has_review && 
                    <Button
                    variant="outline-primary"
                    onClick={() => handleOnReview(borrow)}
                    >
                      Review Book
                    </Button>
                  }

                  {borrow.is_returned && borrow.has_review && 
                    <Button
                    variant="outline-danger"
                    disabled
                    >
                      Book Returned
                    </Button>
                  }
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>

      <ReviewBookModal
        showModal={showReviewModal}
        setShowModal={setShowReviewModal}
        borrow={selectedBorrow}
      />
    </>
   );
}
 
export default StudentBorrowPage;