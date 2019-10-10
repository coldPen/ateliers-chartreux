import React from "react"
import { Link } from "gatsby"

import {
  header,
  header__menu,
  header__link,
  header__logo,
} from "./Header.module.scss"

export default () => (
  <header className={header}>
    <nav className={header__menu}>
      <Link to="/impression/" className={header__link}>
        Impression 2D/3D
      </Link>
      <Link to="/informatique/" className={header__link}>
        Informatique
      </Link>
      <Link to="/" className={header__logo}>
        <img src="https://via.placeholder.com/200x60" alt="Ateliers Chartreux" />
      </Link>
      <Link to="/audiovisuel/" className={header__link}>
        Audiovisuel
      </Link>
      <Link to="/reparation/" className={header__link}>
        Réparation
      </Link>
    </nav>
  </header>
)
