import { useState } from "react"

const useForm = (initialFormData) => {
  const [formData, setFormData] = useState(initialFormData)

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  return {
    formData,
    setFormData,
    handleOnChange
  }
}

export default useForm