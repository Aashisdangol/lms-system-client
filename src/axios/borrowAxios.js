import axios from "axios";
import { getAuthHeader } from "./axiosHelper";

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL
const BORROWS_ENDPOINT = '/api/v1/borrows'

const BORROWS_API_URL = API_BASE_URL + BORROWS_ENDPOINT

// GET borrows
export const getBorrows = () => {
  const response = axios.get(BORROWS_API_URL, getAuthHeader())
                      .then(res => res.data)
                      .catch(error => { throw error})

  return response
}

// Create Borrow
export const createBorrow = (borrowObj) => {
  const response = axios.post(BORROWS_API_URL, borrowObj, getAuthHeader())
                      .then(res => res.data)
                      .catch(error => { throw error})

  return response
}

// Update/return Borrow
export const returnBorrow = (borrowId) => {
  const response = axios.patch(BORROWS_API_URL, { borrowId }, getAuthHeader())
                      .then(res => res.data)
                      .catch(error => { throw error})

  return response
}

