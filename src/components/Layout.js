import React from "react"

import Header from "./Header"
import Footer from "./Footer"

import { container, container__content } from "./Layout.module.scss"

export default ({ children }) => (
  <div className={container}>
    <Header />
    <main className={container__content}>{children}</main>
    <Footer />
  </div>
)
