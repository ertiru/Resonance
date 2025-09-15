import headphones from "../../assets/headphones.png";

const Banner = () => {
  return (
    <div className="banneri">
      <div className="container">
        <div className="texti">
          <h1 className="t1">Resonance</h1>

          <h1 className="t2">Aura Pro II</h1>
        </div>

        <img src={headphones} alt="headphones image" />
      </div>
    </div>
  );
};

export default Banner;
