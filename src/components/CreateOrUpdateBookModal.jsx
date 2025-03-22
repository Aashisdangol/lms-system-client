import { Offcanvas } from "react-bootstrap";
import CreateOrUpdateBookForm from "./CreateOrUpdateBookForm";

const CreateOrUpdateBookModal = (props) => {
  const { showModal, setShowModal, selectedBook, setSelectedBook } = props

  return ( 
    <Offcanvas
      show={showModal}
      onHide={() => {
        setShowModal(false)
        setSelectedBook(false)
      }}
      placement="end"
      backdrop="static"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          {selectedBook?._id ? "Update Book" : "Create Book"}
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <CreateOrUpdateBookForm 
          setShowModal={setShowModal} 
          selectedBook={selectedBook} 
          setSelectedBook={setSelectedBook}
        />
      </Offcanvas.Body>
    </Offcanvas>
   );
}
 
export default CreateOrUpdateBookModal;