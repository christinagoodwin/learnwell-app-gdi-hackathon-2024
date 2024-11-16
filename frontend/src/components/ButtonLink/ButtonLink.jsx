import { Link } from "react-router-dom";
import "./ButtonLink.css";

function ButtonLink({ to, children }) {
  return (
    <Link to={to}>
      <button className="btn">{children}</button>
    </Link>
  );
}

export default ButtonLink;
