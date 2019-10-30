import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  form,
  form__title,
  form__container,
  form__metadataCol,
  form__messageCol,
  form__recipientGroup,
  form__nameGroup,
  form__emailGroup,
  form__label,
  form__input,
  form__select,
  form__textarea,
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
        <h2 className={form__title}>Nous contacter</h2>

        <div className={form__metadataCol}>
          <div className={form__recipientGroup}>
            <label className={form__label} htmlFor="recipient-select">
              Destinataire du message
            </label>
            <select
              className={form__select}
              value={recipient}
              onChange={setRecipientState}
              name="destinataires"
              id="recipient-select"
            >
              {data.allContentfulDestinataires.edges.map((edge, i) => (
                <option value={edge.node.slug} key={i}>
                  {edge.node.nom}
                </option>
              ))}
            </select>
          </div>

          <div className={form__nameGroup}>
            <label className={form__label} htmlFor="name">
              Votre nom
            </label>
            <input
              className={form__input}
              type="text"
              name="name"
              id="name"
              required
            />
          </div>

          <div className={form__emailGroup}>
            <label className={form__label} htmlFor="email">
              Votre email
            </label>
            <input
              className={form__input}
              type="email"
              name="_replyto"
              id="email"
              required
            />
          </div>
        </div>

        <div className={form__messageCol}>
          <label className={form__label} htmlFor="message">
            Message
          </label>
          <textarea
            className={form__textarea}
            name="message"
            id="message"
            required
          />

          <input className={form__submit} type="submit" value="Envoyer" />
        </div>

        <input type="text" name="_gotcha" style={{ display: "none" }} />
      </form>
    </section>
  )
}
