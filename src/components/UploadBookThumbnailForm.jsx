import { useState } from "react"
import InputField from "./InputField"
import { Button, Form, Stack } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { updateBookAction } from "../redux/book/bookActions"

const UploadBookThumbnailForm = (props) => {
  const { setShowModal, selectedBookId } = props
  const [thumbnail, setThumbnail] = useState()

  const dispatch = useDispatch()

  const handleOnSubmit = (e) => {
    e.preventDefault()

    // process form data to send thumbnail file and book id
    let formData = new FormData()

    // append book id to formData
    formData.append("id", selectedBookId)

    // append the thumbnail image file
    formData.append("image", thumbnail)

    // Upload this formData to upload image
    // Dispatch an action
    dispatch(updateBookAction(formData))

    // close modal
    setShowModal(false)
  }

  const handleOnImageChange = (e) => {
    const { files } = e.target
console.log("files", files);

    setThumbnail(files[0])
  }

  return ( 
    <Form onSubmit={handleOnSubmit} className="d-flex flex-column justify-content-between h-100">
        <InputField
          label="Upload Thumbnail"
          inputFieldAttributes={{
            type: "file",
            name: "thumbnail",
            onChange: handleOnImageChange,
          }}
        />

        <Stack direction="horizontal" gap={1} className="p-2 mt-auto">
          <Button
            variant="outline-success" 
            className="w-100"
            type="submit"
          >
            Update
          </Button>

          <Button
            variant="outline-danger" 
            className="w-100"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </Button>
      </Stack>
    </Form>
   );
}
 
export default UploadBookThumbnailForm;