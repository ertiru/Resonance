import { useState } from "react";
import greenset from "../../assets/greenset.png";
import redset from "../../assets/redset.png";
import yellowset from "../../assets/yellowset.png";

const Choose = () => {
  const [Selected, setSelected] = useState("#94915B");
  const [imgSrc, setimgSrc] = useState(greenset);
  function ndrysho(item) {
    setSelected(item.color);
    setimgSrc(item.image);
  }
  const circles = [
    { color: "#D8B74B", image: yellowset },
    { color: "#94915B", image: greenset },
    { color: "#883D39", image: redset },
  ];

  return (
    <div className="choose">
      <div className="container">
        <h1>Color</h1>

        <div className="seti">
          <img id="set" src={imgSrc} width="420px" height="420px" />
          <div className="ngjyra">
            {circles.map((item, index) => (
              <button
                key={index}
                onClick={() => ndrysho(item)}
                style={{
                  backgroundColor: item.color,
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border:
                    Selected === item.color ? "2px solid #52483E " : "none",
                  borderImage: "none",
                }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
