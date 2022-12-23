import axios from "axios";

export const api = axios.create({
  baseURL: "https://homepage-login-2819b-default-rtdb.firebaseio.com.json",
});

export const getPostsPage = async (pageParam = 1, options = {}) => {
  const response = await api.get(`/posts?_page=${pageParam}`, options);
  return response.data;
};
