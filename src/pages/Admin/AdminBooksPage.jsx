import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import CreateOrUpdateBookModal from "../../components/CreateOrUpdateBookModal";
import BookTable from "../../components/BookTable";

const AdminBooksPage = () => {
  // State to control the create book modal
  const [showCreateOrUpdateBookModal, setShowCreateOrUpdateBookModal] = useState(false)

  // state to store selected book for update
  const [selectedBook, setSelectedBook] = useState({})

  return ( 
    <>
      <Stack direction="horizontal" gap={3}>
        {/* Search Bar */}
        <Form.Control className="me-auto" size="lg" placeholder="Search Books" />

        <Button 
          variant="success" 
          className="text-nowrap" 
          size="lg"
          onClick={() => setShowCreateOrUpdateBookModal(true)}
        >
          Add Books
        </Button>
      </Stack>
        {/* Books Table */}
        <BookTable 
          setShowCreateOrUpdateBookModal= {setShowCreateOrUpdateBookModal}
          setSelectedBook={setSelectedBook}
          selectedBook={selectedBook}
        />

        {/* Create or Update Book Modal */}
        <CreateOrUpdateBookModal 
          showModal={showCreateOrUpdateBookModal}
          setShowModal={setShowCreateOrUpdateBookModal}
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
        />
    </>
   );
}
 
export default AdminBooksPage;