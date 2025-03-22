import { useEffect, useState } from "react";
import { Button, Image, Stack, Table } from "react-bootstrap";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getBooksAction } from "../redux/book/bookActions";
import UploadBookThumbnail from "./UploadBookThumbnailModal";
import UploadBookImagesModal from "./UploadBookImagesModal";

const BookTable = (props) => {
  const { setShowCreateOrUpdateBookModal, setSelectedBook, selectedBook } = props

  const { books } = useSelector(state => state.book)


  // Dispatch action to get books
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooksAction())
  }, [dispatch])

  // handle On Edit
  const handleOnEdit = (book) => {
    setShowCreateOrUpdateBookModal(true)
    setSelectedBook(book)
  }

  // State to control upload thumbnail modal
  const [showUplaodThumbnailModal, setShowUploadThumbnailModal] = useState(false)

  const handleOnUpdateThumbnail = (book) => {
    setShowUploadThumbnailModal(true)
    setSelectedBook(book)
  }

  // State to control uplaod book modal
  const [showUplaodBookImagesModal, setShowUploadBookImagesModal] = useState(false)

  const handleOnUplaodBookImages = (book) => {
    setShowUploadBookImagesModal(true)
    setSelectedBook(book)
  }

  return ( 
    <>
      <Table striped bordered className="mt-4">
      <thead>
        <tr>
          <th className="col-1">#</th>
          <th className="col-2">Thumbnail</th>
          <th className="col-2">Title</th>
          <th className="col-5">Description</th>
          <th className="col-2 text-center">Actions</th>
        </tr>
        </thead>

        <tbody>
          {books.map((book, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>
                <Image 
                  src={`${import.meta.env.VITE_BASE_API_URL}${book.thumbnail}`}
                  width={80} 
                  height={80}
                  className="p-1"
                  rounded
                />

                <Stack direction='horizontal' gap={2} className='p-2 justify-content-center'>
                  <Button 
                    onClick={() => handleOnUpdateThumbnail(book)}>
                      Update Thumbnail
                    </Button>
                  <Button
                    onClick={() => handleOnUplaodBookImages(book)}
                  >
                    Add Images
                  </Button>
                </Stack>
              </td>
              <td>
              {book.title} <br />
              {book.author}
              </td>

              <td>{book.description}</td>

              <td>
              <Stack direction='horizontal' gap={2} className='p-2 justify-content-center'>
                <Button 
                  variant='outline-light' 
                  onClick={() => handleOnEdit(book)}
                >
                  <BsPencil color='green' />
                </Button>
                <BsTrash color='red' />
              </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <UploadBookThumbnail 
        showModal={showUplaodThumbnailModal}
        setShowModal={setShowUploadThumbnailModal}
        selectedBookId={selectedBook?._id}
      />

      <UploadBookImagesModal
        showModal={showUplaodBookImagesModal}
        setShowModal={setShowUploadBookImagesModal}
        selectedBookId={selectedBook?._id}
      />
    </>
   );
}
 
export default BookTable;