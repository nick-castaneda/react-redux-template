// for development
export function responseLog(response) {
  console.log(response); // eslint-disable-line
  return response;
}

// Creates a new request for fetch
export function request(method, url, headers = {}, body = null) {
  let options = { method, headers: new Headers(headers) };
  if (body) options = Object.assign({}, options, { body: JSON.stringify(body) });

  const req = new Request(url, options);
  return req;
}

// API bad responses don't throw errors, so this function handles that issue
export function handleErrors(response) {
  const { ok, url, _bodyText } = response;
  if (!ok) {
    const apiError = {
      apiError: true,
      url,
      _bodyText,
    };
    throw apiError;
  }

  return response;
}
