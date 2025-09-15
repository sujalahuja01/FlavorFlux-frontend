const baseURL = "http://localhost:5000";

const fetchOptions = (method, body = null) => ({
  method,
  credentials: "include",
  headers: { "Content-Type": "application/json" },
  body: body ? JSON.stringify(body) : null,
});

export { baseURL, fetchOptions };
