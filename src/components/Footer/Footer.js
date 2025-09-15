import Tekst from "../Teksti/Tekst";
import logo from "../../assets/Logo.png";
import DiscordLogo from "../../assets/DiscordLogo.png";
import XLogo from "../../assets/XLogo.png";
import MetaLogo from "../../assets/MetaLogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Tekst
          heading2="Sound.Presence.Purpose."
          spec2="Focused on crafting immersive audio experiences."
          spec3="We believe sound should not just be heard—it should move you."
        />
        <div className="row1">
          <button className="type">Aura Pro II</button>
          <button className="type">Flow II</button>
        </div>

        <div className="line"></div>
        <div className="foot">
          <a>
            <img className="logo2" src={logo} alt="logo" />
          </a>

          <div className="foot-right">
            <p>© 2025 Resonance. All rights reserved.</p>
            <div>
              <a>
                <img src={DiscordLogo} alt="Discord Logo" />
              </a>
              <a>
                <img src={XLogo} alt="X Logo" />
              </a>
              <a>
                <img src={MetaLogo} alt="Meta Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
