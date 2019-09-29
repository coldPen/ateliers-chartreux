import React from "react"
import { Link } from "gatsby"

import {
  pagination,
  pagination__button,
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
        <Link to={prevPage} rel="prev" className={pagination__button}>
          <span className={pagination__text}>← Précédent</span>
        </Link>
      )}

      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`/${i === 0 ? "" : `blog/${i + 1}`}`}
          className={pagination__button}
        >
          <span className={pagination__text}>{i + 1}</span>
        </Link>
      ))}

      {!isLast && (
        <Link to={nextPage} rel="next" className={pagination__button}>
          <span className={pagination__text}>Suivant →</span>
        </Link>
      )}
    </nav>
  )
}
