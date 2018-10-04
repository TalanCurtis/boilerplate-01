import axios from 'axios';

// Types
export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

// Actions
export function setUser() {
  const type = SET_USER
  const payload = axios.get('/auth/me').then(res => {
    return res.data
  })

  return {type, payload};
}

export function clearUser() {
  const type = CLEAR_USER
  const payload = {}

  return {type, payload};
}



