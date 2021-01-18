import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import StarIcon from "@material-ui/icons/Star";
import CallSplitIcon from "@material-ui/icons/CallSplit";
import CodeIcon from "@material-ui/icons/Code";

import "react-vertical-timeline-component/style.min.css";

const Timeline = ({ data }) => {
  return (
    <VerticalTimeline>
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<></>}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement> */}

      {data.map((item, key) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={item.created_at}
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
          <a
            href={item.html_url}
            style={{ textDecoration: "none", color: "black", fontSize: 20 }}
          >
            {item.name}
          </a>
          <h4>{item.language}</h4>
          <p>{item.description}</p>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginTop: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <StarIcon />
              <span style={{ fontSize: 18, marginLeft: 5 }}>
                {item.stargazers_count}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: 20,
              }}
            >
              <CallSplitIcon />
              <span style={{ fontSize: 18, marginLeft: 5 }}>
                {item.forks_count}
              </span>
            </div>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
