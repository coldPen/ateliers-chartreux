import React, { useState } from "react"
import { Link } from "gatsby"

import {
  header,
  header__nav,
  header__menuButton,
  header__list,
  header__list_expanded,
  header__element,
  header__element_left,
  header__element_right,
  header__element_center,
  header__link,
  header__logo,
} from "./Header.module.scss"

export default () => {
  const [isMenuExpanded, toggleExpand] = useState(false)

  return (
    <header className={header}>
      <nav className={header__nav}>
        <button
          aria-expanded={isMenuExpanded}
          aria-controls="menu"
          className={header__menuButton}
          onClick={() => toggleExpand(!isMenuExpanded)}
        >
          Menu
        </button>
        <ul
          className={`${header__list}${
            isMenuExpanded ? ` ${header__list_expanded}` : ``
          }`}
          id="menu"
        >
          <li className={`${header__element} ${header__element_center}`}>
            <Link to="/" className={header__logo}>
              <img
                src="https://via.placeholder.com/200x60"
                alt="Ateliers Chartreux"
              />
            </Link>
          </li>
          <li className={`${header__element} ${header__element_left}`}>
            <Link to="/impression/" className={header__link}>
              Impression 2D/3D
            </Link>
          </li>
          <li className={`${header__element} ${header__element_left}`}>
            <Link to="/informatique/" className={header__link}>
              Informatique
            </Link>
          </li>
          <li className={`${header__element} ${header__element_right}`}>
            <Link to="/audiovisuel/" className={header__link}>
              Audiovisuel
            </Link>
          </li>
          <li className={`${header__element} ${header__element_right}`}>
            <Link to="/reparation/" className={header__link}>
              Réparation
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
