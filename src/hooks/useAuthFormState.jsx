import { handleResponseFlow } from "@/utils/handleResponseFlow";
import { handleInputChange } from "@/utils/validate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuthFormState = (
  initialValues = {},
  { clearMessageOnChange = true } = {}
) => {
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(initialValues);

  const navigate = useNavigate();

  const handleChange = (e) => {
    handleInputChange(
      e,
      values,
      setValues,
      errors,
      setErrors,
      setMessage,
      clearMessageOnChange
    );
  };

  const runFlow = async ({
    requestFn,
    resetValues = {},
    redirectTo,
    delay,
  }) => {
    return handleResponseFlow({
      requestFn,
      setMessage,
      setErrors,
      setValues,
      resetValues,
      navigate,
      redirectTo,
      delay,
      setLoading,
    });
  };

  return {
    form: {
      values,
      setValues,
      errors,
      setErrors,
      handleChange,
    },

    status: {
      message,
      setMessage,
      loading,
      setLoading,
    },
    navigate,
    runFlow,
  };
};

export default useAuthFormState;
