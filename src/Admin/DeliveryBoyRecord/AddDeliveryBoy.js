import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AddDeliveryBoy = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [role, setRole] = useState("customer");
  const [data, setData] = useState(undefined);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (firstName.trim().length < 3) {
      errors.firstName = "First name should be at least 3 characters long";
    }

    if (lastName.trim().length < 3) {
      errors.lastName = "Last name should be at least 3 characters long";
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      errors.email = "Invalid email address";
    }

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      errors.password =
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character";
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNo)) {
      errors.phoneNo = "Phone number must be 10 digits long";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    if (data !== undefined) {
      axios
        .post(
          "http://localhost:8080/user/add_deliveryBoy",
          {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNo: phoneNo,
            password: password,
            role: role,
          },
          { "Content-Type": "application/json" }
        )
        .then((Response) => {
          toast.success("Registered Delivery Boy SuccessFully");
          navigate("/DeliveryBoyList");
        });
    }
  }, [data, navigate]);

  const AddDeliveryBoy = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNo: phoneNo,
        password: password,
        role: role,
      };

      setData(formData);
    }
  };

  return (
    <div className="col-md-5 mx-auto py-3 text-info">
      <h1 className="page-title">Add DeliveryBoy</h1>

      <div className="mb-3">
        <label htmlFor="">First Name</label>
        <input
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          value={firstName}
          type="text"
          placeholder="Enter the first name"
          className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
        />
        {errors.firstName && (
          <div className="invalid-feedback">{errors.firstName}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="">Last Name</label>
        <input
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          value={lastName}
          type="text"
          placeholder="Enter the last name"
          className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
        />
        {errors.lastName && (
          <div className="invalid-feedback">{errors.lastName}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="">Email</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="text"
          placeholder="Enter the email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="">Password</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          placeholder="Enter the password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="">Phone Number</label>
        <input
          onChange={(e) => {
            const input = e.target.value.replace(/\D/g, "");
            setPhoneNo(input);
          }}
          value={phoneNo}
          type="text"
          placeholder="Enter Phone No"
          className={`form-control ${errors.phoneNo ? "is-invalid" : ""}`}
        />
        {errors.phoneNo && (
          <div className="invalid-feedback">{errors.phoneNo}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="">Role</label>
        <select
          onChange={(e) => {
            setRole(e.target.value);
          }}
          value={role}
          className="form-control"
        >
          <option value="deliveryboy">Delivery Boy</option>
        </select>
      </div>

      <div className="mb-3">
        <button onClick={AddDeliveryBoy} className="btn btn-success me-3">
          Add
        </button>
        <Link to="/deliveryBoyList">
          <a className="btn btn-warning">Back</a>
        </Link>
      </div>
    </div>
  );
};

export default AddDeliveryBoy;
