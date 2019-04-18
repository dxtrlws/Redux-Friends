import axios from 'axios';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_RESOLVED = 'LOGIN_RESOLVED';


export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  console.log('object')
  return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_RESOLVED });
    })
    .catch(err => {
      if (err.response.status === 403) {
        localStorage.removeItem('token');
      }
      dispatch({ type: LOGIN_RESOLVED });
    });
};
