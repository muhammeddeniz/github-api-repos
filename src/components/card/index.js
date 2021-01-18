import React from "react";
import LinkRoundedIcon from "@material-ui/icons/LinkRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";

import "./card.css";

const Card = ({ item, isUser }) => {
  return item ? (
    <div className="card">
      <div className="left">
        <img className="left_img" src={item.avatar_url}></img>
      </div>

      <div className="right">
        <div className="right__header">
          <Link
            className="right__header__title"
            to={
              item.type == "User"
                ? `/users/${item.login}`
                : `/orgs/${item.login}`
            }
          >
            {item.name}
          </Link>
          <p className="right__header__nick">@{item.login}</p>
        </div>

        <div className="right__body">
          <div className="right__body__location">
            <LocationOnRoundedIcon
              style={{ marginRight: 8 }}
            ></LocationOnRoundedIcon>
            <p className="right__body__location__text">{item.location}</p>
          </div>

          <div className="right__body__blog">
            <LinkRoundedIcon style={{ marginRight: 8 }}></LinkRoundedIcon>
            <a
              className="right__body__blog__text"
              href={item.blog}
              target="_blank"
            >
              {item.blog}
            </a>
          </div>

          <div className="right__body__email">
            <MailIcon style={{ marginRight: 8 }}></MailIcon>
            <p className="right__body__email__text">{item.email}</p>
          </div>
        </div>

        <div className="right__footer">
          <p className="right__body__type">{item.type}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Card;
