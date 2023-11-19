import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { url } from "../../Constants/Url";
import { useAuthContext } from "../../contexts/AuthContext";
import * as notification from "../../Constants/notification";
import GooglePayButton from "@google-pay/button-react";

const Payment = () => {
  const { user } = useAuthContext();

  const navigate = useNavigate();
  const [userid, setUserId] = useState(sessionStorage.getItem("userId"));
  const [addressId, setAddressId] = useState(1);
  const [paymentMode, setPaymentMode] = useState("");
  const [addresses, setAddresses] = useState([]);

  const getAddresse = () => {
    axios.get(url + `/address/all/${user?.id}`).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setAddresses(result?.data);
      } else {
        notification.danger("error while loading list of users");
      }
    });
  };

  useEffect(() => {
    getAddresse();
  }, []);

  const setPayment = () => {
    if (addressId.length === 0) {
      notification.danger("please enter addressId");
    } else if (paymentMode.length === 0) {
      notification.info("Enter new paymentMode");
    } else {
      axios
        .post(
          url + "/order/place",
          { addressId: addressId, paymentMode: paymentMode, userId: user?.id },
          { "Content-Type": "application/json" }
        )
        .then((response) => {
          const result = response.data;

          if (result.status === "success") {
            notification.success("Your payment Added Successfully !!!");
            navigate("/");
          } else {
            notification.danger("payment Failed");
          }
        });
    }
  };
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div class="col-md-6 text-white d-flex flex-column justify-content-start">
              <h3>
                Happy To See U In <span class="txt">CraveClick</span>
              </h3>
              <h6>let's Make a Payment in Simpler Way...</h6>
            </div>
            <div className="card">
              <div className="row g-0">
                <div className="flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <div class="row">
                      <div class="icons d-flex gap-2 justify-content-center">
                        <img src="https://img.icons8.com/color/48/000000/visa.png" />
                        <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" />
                        <img src="https://img.icons8.com/color/48/000000/maestro.png" />
                      </div>
                    </div>
                    <form class="mx-1 mx-md-4">
                      <h5 className="fw-normal mb-3 pb-3">Payment Here</h5>

                      <h4>Please Choose Address</h4>

                      <div className="form-outline mb-4">
                        <select
                          type="text"
                          id="form2Example27"
                          class="form-control "
                          value={addressId}
                          onChange={(e) => {
                            setAddressId(e.target.value);
                          }}
                        >
                          {addresses?.map((address) => {
                            return (
                              <option value={address?.id}>
                                {address?.addressLine1},{address?.addressLine2},
                                {address?.city},{address?.country},
                                {address?.pinCode},
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <label className="text-secondary text-lg">
                        {" "}
                        Payment Type :{" "}
                      </label>
                      <select
                        onChange={(e) => {
                          setPaymentMode(e.target.value);
                        }}
                        className="mx-3 p-2"
                      >
                        {" "}
                        <option value=""> paymentMode </option>
                        <option value="COD"> COD </option>
                        <option value="CARD"> Card </option>
                        <option value="UPI"> UPI </option>
                        <option value="NETBANKING"> Net Banking </option>
                      </select>

                      <div className="mt-3">
                        <button
                          onClick={() => navigate("/")}
                          className="btn btn-danger mt-2 mb-4 me-5 pb-2 pt-1"
                          type="button"
                        >
                          Cancel
                        </button>

                        <GooglePayButton
                          onClick={setPayment}
                          environment="TEST"
                          buttonType="order"
                          paymentRequest={{
                            apiVersion: 2,
                            apiVersionMinor: 0,
                            allowedPaymentMethods: [
                              {
                                type: "CARD",
                                parameters: {
                                  allowedAuthMethods: [
                                    "PAN_ONLY",
                                    "CRYPTOGRAM_3DS",
                                  ],
                                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                                },
                                tokenizationSpecification: {
                                  type: "PAYMENT_GATEWAY",
                                  parameters: {
                                    gateway: "example",
                                    gatewayMerchantId:
                                      "exampleGatewayMerchantId",
                                  },
                                },
                              },
                            ],
                            merchantInfo: {
                              merchantId: "12345678901234567890",
                              merchantName: "Demo Merchant",
                            },
                            transactionInfo: {
                              totalPriceStatus: "FINAL",
                              totalPriceLabel: "Total",
                              totalPrice: "100.00",
                              currencyCode: "USD",
                              countryCode: "US",
                            },
                          }}
                          onLoadPaymentData={(paymentRequest) => {
                            console.log("load payment data", paymentRequest);
                          }}
                        />

                        <button
                          onClick={setPayment}
                          className="btn btn-info mt-2 mb-4 me-5 pb-2 pt-1"
                          type="button"
                        >
                          Place Order
                        </button>
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
export default Payment;
