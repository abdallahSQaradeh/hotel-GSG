import "./index.css";
import Logo from "../../assets/logo/logo.png";
import NavItems from "../nav-items/index";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <NavItems />
    </div>
  );
}
