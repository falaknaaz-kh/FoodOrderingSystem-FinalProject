import Navbar2 from "../../Components/C_navbar";
import "../Home/customerHome.css";
import { useEffect, useState } from "react";
import { CategorySelector } from "./CategorySelector";
import { CloudCategory } from "./CloudCategory";
const CustomerHome = () => {
  const [category, setCategory] = useState();

  return (
    <div className="">
      <Navbar2 />
      <div className="container">
        <div className="container">
          <div>
            {typeof category === "number" ? (
              <CloudCategory
                category={category}
                onBack={() => setCategory("")}
              />
            ) : (
              <CategorySelector setCategory={setCategory} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerHome;
