import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../Constants/Url";
import signupImg from "../Customer/Images/signup.gif";
import { toast } from "react-toastify";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneNoError, setPhoneNoError] = useState("");

  const navigate = useNavigate();

  const validateFirstName = () => {
    if (firstName.trim() === "" || firstName.trim().length < 3) {
      setFirstNameError("First name should be at least 3 characters");
      return false;
    }
    setFirstNameError("");
    return true;
  };

  const validateLastName = () => {
    if (lastName.trim() === "" || lastName.trim().length < 3) {
      setLastNameError("Last name should be at least 3 characters");
      return false;
    }
    setLastNameError("");
    return true;
  };

  const validateEmail = () => {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.trim() === "" || !emailPattern.test(email.trim())) {
      setEmailError("Valid email is required");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    const passwordPattern =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (password.trim() === "" || !passwordPattern.test(password.trim())) {
      setPasswordError(
        "Password must have at least 8 characters, including one uppercase, one lowercase, one digit, and one special character"
      );
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validatePhoneNo = () => {
    if (
      phoneNo.trim() === "" ||
      phoneNo.trim().length !== 10 ||
      isNaN(phoneNo.trim())
    ) {
      setPhoneNoError("Phone number must be 10 digits");
      return false;
    }
    setPhoneNoError("");
    return true;
  };

  const SignupUser = (e) => {
    e.preventDefault();

    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isPhoneNoValid = validatePhoneNo();

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isPhoneNoValid
    ) {
      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phoneNo: phoneNo,
      };

      axios
        .post(url + "/user/register", userData, {
          "Content-Type": "application/json",
        })
        .then((response) => {
          toast.success("Registeration SuccessFully");
          navigate("/Signin");
        });
        // .catch((error) => {
        //   console.error("Duplicate", error);
        //   toast.warning("An error occurred while registering. Entered email is already registered!");
        // });
    }
  };

  return (
    <section className="h-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block mt-5">
                  <img src={signupImg} alt="Sample photo" />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">
                      <b>Sign Up</b>
                    </h3>
                    <div className="form-outline mb-16">
                      <input
                        type="text"
                        id="form3Example97"
                        className="form-control form-control-lg"
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                      <label className="form-label" htmlFor="form3Example97">
                        First Name
                      </label>
                      <div className="text-danger">{firstNameError}</div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example98"
                        className="form-control form-control-lg"
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                      <label className="form-label" htmlFor="form3Example98">
                        Last Name
                      </label>
                      <div className="text-danger">{lastNameError}</div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example99"
                        className="form-control form-control-lg"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <label className="form-label" htmlFor="form3Example99">
                        Email ID
                      </label>
                      <div className="text-danger">{emailError}</div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example100"
                        className="form-control form-control-lg"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <label className="form-label" htmlFor="form3Example100">
                        Password
                      </label>
                      <div className="text-danger">{passwordError}</div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="number"
                        id="form3Example101"
                        className="form-control form-control-lg"
                        onChange={(e) => {
                          setPhoneNo(e.target.value);
                        }}
                      />
                      <label className="form-label" htmlFor="form3Example101">
                        Phone Number
                      </label>
                      <div className="text-danger">{phoneNoError}</div>
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <Link to="/login">
                        <button
                          type="button"
                          className="btn btn-warning btn-lg ms-2"
                          onClick={SignupUser}
                        >
                          Submit
                        </button>
                      </Link>
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <Link to="/signin">
                        <button className="btn btn-dark">Back to login</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
