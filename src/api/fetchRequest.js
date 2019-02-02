const BASE_URL = "https://app.joindrover.com/api";

function onFetchResponse(response) {
  const headerType = response.headers.get("Content-Type");
  const isJSON = headerType && headerType.includes("application/json");

  if (!response.ok) {
    throw new Error("There was a problem with the fetch request");
  }

  return isJSON ? response.json() : response.text();
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

  const requestBody = requestHeaders["content-type"].includes(
    "application/json"
  )
    ? JSON.stringify(body)
    : body;

  return fetch(requestUrl, {
    method,
    body: requestBody,
    headers: requestHeaders
  })
    .then(onFetchResponse)
    .catch(error => console.error(error));
}
