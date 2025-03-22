import axios from "axios";
import { getAuthHeader } from "./axiosHelper";

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL
const BOOKS_ENDPOINT = '/api/v1/books'

const BOOKS_API_URL = API_BASE_URL + BOOKS_ENDPOINT

// GET books | PUBLIC ROUTES
export const getBooks = () => {
  const response = axios.get(BOOKS_API_URL)
                      .then(res => res.data)
                      .catch(error => { throw error})

  return response
}

// GET A BOOK | PUBLIC ROUTE
export const getBook = (_id) => {
  const response = axios.get(`${BOOKS_API_URL}/${_id}`)
                      .then(res => res.data)
                      .catch(error => { throw error})

  return response
}

// CREATE BOOK | PRIVATE | ADMIN ONLY ROUTE
export const createBook = (bookObj) => {
  const response = axios.post(BOOKS_API_URL, bookObj, getAuthHeader())
                      .then(res => res.data)
                      .catch(error => { throw error})

  return response
}

export const updateBook = (bookObj) => {
  const response = axios.patch(BOOKS_API_URL, bookObj, getAuthHeader())
                      .then(res => res.data)
                      .catch(error => { throw error})

  return response
}

export const createBookImages = (bookObj) => {
  const response = axios.patch(`${BOOKS_API_URL}/bookImages`, bookObj, getAuthHeader())
                      .then(res => res.data)
                      .catch(error => { throw error})

  return response
}