import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            A creative and vibrant software developer is here; converting real
            life into computer systems with the skills learned and creative
            thoughts gifted by GOD. Excellency in taking on new challenges as
            professional work to do trendy things. Currently intensifying
            experience in the field of mobile development. Have aspirations in
            data science in Mobile Apps.
          </p>
          <p className="py-2 text-gray-600">
            I started software developments in 2016 as freelancer. I have
            developed many desktop application such as school management system,
            Inventory management system etc. I also work as native android
            developer as a freelancer and developed apps such as eat at home,
            Quiz based app etc.
          </p>
          <p className="py-2 text-gray-600">
            After that in 2018 started web development using react. Than i
            learned react native as mobile app development tools. currently i am
            working as mob and web app developer.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-[#7209b7] font-extrabold  underline cursor-pointer">
              My latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
