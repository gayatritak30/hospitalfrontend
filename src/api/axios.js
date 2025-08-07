import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // ✅ Correct backend URL and port
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
