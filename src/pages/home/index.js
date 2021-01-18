import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { TimelineContainer } from "../../container";
import { Card, Input, Button } from "../../components";

import "./home.css";

function Home() {
  const [data, setData] = useState();
  const [val, setVal] = useState("");

  const getOrgs = (name) => {
    const url = `https://api.github.com/orgs/${name}`;

    axios
      .get(url)
      .then((res) => console.log(res.data))
      //   .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const getOrg = (name) => {
    const url = `https://api.github.com/orgs/${name}`;

    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="home__search">
        <Input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <span className="home__search__space"></span>

        <Button onClick={() => getOrg(val)}>Ara</Button>
      </div>

      <div className="card__side">
        <Card item={data} />
      </div>
      {/* <TimelineContainer data={data} /> */}
    </div>
  );
}

export default Home;
