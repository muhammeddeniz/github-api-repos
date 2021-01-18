import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { TimelineContainer } from "../container";
import { Card, Input } from "../components";

function Home() {
  const [data, setData] = useState([]);
  const [val, setVal] = useState("");

  const getOrgs = (name) => {
    const url = `https://api.github.com/orgs/${name}`;

    axios
      .get(url)
      .then((res) => console.log(res.data))
      //   .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* data ad ekle  */}
      <Link to="/blog/deneme">Home Page</Link>

      <Input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => getOrgs(val)}>Ara</button>

      <Card></Card>
      {/* <TimelineContainer data={data} /> */}
    </div>
  );
}

export default Home;
