import React from "react"
import { Link } from "gatsby"

import logo from "../../static/images/ateliers-chartreux.svg"

import {
  footer,
  footer__navigation,
  footer__logo,
  footer__link,
  footer__link_1,
  footer__link_2,
} from "./Footer.module.scss"

export default () => (
  <footer className={footer}>
    <nav className={footer__navigation}>
      <Link to="/" className={footer__logo}>
        <img src={logo} alt="Ateliers Chartreux" />
      </Link>
      <Link to="/contact/" className={`${footer__link} ${footer__link_1}`}>
        Contact | Infos pratiques
      </Link>
      <Link
        to="/mentions-legales/"
        className={`${footer__link} ${footer__link_2}`}
      >
        Mentions légales
      </Link>
    </nav>
  </footer>
)
