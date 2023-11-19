import axios from "axios";
import { useState, useEffect } from "react";
import { url } from "../../Constants/Url";
import MenuTypeRow from "./MenuTypeRow";
import Navbar2 from "../../Components/C_navbar";

const Rice = () => {
  const [menuTypeId] = useState(7);
  const [menutype, setMenuType] = useState([]);

  useEffect(() => {
    console.log(`menutype is loaded`);
    getMenutype();
  }, []);

  const getMenutype = () => {
    axios
      .get(url + `/menutype/allMenuByType/${menuTypeId}`)
      .then((response) => {
        const result = response.data;
        if (result.status === "success") {
          setMenuType(result.data);
        } else {
          alert("error while loading list of menutype");
        }
      });
  };

  return (
    <section class="pb-5 header text-center">
      <Navbar2 />
      <div class="container py-5 text-white" className="RowStyle">
        <div class="row">
          <div class="col-lg-9 mx-auto">
            <div class="card border-0 shadow">
              <div>
                <div>
                  <table class="table m-0" className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Menu_Id</th>
                        <th scope="col">Menu Name</th>
                        <th scope="col">price</th>
                        <th scope="col">Image</th>
                        <th scope="col">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {menutype.map((menutype) => {
                        return <MenuTypeRow menutype={menutype} />;
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rice;
