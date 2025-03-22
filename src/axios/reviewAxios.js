import axios from "axios";
import { getAuthHeader } from "./axiosHelper";

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL
const REVIEWS_ENDPOINT = '/api/v1/reviews'

const REVIEWS_API_URL = API_BASE_URL + REVIEWS_ENDPOINT

// PUBLIC ROUTES
export const getReviews = () => {
  const response = axios.get(REVIEWS_API_URL)
                      .then(res => res.data)
                      .catch(error => { throw error})

  return response
}

// PRIVATE | CREATE Review
export const createReview = (reviewObj) => {
  const response = axios.post(REVIEWS_API_URL, reviewObj, getAuthHeader())
                      .then(res => res.data)
                      .catch(error => { throw error})

  return response
}