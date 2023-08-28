import "../year/year.css";
import { useEffect, useState } from "react";

import axios from "axios";

const YearData = () => {
  const [data, setDate] = useState([]);

  useEffect(() => {
    axios
      .get("https://mern-data-api.vercel.app/alldata")
      .then((arr) => setDate(arr.data));
  }, []);
  return (
    <div className="dot">
      <div className="year">
        {data.map((item) => (
          <p key={item._id}>
            {item.end_year === "" ? "N.A" : item.end_year}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>{item.country}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default YearData;
