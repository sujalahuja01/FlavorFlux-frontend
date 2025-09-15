const required = (message) => ({
  check: (v) => !v.trim(),
  message,
});

const passwordSignupRules = (reply = "Don't be shy, drop that password.") => {
  return [
    required(reply),
    {
      check: (v) => v.length < 8,
      message: "Password’s gotta be 8+ characters, bestie 🔑",
    },
  ];
};

const rules = {
  username: {
    signup: [
      required("Drop that name bestiee. 😭"),
      {
        check: (v) => v.length < 3,
        message: "Too short, bestie 😭. Go for 3–30 letters.",
      },
    ],

    login: [required("Yo, drop your username/email 👀")],
  },
  currentPassword: {
    deletePassword: [
      required("Hand over the expired password, to cook a new one"),
    ],
  },
  password: {
    signup: passwordSignupRules(),
    resetPassword: passwordSignupRules(),
    login: [required("Don’t ghost me, type your password 😤")],
    delete: [required("Bruh, type the magic word or this account stays 🪄")],
    changePassword: passwordSignupRules(
      "Don't be shy, drop that new password."
    ),
  },
  confirmPassword: {
    resetPassword: [
      {
        check: (v, values) => v !== values.password,
        message: "Those passwords ain’t twins 💔",
      },
    ],
    changePassword: [
      {
        check: (v, values) => v !== values.password,
        message: "Those passwords ain't twins 💔",
      },
    ],
  },
  email: {
    signup: [
      required("Yo bro, fill that email."),
      {
        check: (v) =>
          !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
            v
          ),
        message: "Bruh, that doesn’t look like a valid email 🤨",
      },
    ],
    forgot: [required("Email field looking a lil empty rn 👀")],
  },
};

export function validate(values, formType) {
  const errors = {};

  for (const field in values) {
    if (rules[field] && rules[field][formType]) {
      for (const { check, message } of rules[field][formType]) {
        if (check(values[field], values)) {
          errors[field] = message;
          break;
        }
      }
    }
  }
  return errors;
}

export const handleInputChange = (
  e,
  values,
  setValues,
  errors,
  setErrors,
  setMessage,
  clearMessage = true
) => {
  const { name, value } = e.target;
  setValues({
    ...values,
    [name]: value,
  });
  if (errors[name]) {
    setErrors({
      ...errors,
      [name]: "",
    });
  }
  if (clearMessage && setMessage) {
    setMessage("");
  }
};
