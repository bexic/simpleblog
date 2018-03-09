import axios from 'axios';
const ROOT_URL = `http://localhost:8081/`;

class postApi {
  static fetchPosts() {
    const request = axios.get(`${ROOT_URL}posts`);
    return request;
  }

  static createPost (values) {
    const request = axios.post(`${ROOT_URL}posts`, values);
    return request;
  }
}

export default postApi;
