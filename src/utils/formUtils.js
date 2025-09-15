import { validate } from "./validate";

export function runValidation(values, formType, setErrors, setMessage) {
  const newErrors = validate(values, formType);

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    setMessage("");
    return false;
  }
  return true;
}
