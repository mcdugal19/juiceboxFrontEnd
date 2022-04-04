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

export async function createPost(postObj, token) {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
        title: postObj.title,
        content: postObj.content,
    }),
  });
  const data = await response.json();
  console.log('data', data)
  return data.post;
}