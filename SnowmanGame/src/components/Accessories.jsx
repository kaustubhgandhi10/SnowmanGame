import React, { useEffect, useState } from "react";
import "../accessories.css";

import boot1 from "../assets/images/boots - 1.png";
import boot2 from "../assets/images/boots - 2.png";
import goggles1 from "../assets/images/Goggles-1.png";
import goggles2 from "../assets/images/Goggles-2.png";
import muffler1 from "../assets/images/muffler-1.png";
import muffler2 from "../assets/images/muffler-2.png";

const accessories = [
  { id: "goggle1", imgSrc: goggles1 },
  { id: "goggle2", imgSrc: goggles2 },
  { id: "boot1", imgSrc: boot1 },
  { id: "boot2", imgSrc: boot2 },
  { id: "muffler1", imgSrc: muffler1 },
  { id: "muffler2", imgSrc: muffler2 },
];

export const Accessories = () => {
  const [placed, setPlaced] = useState({});

  const handleClick = (id) => {
    setPlaced((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    console.log(placed);
  }, [placed]);

  return (
    <div className="snowman-accessories">
      {accessories.map(({ id, imgSrc }) => (
        <img
          key={id}
          id={id}
          src={imgSrc}
          className={`accessory ${placed[id] ? "placed" : ""}`}
          onClick={() => handleClick(id)}
        ></img>
      ))}
    </div>
  );
};
