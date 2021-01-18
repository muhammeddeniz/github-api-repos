import React from "react";

import { Timeline } from "../components";

export const TimelineContainer = ({ data }) => {
  return;
  data.map((item) => <Timeline item={item} />);
};

export default TimelineContainer;
