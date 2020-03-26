import React from "react";
import { Link } from "react-router-dom";
import FocusTrap from "focus-trap-react";

export default function Sidebar({ sidebarIsOpen, onClickMask, onClickLink }) {
  let className = "Sidebar";

  if (!sidebarIsOpen) {
    className += " Sidebar--closed";
  }

  return (
    <FocusTrap active={sidebarIsOpen} paused={!sidebarIsOpen}>
      <div>
        {sidebarIsOpen && (
          <label onClick={onClickMask} className="Sidebar__mask">
            <button
              aria-label="Close menu"
              className="Sidebar__mask-button"
            ></button>
          </label>
        )}
        <aside className={className}>
          <h1>Menu</h1>
          <ul className="Sidebar__menu">
            <li className="Sidebar__menu-item">
              <Link
                to={"/QuizPage"}
                className="Sidebar__menu-link"
                onClick={onClickLink}
              >
                Start quiz
              </Link>
            </li>
            <li className="Sidebar__menu-item">
              <Link
                to={"/Stats"}
                className="Sidebar__menu-link"
                onClick={onClickLink}
              >
                Stats
              </Link>
            </li>
            <li className="Sidebar__menu-item">
              <Link
                to={"/About"}
                className="Sidebar__menu-link"
                onClick={onClickLink}
              >
                About
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </FocusTrap>
  );
}