import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Address/Address.css";
import * as notification from "../../Constants/notification";

const AddAddress = () => {
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [address, SetAddress] = useState({});
  let [data, setData] = useState(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    console.log(`addressLine1 = ${addressLine1}`);
    if (data !== undefined) {
      axios
        .post(
          `http://localhost:8080/address/add/${id}`,
          {
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            city: city,
            state: state,
            country: country,
            pinCode: pinCode,
          },
          { "Content-Type": "application/json" }
        )
        .then((Response) => {
          notification.success("Success", "Address Added successful");
          navigate("/OrderDetails");
        });
    }
  }, [data]);

  const addUserAddress = (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z\s]+$/.test(addressLine1)) {
      notification.info("Enter a valid Address Line 1");
    } else if (!/^[a-zA-Z\s]+$/.test(addressLine2)) {
      notification.info("Enter a valid Address Line 2");
    } else if (!/^[a-zA-Z\s]+$/.test(city)) {
      notification.info("Enter a valid City");
    } else if (!/^[a-zA-Z\s]+$/.test(state)) {
      notification.info("Enter a valid State");
    } else if (!/^[a-zA-Z\s]+$/.test(country)) {
      notification.info("Enter a valid Country");
    } else if (!/^\d{6}$/.test(pinCode)) {
      notification.info("Enter a valid 6-digit Pin Code");
    } else {
      console.log(`addressLine1 = ${addressLine1}`);
      console.log(`addressLine1 = ${addressLine2}`);
      console.log(`city = ${city}`);
      console.log(`state = ${state}`);
      console.log(`country = ${country}`);
      console.log(`pinCode = ${pinCode}`);

      data = {
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        city: city,
        state: state,
        country: country,
        pinCode: pinCode,
      };
      setData(data);
    }
  };

  return (
    <section className="h-100 bg-dark" class="myStyle">
      <Link to="/OrderDetails">
        <button type="button" class="btn btn-success btn-sm">
          Already Have Address..click
        </button>
      </Link>

      <h3 className="mb-5 text-uppercase">Address : </h3>

      <div className="form-outline mb-4">
        <input
          type="text"
          id="form3Example97"
          className="form-control form-control-lg"
          onChange={(e) => {
            setAddressLine1(e.target.value);
          }}
        />
        <label className="form-label" htmlFor="form3Example97">
          AddressLine 1
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="text"
          id="form3Example98"
          className="form-control form-control-lg"
          onChange={(e) => {
            setAddressLine2(e.target.value);
          }}
        />
        <label className="form-label" htmlFor="form3Example98">
          AddressLine 2
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="text"
          id="form3Example99"
          className="form-control form-control-lg"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <label className="form-label" htmlFor="form3Example99">
          City
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="text"
          id="form3Example100"
          className="form-control form-control-lg"
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
        <label className="form-label" htmlFor="form3Example100">
          State
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="text"
          id="form3Example101"
          className="form-control form-control-lg"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <label className="form-label" htmlFor="form3Example101">
          Country
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="text"
          id="form3Example102"
          className="form-control form-control-lg"
          onChange={(e) => {
            setPinCode(e.target.value);
          }}
        />
        <label className="form-label" htmlFor="form3Example102">
          Pin Code
        </label>
      </div>

      <div className="d-flex justify-content-end pt-3">
        <Link to="/login">
          <button
            type="button"
            className="btn btn-warning btn-lg ms-2"
            onClick={addUserAddress}
          >
            Submit
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AddAddress;
