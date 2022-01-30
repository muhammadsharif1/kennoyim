import React, { useState } from "react";
import "./Main.css";
import { BiArrowBack } from "react-icons/bi";
import { CgCalendarDates, CgMoreAlt } from "react-icons/cg";
import Tweet from "../Tweets/Tweet";

const Main = () => {
  const [follow, setFollow] = useState(true);

  const FollowHandler = () => {
    if (follow === true) {
      setFollow(false);
    } else if (follow === false) {
      setFollow(true);
    }
  };

  return (
    <div id="Main">
      <div id="back-box-icon">
        <div id="box-user-name-back">
          <BiArrowBack id="back" />
          <div>
            <h1 id="matin">Bobur</h1>
            <p id="Tweets">1,070 Tweets</p>
          </div>
        </div>
      </div>
      <div id="header">
        <div id="user-img-box">
          <img
            id="user-img-g"
            src="https://avatars.githubusercontent.com/u/79017406?v=4"
            alt="avatar"
          />
        </div>
      </div>

      <div id="follow-box">
        <CgMoreAlt id="more" />
        <input
          type="button"
          value={follow ? "Follow" : "Following"}
          onClick={FollowHandler}
          className={follow === false ? "Following" : "Follow"}
        />
      </div>

      <div id="user-box">
        <h1 id="name-user">bobur</h1>
        <p id="user-name-e">@bobur_mavlonov</p>
        <p>UX&UI desogner at @abutechuz</p>
        <div id="dateBox">
          <CgCalendarDates />
          <p id="date">Joined May 2020</p>
        </div>
        <div id="following-followers">
          <span id="bold">67</span>
          <p id="following">Following</p>
          <span id="bold">{follow === false ? 6 : 47}</span>
          <p id="followers">Followers</p>
        </div>
      </div>

      <div id="TweetsBox">
        <div id="boxs">
          <button id="tweets">Tweets</button>
          <div id="blue"></div>
        </div>
        <button id="btn">Tweets & replies</button>
        <button id="btn">Media</button>
        <button id="btn">Likes</button>
      </div>

      <Tweet comment="10" like="8" tweet="" />
      <Tweet comment="0" like="9" tweet="" />
    </div>
  );
};

export default Main;
