import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  form,
  form__title,
  form__title_1,
  form__title_2,
  form__container,
  form__section,
  form__selectGroup,
  form__inputGroup,
  form__label,
  form__messageGroup,
  form__submit,
} from "./ContactForm.module.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDestinataires {
        edges {
          node {
            nom
            slug
            urlFormspree
          }
        }
      }
    }
  `)

  const [recipient, setRecipient] = useState(
    data.allContentfulDestinataires.edges[0].node.slug
  )
  const [formAction, setFormAction] = useState(
    data.allContentfulDestinataires.edges[0].node.urlFormspree
  )

  const setRecipientState = event => {
    const newRecipient = event.target.value
    setRecipient(newRecipient)

    const newFormAction = data.allContentfulDestinataires.edges.find(
      edge => edge.node.slug === newRecipient
    ).node.urlFormspree
    setFormAction(newFormAction)
  }

  return (
    <section className={form}>
      <form className={form__container} method="post" action={formAction}>
        <h2 className={`${form__title} ${form__title_1}`}>Nous contacter</h2>

        <section className={form__section}>
          <div className={form__selectGroup}>
            <label className={form__label} htmlFor="dest-select">
              Destinataire
            </label>
            <select
              value={recipient}
              onChange={setRecipientState}
              name="destinataires"
              id="dest-select"
            >
              {data.allContentfulDestinataires.edges.map((edge, i) => (
                <option value={edge.node.slug} key={i}>
                  {edge.node.nom}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section className={form__section}>
          <div className={form__inputGroup}>
            <label className={form__label} htmlFor="name">
              Prénom & nom
            </label>
            <input type="text" name="name" id="name" required />
          </div>

          <div className={form__inputGroup}>
            <label className={form__label} htmlFor="email">
              Email
            </label>
            <input type="email" name="_replyto" id="email" required />
          </div>
        </section>

        <section className={form__section}>
          <div className={form__messageGroup}>
            <label className={form__label} htmlFor="message">
              Message
            </label>
            <textarea rows="5" name="message" id="message" required />
          </div>
        </section>

        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <input className={form__submit} type="submit" value="Envoyer" />
      </form>
    </section>
  )
}
