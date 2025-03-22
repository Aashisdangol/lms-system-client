import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';

const BookCard = (props) => {
  const { book } = props

  const { _id, title, thumbnail, author } = book

  return (
    <Card style={{ width: '18rem', height: '28rem' }}>
      <Card.Img 
        variant="top" 
        src={`${import.meta.env.VITE_BASE_API_URL}${thumbnail}`}
        height={250}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         -{author}
        </Card.Text>
      </Card.Body>

      <Card.Footer className='text-end'>
        <Link to={`/students/book/${_id}`}>
          <Button variant="primary">View More</Button>
        </Link>
      </Card.Footer>
      
    </Card>
  );
}

export default BookCard;