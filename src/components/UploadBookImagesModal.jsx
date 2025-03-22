import { Offcanvas } from "react-bootstrap";
import UploadBookImagesForm from "./UploadBookImagesForm";

const UploadBookImagesModal = (props) => {
  const { showModal, setShowModal, selectedBookId } = props

  return ( 
    <Offcanvas
      show={showModal}
      onHide={() => setShowModal(false)}
      placement="end"
      backdrop="static"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Upload Book Images</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        {/* Form to add thumbnail */}
        <UploadBookImagesForm setShowModal={setShowModal} selectedBookId={selectedBookId} />
      </Offcanvas.Body>
    </Offcanvas>
   );
}
 
export default UploadBookImagesModal;