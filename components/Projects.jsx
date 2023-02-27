import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobImg from "../public/assets/projects/mob.png";
import WebImg from "../public/assets/projects/web.png";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest font-bold  uppercase  text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Developed</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Mobile Applications"
            backgroundImg={MobImg}
            projectUrl="/mobileApps"
            tech="Mobile Apps build based on react native"
          />
          <ProjectItem
            title="Web Applications"
            backgroundImg={WebImg}
            projectUrl="/webApps"
            tech=" Web Apps based on React JS and Next js"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
