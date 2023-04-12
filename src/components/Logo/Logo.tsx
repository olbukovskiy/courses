import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";

const Logo = () => {
  return (
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <FaReact size={56} color="#2196f3" />
    </Link>
  );
};

export default Logo;
