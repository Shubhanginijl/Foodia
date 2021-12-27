import React from "react";
import { Link } from "react-router-dom";
const Deliveryandrestaurent = () => {
  return (
    <section>
      <p style={{ color: "#666", fontSize: "30px", fontWeight: "bold" }}>
       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Do you want to order <br />
        Food or Book a table in a Restaurant???
      </p>
      <article
        style={{ display: "flex", flexWrap: "wrap", marginLeft: "25mm" }}
      >
        <div>
          <Link to="/orderfooditem">
            <img
              src="Food-Delivery-removebg.png"
              alt="drop"
              style={{ height: "90mm" }}
            />
          </Link>
        </div>

        <div>
          <Link to="/goto">
            <img
              src="resto.png"
              alt="restaurant"
              style={{
                // borderRadius: "120px",
                flexDirection: "row",
                padding: "20px",
                position: "absolute",
                height: "90mm",
                padding: "0px",
                marginLeft: "280px",
              }}
            />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Deliveryandrestaurent;
