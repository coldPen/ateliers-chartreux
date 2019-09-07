import React from "react"
import { Link } from "gatsby"
import HeaderStyles from "./Header.module.scss"

const Header = () => (
  <header className={HeaderStyles.header}>
    <nav className={HeaderStyles.header__menu}>
      <Link to="/impression/" className={HeaderStyles.header__link}>
        Impression 2D/3D
      </Link>
      <Link to="/informatique/" className={HeaderStyles.header__link}>
        Informatique
      </Link>
      <Link to="/" className={HeaderStyles.header__logo}>
        Ateliers Chartreux
      </Link>
      <Link to="/audiovisuel/" className={HeaderStyles.header__link}>
        Audiovisuel
      </Link>
      <Link to="/reparation/" className={HeaderStyles.header__link}>
        Réparation
      </Link>
    </nav>
  </header>
)

export default Header
