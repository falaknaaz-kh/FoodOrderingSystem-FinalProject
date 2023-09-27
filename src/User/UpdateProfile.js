import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../Components/C_navbar";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [user, SetUser] = useState({});

  const [PhoneNumber, setPhoneNumber] = useState(false);
  const [emailId, setEmailId] = useState(false);
  const [fName, setFName] = useState(false);
  const [lName, setLName] = useState(false);
  const [codeWord, setCodeWord] = useState(false);
  let [data, setData] = useState(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    axios.get(`http://localhost:8080/user/${id}`).then((Response) => {
      user.firstName = Response.data.data.firstName;
      user.lastName = Response.data.data.lastName;
      user.email = Response.data.data.email;
      user.password = Response.data.data.password;
      user.phoneNo = Response.data.data.phoneNo;

      SetUser(user);
    });

    if (data != undefined) {
      axios
        .post(
          `http://localhost:8080/user/edit/${id}`,
          {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNo: data.phoneNo,
            password: data.password,
          },
          { "Content-Type": "application/json" }
        )
        .then((Response) => {
          toast.success("Updated SuccessFully");
        });
    }
  }, [data]);

  const updateUser = () => {
    console.log(`first name = ${firstName}`);
    console.log(`last name = ${lastName}`);
    console.log(`email = ${email}`);
    console.log(`password = ${password}`);
    console.log(`phoneNo' = ${phoneNo}`);
    data = {};

    console.log(user);
    const phone = PhoneNumber ? phoneNo : user.phoneNo;
    const newFirstName = fName ? firstName : user.firstName;
    const newLastName = lName ? lastName : user.lastName;
    const newEmail = emailId ? email : user.email;
    const newPassword = codeWord ? password : user.password;
    console.log(phone);

    data.firstName = newFirstName;
    data.lastName = newLastName;
    data.email = newEmail;
    data.password = newPassword;
    data.phoneNo = phoneNo;
    setData(data);
  };
  return (
    <div>
      <Navbar2></Navbar2>
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right"></div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="labels">FirstName</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={user.firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      setFName(true);
                    }}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Lastname</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={user.lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      setLName(true);
                    }}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">PhoneNumber</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={user.phoneNo}
                    onChange={(e) => {
                      setPhoneNo(e.target.value);
                      setPhoneNumber(true);
                    }}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Email ID</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder={user.email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailId(true);
                    }}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Password</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={user.password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setCodeWord(true);
                    }}
                  />
                </div>
              </div>

              <div class="mt-5 text-center">
                <button
                  type="submit"
                  onClick={updateUser}
                  class="btn btn-primary profile-button"
                  type="button"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
