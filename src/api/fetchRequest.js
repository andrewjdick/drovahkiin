const BASE_URL = "https://app.joindrover.com/api";

function onFetchResponse(response) {
  if (!response.ok) {
    throw new Error("There was a problem with the fetch request");
  }

  return response.json();
}

function onFetchSuccess(response) {
  return response;
}

export function fetchRequest({ url, method = "GET", body = {}, headers = {} }) {
  if (!url) {
    throw new Error("url is undefined");
  }

  const requestUrl = `${BASE_URL}/${url}`;

  const requestHeaders = {
    "content-type": "application/json",
    ...headers
  };

  const requestBody = JSON.stringify(body);

  return fetch(requestUrl, {
    method,
    body: requestBody,
    headers: requestHeaders
  })
    .then(onFetchResponse)
    .then(onFetchSuccess)
    .catch(error => console.error(error));
}
