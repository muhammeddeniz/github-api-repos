import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Timeline } from "../components";

const Home = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/muhammeddeniz/repos")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Link to="/blog/deneme">Home Page</Link>

      <Timeline data={data} />
    </div>
  );
};

export default Home;
