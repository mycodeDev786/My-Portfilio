import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "../components/ProjectItem";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
const WebApps = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="py-10">Mobile Apps </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
          />
        </div>
        <Link href="/#projects">
          <p className="underline font-extrabold text-[#bc4749] cursor-pointer py-5">
            Back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default WebApps;
