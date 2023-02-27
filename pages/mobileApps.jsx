import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "../components/ProjectItem";
import PickGo from "../public/assets/projects/mobileApps/pickGo.png";
import NakedClay from "../public/assets/projects/mobileApps/nakedClay.png";
import NFLI from "../public/assets/projects/mobileApps/NFLI.png";
import OStock from "../public/assets/projects/mobileApps/OStock.png";
import History from "../public/assets/projects/mobileApps/History.png";
import twitchImg from "../public/assets/projects/twitch.jpg";

const MobileApps = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="py-10">Mobile Apps </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Naked Clay App"
            backgroundImg={NakedClay}
            projectUrl="/netflix"
            tech="React Native"
          />
          <ProjectItem
            title=" NFLI Market Place "
            backgroundImg={NFLI}
            projectUrl="/twitch"
            tech="React Native"
          />
          <ProjectItem
            title="Pick Go"
            backgroundImg={PickGo}
            projectUrl="/twitch"
            tech="React Native"
          />
          <ProjectItem
            title="OWARE Stock"
            backgroundImg={OStock}
            projectUrl="/twitch"
            tech="React Native"
          />

          <ProjectItem
            title="CS MCQS App"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="React Native"
          />
          <ProjectItem
            title="History Taking"
            backgroundImg={History}
            projectUrl="/twitch"
            tech="React Native"
          />
          <ProjectItem
            title="Eat At Home"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Native Java Android App"
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

export default MobileApps;
