import headphones from "../../assets/greenset.png";
import Chip from "../../assets/Chip.png";
import noise from "../../assets/Noise.png";
import sound from "../../assets/UserSound.png";
import equalizer from "../../assets/Equalizer.png";
import minus from "../../assets/Minus.png";
import battery from "../../assets/Battery.png";
import microphone from "../../assets/Microphone.png";
import flow from "../../assets/flow.png";
import ear from "../../assets/Ear.png";
import handtap from "../../assets/HandTap.png";
import drop from "../../assets/Drop.png";

const ProductData = [
  {
    product: "Aura Pro II",
    img: headphones,
    price: "Starting at $320",
  },
];
const Product2 = [
  {
    product: "Flow II",
    img: flow,
    price: "Starting at $180",
  },
];
const specs = [
  {
    name: Chip,
    desc: "R1 Chip",
  },
  {
    name: noise,
    desc: "2x more Active Noise Cancellation",
  },
  {
    name: sound,
    desc: "Personalized Spatial Audio",
  },
  {
    name: equalizer,
    desc: "Lossless Audio",
  },
  {
    name: minus,
    desc: "None",
  },
  {
    name: minus,
    desc: "None",
  },
  {
    name: battery,
    desc: "Up to 17 hours of listening",
  },
  {
    name: minus,
    desc: "None",
  },
  {
    name: microphone,
    desc: "5 dynamic microphones total ",
  },
];
const specs2 = [
  {
    name: Chip,
    desc: "R2 Chip",
  },
  {
    name: noise,
    desc: "Active Noise Cancellation",
  },
  {
    name: sound,
    desc: "Personalized Spatial Audio",
  },
  {
    name: minus,
    desc: "None",
  },
  {
    name: ear,
    desc: "Hearing Test and Hearing Protection",
  },
  {
    name: handtap,
    desc: "Touch sensor",
  },
  {
    name: battery,
    desc: "Up to 6 hours of listening",
  },
  {
    name: drop,
    desc: "Water Resistant",
  },
  {
    name: microphone,
    desc: "Dual microphones",
  },
];
export { ProductData, specs, Product2, specs2 };
