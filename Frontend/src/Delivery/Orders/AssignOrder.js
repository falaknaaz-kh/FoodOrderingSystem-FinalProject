import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../../Constants/Url";
import { useEffect } from "react";
import Navbar4 from "../../Components/D_navbar";
import { toast } from "react-toastify";

const AssignOrder = () => {
  const { orderId } = useParams();
  const [status, setStatus] = useState("PACKING");
  const [data] = useState({});
  const navigate = useNavigate();

  useEffect(() => {}, [data]);

  const saveStatus = async () => {
    if (status.length === 0) {
      toast.info("select Order status");
    } else {
      const data = new FormData();
      data.append("orderId", orderId);
      data.append("status", status);

      axios
        .put(url + "/order/update_status", {
          orderId: orderId,
          status: status,
        })
        .then((response) => {
          const result = response.data;

          if (result.status === "success") {
            toast.success("successfully updated Status");
            navigate("/AllOrdersRecord");
          } else {
            toast.danger("error while adding menu");
          }
        });
    }
  };

  return (
    <div className="vh-100 bg-dark d-flex flex-column">
      <Navbar4></Navbar4>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-9">
            <div className="card card-registration my-4">
              <div className="row g-0 text-primary p-5">
                <div className="row">
                  <div className="col">
                    <div
                      onClick={() => setStatus("PACKING")}
                      className={`border border-primary w-100 m-4 p-3 ${
                        status === "PACKING" ? "bg-primary text-light" : ""
                      }`}
                    >
                      PACKING
                    </div>
                  </div>
                  <div className="col">
                    <div
                      onClick={() => setStatus("READY")}
                      className={`border border-primary w-100 m-4 p-3 ${
                        status === "READY" ? "bg-primary text-light" : ""
                      }`}
                    >
                      READY
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div
                      onClick={() => setStatus("OUT_FOR_DELIVERY")}
                      className={`border border-primary w-100 m-4 p-3 ${
                        status === "OUT_FOR_DELIVERY"
                          ? "bg-primary text-light"
                          : ""
                      }`}
                    >
                      OUT_FOR_DELIVERY
                    </div>
                  </div>
                  <div className="col">
                    <div
                      onClick={() => setStatus("DELIVERED")}
                      className={`border border-primary w-100 m-4 p-3 ${
                        status === "DELIVERED" ? "bg-primary text-light" : ""
                      }`}
                    >
                      DELIVERED
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    onClick={saveStatus}
                    className="btn btn-success m-3 px-5 py-3"
                  >
                    Save Order Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AssignOrder;
