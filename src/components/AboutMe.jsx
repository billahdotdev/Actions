import ProfilePhoto from "./ProfilePhoto";
import React from "react";
import "../styles/AboutMe.css";
import SocialMedia from "./SocialMedia";
import MyStory from "./MyStory";
import MoreAboutMe from "./MoreAboutMe";
import Asked from "./Asked";


const AboutMe = () => {
  return (
    <div className="AboutMe">
      <ProfilePhoto />
      <SocialMedia />
      <MyStory />
      <MoreAboutMe />
      <Asked />

    </div>
  );
};

export default AboutMe;