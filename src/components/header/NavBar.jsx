import styled from "./NavBar.module.css";
import { Link } from "react-router-dom";

export function NavBar(props) {
  return (
    <div className={styled.navBar}>
      <div className="container">
        <ul className={styled.container}>
          <li className={styled.items}>
            <Link to="/about">درباره</Link>
          </li>
          <li className={styled.items}>
            <Link to="/create-article">مقاله جدید</Link>
          </li>
          <li className={styled.items}>
            <Link to="/">مقالات</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
