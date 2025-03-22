import { Tab, Tabs } from "react-bootstrap";

const BookDetailsTab = (props) => {
  const { book } = props

  return ( 
    <Tabs
      defaultActiveKey="description"
      id="book-details-tab"
      className="mb-3"
    >
      <Tab eventKey="description" title="Description">
        {book.description}
      </Tab>
      <Tab eventKey="reviews" title="Reviews">
        Tab content for Reviews
      </Tab>
    </Tabs>
   );
}
 
export default BookDetailsTab;