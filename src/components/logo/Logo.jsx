import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.svg";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
