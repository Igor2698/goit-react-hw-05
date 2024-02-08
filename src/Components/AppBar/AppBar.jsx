import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";
import clsx from "clsx";

export const AppBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.headerLink, isActive && css.active);
  };

  return (
    <header className={css.header}>
      <nav className={css.headerNav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
