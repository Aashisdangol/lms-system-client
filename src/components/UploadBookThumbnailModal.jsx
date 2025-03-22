import { Offcanvas } from "react-bootstrap";
import UploadBookImagesForm from "./UploadBookImagesForm";

const UploadBookThumbnail = (props) => {
  const { showModal, setShowModal, selectedBookId } = props

  return ( 
    <Offcanvas
      show={showModal}
      onHide={() => setShowModal(false)}
      placement="end"
      backdrop="static"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Update Thumbnail</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        {/* Form to add thumbnail */}
        <UploadBookImagesForm setShowModal={setShowModal} selectedBookId={selectedBookId} />
      </Offcanvas.Body>
    </Offcanvas>
   );
}
 
export default UploadBookThumbnail;