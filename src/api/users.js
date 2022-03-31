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
