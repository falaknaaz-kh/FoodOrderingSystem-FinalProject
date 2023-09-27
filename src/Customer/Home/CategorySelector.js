import React from "react";
import { catgories } from "../../Constants/categories";

export const CategorySelector = ({ setCategory = () => undefined }) => {
  return (
    <div className="m-4">
      <div className="d-flex">
        <h3 className="text-light">Select Category</h3>
      </div>
      <div>
        {catgories.map((category, index) => {
          return (
            <div key={index} style={{ float: "left", margin: 40 }}>
              <div
                className="anchordiv"
                style={{ cursor: "pointer" }}
                onClick={() => setCategory(index)}
              >
                <div>
                  <img src={"/" + category + ".jpg"} className="anchorimages" />
                </div>
                <h5 className="text-light">{category}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
