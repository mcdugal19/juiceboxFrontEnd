import { BASE_URL } from "./users";

export const fetchPosts = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log("In fetch, token.", token);
    console.log("In fetch, data.", data);
    console.log("In fetch, data.posts.", data.posts);
    return data.posts;
  } catch (error) {
    throw error;
  }
};

export const fetchAllPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts/allposts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log("In fetchAll, token.", token);
    console.log("In fetchAll, data.", data);
    console.log("In fetchAll, data.posts.", data.posts);
    return data.posts;
  } catch (error) {
    throw error;
  }
};
