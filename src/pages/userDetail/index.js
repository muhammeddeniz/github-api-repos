import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { TimelineContainer } from "../../container";

const Detail = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  let { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.github.com/users/${id}/repos`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));

      axios
        .get(`https://api.github.com/users/${id}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <div>
      {data.length !== 0 && <TimelineContainer data={data} user={user} />}
    </div>
  );
};

export default Detail;
