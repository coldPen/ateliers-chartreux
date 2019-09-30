import React from "react"
import { Link } from "gatsby"

import {
  pagination,
  pagination__button,
  pagination__button_prev,
  pagination__button_next,
  pagination__text,
} from "./BlogListPagination.module.scss"

export default ({ pageContext }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? `/` : `/blog/${(currentPage - 1).toString()}`
  const nextPage = `/blog/${(currentPage + 1).toString()}`
  return (
    <nav className={pagination}>
      {!isFirst && (
        <Link
          to={prevPage}
          rel="prev"
          className={`${pagination__button} ${pagination__button_prev}`}
        >
          <span className={pagination__text}>← Précédent</span>
        </Link>
      )}

      {!isLast && (
        <Link
          to={nextPage}
          rel="next"
          className={`${pagination__button} ${pagination__button_next}`}
        >
          <span className={pagination__text}>Suivant →</span>
        </Link>
      )}
    </nav>
  )
}
