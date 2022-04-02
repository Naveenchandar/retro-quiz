import { Link } from "react-router-dom";
import "./index.css";

export function NavBar() {
  return (
    <nav className="navbar space-between">
      <span className="left space-between">
        <h3 className="third-heading logo">
          <Link to="/">Retro-Quiz</Link>
        </h3>
      </span>
    </nav>
  );
}