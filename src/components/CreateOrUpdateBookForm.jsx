import { Button, Form, Stack } from "react-bootstrap";
import useForm from "../hooks/useForm";
import InputField from "./InputField";
import { useDispatch } from "react-redux";
import { createBookAction, updateBookAction } from "../redux/book/bookActions";

const BOOK_FORM_FIELDS = [
  {
    label: "Title",
    name: "title",
    type: "text",
  },
  {
    label: "ISBN",
    name: "isbn",
    type: "number",
  },
  {
    label: "Author",
    name: "author",
    type: "text",
  },
  {
    label: "Publish Year",
    name: "publish_year",
    type: "month",
  },
  {
    label: "Description",
    name: "description",
    type: "textarea",
  },
]

const emptyFormData = {
  title: '',
  author: '',
  publish_year: '',
  isbn: '',
  description: '',
}

const CreateOrUpdateBookForm = (props) => {
  const {setShowModal, selectedBook, setSelectedBook } = props

  // Condition to send either empty for data or form data initialize with the
  // book data to be updated

  const isNewBook = selectedBook?._id ? false : true

  const bookData = {
    id: selectedBook?._id,
    title: selectedBook?.title,
    author: selectedBook?.author,
    publish_year: selectedBook?.publish_year,
    isbn: selectedBook?.isbn,
    description: selectedBook?.description,
  }

  const initialFormData = isNewBook ? emptyFormData : bookData

  const { formData, handleOnChange } = useForm(initialFormData)

  const dispatch = useDispatch()

  const handleOnSubmit = (e) => {
    e.preventDefault()

    // Dispatch action to create book
    isNewBook 
      ? dispatch(createBookAction(formData)) 
      : dispatch(updateBookAction(formData))

    //close the modal
    handleCloseModal()
  }

  const handleCloseModal = () => {
    // 1. close the modal
    setShowModal(false)
    // 2. reset the selcted Book state to empty
    setSelectedBook({})
  }

  return ( 
    <Form onSubmit={handleOnSubmit}>
      {BOOK_FORM_FIELDS.map((field, index) => {
        const typeName = field.type === "textarea" ? "as" : "type"

        return(
          <InputField
            key={index}
            label={field.label}
            inputFieldAttributes={{
              [typeName]: field.type,
              name: field.name,
              value: formData[field.name],
              onChange: handleOnChange,
            }}
          />
        )
      })}

      {/* Submit Button/ Close Button */}
      <Stack direction="horizontal" gap={1} className="p-2 mt-auto">
          <Button
            variant="outline-success" 
            className="w-100"
            type="submit"
          >
            {isNewBook ? "Create Book" : "Update Book"}
          </Button>

          <Button
            variant="outline-danger" 
            className="w-100"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
      </Stack>
    </Form>
   );
}
 
export default CreateOrUpdateBookForm;