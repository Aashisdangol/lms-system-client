import { Form } from "react-bootstrap";

const InputField = (props) => {
  const { label, inputFieldAttributes } = props

  return ( 
    <Form.Group className="mb-3">
      <Form.Label className="fw-bold">{label}</Form.Label>

      <Form.Control 
        {...inputFieldAttributes}
      />
    </Form.Group>
   );
}
 
export default InputField;