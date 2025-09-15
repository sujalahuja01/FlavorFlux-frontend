import { fetchOptions } from "./api";

export async function authRequest(url, method, body) {
  try {
    const res = await fetch(url, fetchOptions(method, body));
    const data = await res.json();

    if (res.ok) {
      return { success: true, data };
    } else if (typeof data.error === "object") {
      return { success: false, fieldErrors: data.error };
    } else {
      return { success: false, error: data.error || "Something went wrong" };
    }
  } catch {
    return { success: false, error: "Network error. Try again later." };
  }
}
