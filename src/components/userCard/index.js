import React from "react";

import "./userCard.css";

import BusinessIcon from "@material-ui/icons/Business";

const UserCard = ({ user, ...restProps }) => {
  return (
    <div className="container">
      <div className="left">
        <img className="avatar" src={user.avatar_url} alt="avatar" />
      </div>

      <div className="right">
        <div className="right__header">
          <h3 className="right__header__name">{user.name}</h3>
          <h3 className="right__header__username">@{user.login}</h3>
        </div>

        <div className="company">
          {user.company && <BusinessIcon></BusinessIcon>}
          <p>{user.company}</p>
        </div>

        <div className="footer">
          <p className="footer__type">{user.type}</p>
          {/* <p className="footer__followers">{user.followers}</p>
          <p className="footer__following">{user.following}</p> */}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
