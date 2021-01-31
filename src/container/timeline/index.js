import React, { useEffect, useState } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from "@chakra-ui/react";

import { Timeline, UserCard } from "../../components";

import "./timeline.css";

export const TimelineContainer = ({ data, user }) => {
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
              rel="noreferrer"
            >
              {data[0]?.owner?.login}
            </a>
          </div>

          <Link to="/" className="timeline__container__header__link">
            Ana Sayfa
          </Link>
        </div>
      </div>

      <Center>
        <Tabs>
          <TabList mb="40px" width="fit-content">
            <Tab outline="none">Timeline</Tab>
            <Tab>Profile</Tab>
          </TabList>

          <TabPanels
            style={{
              width: "100vw",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: 1200,
              outline: "none",
            }}
          >
            <TabPanel>
              <VerticalTimeline>
                {data.map((item, key) => (
                  <Timeline item={item} key={key} />
                ))}
              </VerticalTimeline>
            </TabPanel>
            <TabPanel>
              <UserCard user={user}></UserCard>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </>
  );
};

export default TimelineContainer;
