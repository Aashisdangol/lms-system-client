import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksAction } from "../../redux/book/bookActions";
import { Col, Row } from "react-bootstrap";
import BookCard from "../../components/BookCard";

const StudentsBooksPage = () => {
  const { books } = useSelector(state => state.book)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooksAction())
  }, [dispatch])

  return (
    <Row gap={4}>
      {books.map(book => 
        <Col key={book._id} className="my-2">
          <BookCard book={book} />
        </Col>
      )}
    </Row>
   );
}
 
export default StudentsBooksPage;