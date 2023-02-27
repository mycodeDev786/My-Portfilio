import Image from "next/image";
import React from "react";

function Card({ title, image, onPress }) {
  return (
    <div className="bg-[#fffff]">
      <div>
        <Image width={400} height={200} src={image} />
      </div>
      <div>{title}</div>
    </div>
  );
}

export default Card;
