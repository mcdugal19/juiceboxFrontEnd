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
  return data.post;
}

export async function deletePost(postId, token) {
  const response = await fetch(`${BASE_URL}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
}
export async function editPost(editPostObj, postId, token) {
  const response = await fetch(`${BASE_URL}/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: editPostObj.title,
      content: editPostObj.content,
    }),
  });
  const data = await response.json();
  console.log("Edit Data", data);
  return data;
}
