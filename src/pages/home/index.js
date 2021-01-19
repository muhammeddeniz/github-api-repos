import React, { useState } from "react";
import axios from "axios";
import GitHubIcon from "@material-ui/icons/GitHub";

import { Card, Input, Button, Switch, AlertBox } from "../../components";

import "./home.css";

function Home() {
  const [data, setData] = useState();
  const [isUser, setIsUser] = useState(false);
  const [val, setVal] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const getData = async (name) => {
    const url = isUser
      ? `https://api.github.com/users/${name}`
      : `https://api.github.com/orgs/${name}`;

    await axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

    setIsSearching(true);
  };

  return (
    <div>
      <a
        className="gitLink"
        href="https://github.com/muhammeddeniz/github-api-repos"
      >
        <p className="gitLink__text">Source Code</p>
        <GitHubIcon className="gitLink__icon"></GitHubIcon>
      </a>

      <div className="home__search">
        <Input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getData(val);
            }
          }}
        />

        <span className="home__search__space"></span>

        <Switch isUser={isUser} setIsUser={setIsUser} />

        <span className="home__search__space"></span>

        <Button onClick={() => getData(val)}>Ara</Button>
      </div>

      {data ? (
        <div className="card__side">
          <Card item={data} />
        </div>
      ) : isSearching ? (
        <AlertBox />
      ) : null}
    </div>
  );
}

export default Home;
