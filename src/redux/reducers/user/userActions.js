import axios from 'axios';

// Types
export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

// Actions
export function setUser() {
  const type = SET_USER
  //TODO: why does auth/me req.user default to old user when going back in browser!!!???
  const payload = axios.get('/auth/me').then(res => {
    return res.data
  }).catch((err)=>{ console.log("rejected")})

  return {type, payload};
}

export function clearUser() {
  const type = CLEAR_USER
  const payload = {}

  return {type, payload};
}



