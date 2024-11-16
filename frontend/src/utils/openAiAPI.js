const baseUrl = "http://127.0.0.1:8000/user/summary/";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

export const getEduContent = ({ values }) => {
  return fetch(baseUrl, {
    method: "GET",
    body: JSON.stringify({
      values,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then(checkResponse);
};
