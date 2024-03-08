import "./App.css";
import { useState, useEffect } from "react";
import FormInput from "./Components/FormInput/FormInput";

function App() {
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
  });

  let [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
  });


  useEffect(() => {
    console.log(formData);
    console.log(error);
  }, [formData, error]);

  function handleInputChange(e) {
    console.log(e);
    console.log(e.target);
    console.log("name", e.target.name);
    console.log("value", e.target.value);

    let { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });

    validateField(name, value);
    console.log(formData);
  }

  function validateField(name, value) {
    let fieldError = "";

    switch (name) {
      case "firstName":
      case "lastName": {
        const nameRegex = /^[A-Za-z]+$/;
        const isValidName = nameRegex.test(value);
        // isValidName will be true if the value contains only letters (no numbers or special characters)
        if (!isValidName) {
          fieldError = "It must contain only letters";
        }
        break;
      }
      case "email": {
        const emailRegex = /^\S+@\S+\.\S+$/;
        const isValidEmail = emailRegex.test(value);
        // isValidEmail will be true if the value matches the basic email format
        if(!isValidEmail) {
          fieldError = "It must be in basic email format"
        }
        break;
      }
      case "userName": {
        const usernameRegex = /^\w+$/;
        const isValidUsername = usernameRegex.test(value);
        // isValidUsername will be true if the value contains only alphanumeric characters and underscores
        if(!isValidUsername) {
          fieldError = "value must only either be alphanumeric characters or underscores"
        }
        break;
      }
      case "password": {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const isValidPassword = passwordRegex.test(value);
        // isValidPassword will be true if the value meets the criteria
        // Explanation: At least 8 characters, one lowercase, one uppercase, one number
        if(!isValidPassword) {
          fieldError = "value must be at least 8 characters, one lowercase, one uppercase, one number";
        }
        break;
      }
      default:
        break;
    }
    setError((error) => {
      return {
        ...error,
        [name]: fieldError,
      }
    })

    // console.log(error);
  }

  function validateSubmit(e) {
    e.preventDefault();

    // Perform form submission if no errors
    if(Object.values(error).every((errorMessage) => {
      return errorMessage === "";
    })) {
      console.log("Form has been submitted", formData);
    } else {
      console.log("Form has errors, please fix them.")
    }
  }

  return (
    <>
      <form onSubmit={validateSubmit}>
        <h1>Form Validation</h1>
        {/* First Name */}
        <FormInput
          type="text"
          title="First Name"
          show="Robin"
          rest="firstName"
          needed={true}
          change={handleInputChange}
          error={error}
        />

        {/* Last Name */}
        <FormInput
          type="text"
          title="Last Name"
          show="Stark"
          rest="lastName"
          needed={false}
          change={handleInputChange}
          error={error}
        />

        {/* Email */}

        <FormInput
          type="text"
          title="Email"
          show="Robin19777@gmail.com"
          rest="email"
          needed={true}
          change={handleInputChange}
          error={error}
        />

        {/* User Name */}
        <FormInput
          type="text"
          title="Username"
          show="Robin@1007"
          rest="userName"
          needed={true}
          change={handleInputChange}
          error={error}
        />

        {/* Password */}
        <FormInput
          type="password"
          title="Password"
          show="password"
          rest="password"
          needed={true}
          change={handleInputChange}
          error={error}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
