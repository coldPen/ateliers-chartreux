import React from "react"
import { Link } from "gatsby"

import {
  header,
  header__menu,
  header__list,
  header__element,
  header__element_left,
  header__element_right,
  header__element_center,
  header__link,
  header__logo,
} from "./Header.module.scss"

export default () => (
  <header className={header}>
    <nav className={header__menu}>
      <ul className={header__list}>
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
