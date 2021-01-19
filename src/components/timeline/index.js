import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

import StarIcon from "@material-ui/icons/Star";
import CallSplitIcon from "@material-ui/icons/CallSplit";
import CodeIcon from "@material-ui/icons/Code";

import "react-vertical-timeline-component/style.min.css";

import "./timeline.css";

const Timeline = ({ item }) => {
  return (
    <VerticalTimelineElement
      key={item.id}
      className="vertical-timeline-element--work"
      date={item.created_at}
      contentArrowStyle={{
        borderRight: item.fork
          ? "7px solid rgb(233, 30, 99)"
          : "7px solid rgb(33, 150, 243)",
      }}
      contentStyle={{
        background: item.fork ? "rgb(233, 30, 99)" : "rgb(33, 150, 243)",
        color: "#fff",
      }}
      iconStyle={{
        background: item.fork ? "rgb(233, 30, 99)" : "rgb(33, 150, 243)",
        color: "#111",
      }}
      icon={
        item.fork ? (
          <CallSplitIcon fontSize="large" style={{ color: "#fff" }} />
        ) : (
          <CodeIcon fontSize="small" style={{ color: "#fff" }} />
        )
      }
    >
      <a className="timeline__title" href={item.html_url}>
        {item.name}
      </a>
      <h4>{item.language}</h4>
      <p>{item.description}</p>

      <div className="timeline__body">
        <div className="timeline__body__counts">
          <StarIcon />
          <span className="timeline__span">{item.stargazers_count}</span>
        </div>
        <div className="timeline__body__counts2">
          <CallSplitIcon />
          <span className="timeline__span">{item.forks_count}</span>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default Timeline;
