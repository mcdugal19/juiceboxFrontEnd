export const BASE_URL = "https://floating-oasis-64267.herokuapp.com/api";

export const fetchUser = async (token) => {
  const response = await fetch(`${BASE_URL}/users`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export async function fetchUserToken(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/login`,{
      method: "POST",
      headers: {"Accept": "*/*" ,"Content-Type" : "application/json"} ,
      body: JSON.stringify({
        user: {
          "username": username,
          "password": password,
        },
      }),
    });
    const data = await response.json();
    return data.data.token;
  } catch (err) {
    throw err;
  }
}
