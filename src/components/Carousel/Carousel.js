import React, { useState } from "react";
import { motion } from "framer-motion";
import yellowset from "../../assets/yellowset.png";
import greenset from "../../assets/greenset.png";
import redset from "../../assets/redset.png";

const Carousel = () => {
  const [selected, setSelected] = useState(1);

  const options = [
    { color: "#D8B74B", image: yellowset },
    { color: "#94915B", image: greenset },
    { color: "#883D39", image: redset },
  ];

  return (
    <div className="carousel">
      <div className="images">
        {options.map((opt, index) => {
          const isSelected = index === selected;
          return (
            <motion.img
              key={index}
              src={opt.image}
              alt={`headphone-${index}`}
              className="headphone"
              initial={false}
              animate={{
                x: (index - selected) * 550,
                scale: isSelected ? 1 : 0.8,
                opacity: isSelected ? 1 : 0.3,
                filter: isSelected ? "blur(0px)" : "blur(6px)",
                zIndex: isSelected ? 10 : 1,
                width: isSelected ? 500 : 400,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onClick={() => setSelected(index)}
            />
          );
        })}
      </div>
      <div className="buttons">
        {options.map((opt, index) => (
          <button
            key={index}
            className={`dot ${selected === index ? "selected" : ""}`}
            style={{ backgroundColor: opt.color }}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>
      <p className="color">Choose the color that you prefer</p>
    </div>
  );
};

export default Carousel;
