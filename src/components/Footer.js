import React from "react"

import { Link } from "gatsby"

import {
  footer,
  footer__navigation,
  footer__logo,
  footer__link,
} from "./Footer.module.scss"

export default () => (
  <footer className={footer}>
    <nav className={footer__navigation}>
      <Link to="/" className={footer__logo}>
        Ateliers Chartreux
      </Link>
      <Link to="/infos-pratiques/" className={footer__link}>
        Infos pratiques
      </Link>
      <Link to="/mentions-legales/" className={footer__link}>
        Mentions légales
      </Link>
    </nav>
  </footer>
)
