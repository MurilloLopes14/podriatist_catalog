import "./index.css";
import { NavBar } from "./components/navBar/navBar";
import { Outlet } from "react-router-dom";
import Instagram from "./assets/instagram.svg";
import Whatsapp from "./assets/whatsapp.svg";
import Pin from "./assets/pin.svg";
import Phone from "./assets/phone.gif";

function App() {
  const navLinks = [
    {
      label: Instagram,
      url: "https://www.instagram.com/aparecidamartinsnails?igsh=dGVncnA0ZGhibWR1",
      alt: "Instagram",
    },
    { label: Whatsapp, url: "https://wa.link/acl8jf", alt: "Whatsapp" },
    {
      label: Pin,
      url: "https://www.google.com/maps/place/Aparecida+Martins+Nails+%26+Beauty/@-23.6286812,-46.9579745,17z/data=!4m15!1m8!3m7!1s0x94cfa82496ea8e1d:0x74f516eaf91270d1!2sEstr.+Morro+Grande,+3502+-+Jardim+Isis,+Cotia+-+SP,+06719-500!3b1!8m2!3d-23.6286812!4d-46.9553996!16s%2Fg%2F11s9wc86fc!3m5!1s0x94cfa96eb79d83d5:0x7d163b4d89facc0b!8m2!3d-23.6286812!4d-46.9553996!16s%2Fg%2F11y3bxfsm0?entry=ttu",
      alt: "Onde estou",
    },
    {
      label: Phone,
      url: "tel:+55 11 96325-5220",
      alt: "Contate-me por telefone",
    },
  ];
  return (
    <>
      <NavBar title="Meu lado profissional" navLinks={navLinks} />
      <Outlet />
    </>
  );
}

export default App;
