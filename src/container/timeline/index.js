import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import GitHubIcon from "@material-ui/icons/GitHub";

import { Timeline } from "../../components";

import "./timeline.css";

export const TimelineContainer = ({ data }) => {
  return (
    <VerticalTimeline>
      <div style={{ display: "flex" }}>
        <GitHubIcon fontSize="large"></GitHubIcon>
        <div style={{ marginLeft: 14 }}>
          <a className="link" href={data[0]?.owner?.html_url} target="_blank">
            {data[0]?.owner?.login}
          </a>
        </div>
      </div>

      {data.map((item) => (
        <Timeline item={item} />
      ))}
    </VerticalTimeline>
  );
};

export default TimelineContainer;
