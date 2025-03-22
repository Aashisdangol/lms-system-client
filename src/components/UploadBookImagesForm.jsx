import { useState } from "react"
import InputField from "./InputField"
import { Button, Form, Stack } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { createBookImagesAction } from "../redux/book/bookActions"

const UploadBookImagesForm = (props) => {
  const { setShowModal, selectedBookId } = props
  const [images, setImages] = useState([])

  const dispatch = useDispatch()

  const handleOnSubmit = (e) => {
    e.preventDefault()

    // process form data to send image files and book id
    let formData = new FormData()

    // append book id to formData
    formData.append("id", selectedBookId)

    // append the images image file
    Array.from(images).forEach(image => {
      formData.append("images", image)
    })
    
    // Upload this formData to upload image
    // Dispatch an action
    dispatch(createBookImagesAction(formData))

    // close modal
    setShowModal(false)
  }

  const handleOnImageChange = (e) => {
    const { files } = e.target

    setImages(files)
  }

  return ( 
    <Form onSubmit={handleOnSubmit} className="d-flex flex-column justify-content-between h-100">
        <InputField
          label="Upload Book Images"
          inputFieldAttributes={{
            type: "file",
            name: "images",
            onChange: handleOnImageChange,
            multiple: true
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
 
export default UploadBookImagesForm;