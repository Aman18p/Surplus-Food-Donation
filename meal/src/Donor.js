import React, { useState } from "react";
import Itemcard from "./Itemcard";
import data from "./data";

const Donor = () => {
  const [filter, setFilter] = useState("");

  const SearchText = (event) => {
    setFilter(event.target.value);
  };

  let dataSearch = data.productData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12 mb-5">
            <div className="mb-3 col-4 mx-auto text-center">
              <label className="form-label h4search">Search</label>
              <input
                type="text"
                className="form-control"
                value={filter}
                onChange={SearchText}
              />
            </div>
          </div>

          {dataSearch.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                weight={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Donor;