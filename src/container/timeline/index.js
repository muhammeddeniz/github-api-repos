import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";

import { Timeline } from "../../components";

import "./timeline.css";

export const TimelineContainer = ({ data }) => {
  return (
    <>
      <div className="timeline__container">
        <div className="timeline__container__header">
          <div className="timeline__container__header__left">
            <GitHubIcon fontSize="large"></GitHubIcon>

            <a
              className="timeline__container__header__link"
              href={data[0]?.owner?.html_url}
              target="_blank"
            >
              {data[0]?.owner?.login}
            </a>
          </div>

          <Link to="/" className="timeline__container__header__link">
            Ana Sayfa
          </Link>
        </div>
      </div>

      <VerticalTimeline>
        {data.map((item) => (
          <Timeline item={item} />
        ))}
      </VerticalTimeline>
    </>
  );
};

export default TimelineContainer;
