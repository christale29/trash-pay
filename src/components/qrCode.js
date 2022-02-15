import React, { useState } from "react";
import QRCode from "qrcode.react";
import HomeLayout from "../components/homelayout";
const Data = () => {
  const [value, setValue] = useState("Paid Successfull");

  return (
    <HomeLayout>
      <div
        style={{
          float: "right",
          textAlign: "center",
          paddingTop: "100px",
          marginRight: "40px",
          background: "white",
          padding: "50px",
          width: "25%",
        }}
      >
        <h1>Scan the Record</h1>
        <QRCode
          style={{ width: "90%", height: "15p%" }}
          id="abcdf"
          value={value}
        />
        <h1>SCAN ME</h1>
      </div>
    </HomeLayout>
  );
};
export default Data;
