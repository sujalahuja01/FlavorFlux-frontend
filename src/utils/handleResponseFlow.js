export async function handleResponseFlow({
  requestFn,
  setMessage,
  setErrors,
  setValues,
  resetValues = {},
  navigate,
  redirectTo,
  delay = 1500,
  setLoading,
}) {
  try {
    setLoading(true);
    const result = await requestFn();

    if (result.success) {
      setMessage(result.data.message);
      setValues(resetValues);
      setErrors({});
      if (navigate && redirectTo) {
        setTimeout(() => navigate(redirectTo), delay);
      }
    } else if (result.fieldErrors) {
      setErrors(result.fieldErrors);
      setMessage("");
    } else {
      setMessage(result.error);
      setErrors({});
    }
  } finally {
    setLoading(false);
  }
}
