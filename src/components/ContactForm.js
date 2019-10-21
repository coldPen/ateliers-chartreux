import React from "react"

import {
  form,
  form__container,
  form__input,
  form__message,
  form__submit,
} from "./ContactForm.module.scss"

export default () => (
  <section className={form}>
    <form
      className={form__container}
      method="post"
      action="https://formspree.io/xjnqdjax"
    >
      <div className={form__input}>
        <label htmlFor="name">Prénom & nom</label>
        <input type="text" name="name" id="name" required />
      </div>

      <div className={form__input}>
        <label htmlFor="email">Email</label>
        <input type="email" name="_replyto" id="email" required />
      </div>

      <div className={form__message}>
        <label htmlFor="message">Message</label>
        <textarea rows="5" name="message" id="message" required />
      </div>

      <input type="text" name="_gotcha" style={{ display: "none" }} />

      <input className={form__submit} type="submit" value="Envoyer" />
    </form>
  </section>
)
