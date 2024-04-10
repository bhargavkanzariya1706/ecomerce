import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsCard from "../Components/ProductsCard";
import "../App.css";
const Airdopes = () => {
  const [airdata, setairdata] = useState([]);
  const [ld, setld] = useState(false);
  const show = async () => {
    setld(true);
    await axios
      .get(`https://63be78edf5cfc0949b58277e.mockapi.io/api1/?catgory=Airdopes`)
      .then((response) => {
        setairdata(response.data);
        setld(false);
      });
  };
  useEffect(() => {
    show();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="home_content">
          {ld ? (
            <div style={{ margin: "100px", marginLeft: "600px" }}>
              <div className="spinner p-4">
                <span>Loading...</span>
                <div className="half-spinner"></div>
              </div>
            </div>
          ) : (
            airdata.map((item) => <ProductsCard key={item.id} {...item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Airdopes;
