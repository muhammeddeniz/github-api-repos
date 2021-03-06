import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import { TimelineContainer } from "../../container";

const Detail = () => {
  const [data, setData] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.github.com/orgs/${id}/repos`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <div>
      <Link to="/"></Link>
      {data.length !== 0 && <TimelineContainer data={data} />}
    </div>
  );
};

export default Detail;
