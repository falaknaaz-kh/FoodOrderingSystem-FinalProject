import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import * as notification from "../Constants/notification";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isValidPassword = (password) => {
    const passwordPattern =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return passwordPattern.test(password);
  };

  const changePassword = () => {
    if (Email.length === 0) {
      notification.danger("Please enter an email.");
    } else if (!isValidEmail(Email)) {
      notification.danger("Please enter a valid email.");
    } else if (Password.length === 0) {
      notification.danger("Enter a new password.");
    } else if (!isValidPassword(Password)) {
      notification.danger(
        "Password must contain at least one lowercase letter, one uppercase letter, one special character, one digit, and be at least 8 characters long."
      );
    } else {
      const body = {
        Email: Email,
        Password: Password,
      };

      axios
        .post("http://localhost:8080/user/change_password", body, {
          "Content-Type": "application/json",
        })
        .then((response) => {
          console.log(response);
          const result = response.data;
          sessionStorage.setItem("userId", result.data.id);
          if (result.status === "success") {
            console.log("Login Successful!");
            notification.success("Your password was changed successfully!");

            if (
              result.data.role === "customer" ||
              result.data.role === "admin" ||
              result.data.role === "deliveryBoy"
            ) {
              navigate("/signin");
            }
          } else {
            notification.danger("Login failed");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          notification.danger("An error occurred.");
        });
    }
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form className="mx-1 mx-md-4">
                      <h5 className="fw-normal mb-3 pb-3">Change Password</h5>

                      <div className="form-outline mb-4">
                        <input
                          className="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          New Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          onClick={changePassword}
                          className="btn btn-success"
                          type="button"
                        >
                          Save
                        </button>
                        <div className="d-flex justify-content-center pt-3">
                          <Link to="/signin">
                            <button className="btn btn-dark">
                              Back to login
                            </button>
                          </Link>
                        </div>
                      </div>
                    </form>
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

export default ForgotPassword;
