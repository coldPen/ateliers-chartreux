import React from "react"

import Header from "./Header"
import Footer from "./Footer"

import { layout, layout__content } from "./Layout.module.scss"

export default ({ children }) => (
  <div className={layout}>
    <Header />
    <main className={layout__content}>{children}</main>
    <Footer />
  </div>
)
