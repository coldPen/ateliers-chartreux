import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContactForm from "../components/ContactForm"

import "../reset.scss"

import {
  contact,
  contact__title,
  contact__transports,
  contact__data,
  contact__address,
  contact__phone,
} from "./contact.module.scss"

export default () => (
  <Layout>
    <SEO />
    <section className={contact}>
      <h2 className={contact__title}>Ateliers Chartreux</h2>

      <p className={contact__transports}>
        À proximité de la station de métro Chartreux
      </p>

      <div className={contact__data}>
        <p className={contact__address}>
          <a href="https://wego.here.com/directions/mix//4-Boulevard-Henri-Boulle,-13004-Marseille,-France:loc-dmVyc2lvbj0xO3RpdGxlPTQrQm91bGV2YXJkK0hlbnJpK0JvdWxsZTtsYW5nPWZyO2xhdD00My4zMDk2MDg0NTk0NzI2NTY7bG9uPTUuNDA0NzI5ODQzMTM5NjQ4O3N0cmVldD1Cb3VsZXZhcmQrSGVucmkrQm91bGxlO2hvdXNlPTQ7Y2l0eT1NYXJzZWlsbGU7cG9zdGFsQ29kZT0xMzAwNDtjb3VudHJ5PUZSQTtkaXN0cmljdD00ZStBcnJvbmRpc3NlbWVudDtzdGF0ZT1Qcm92ZW5jZS1BbHBlcy1DJUMzJUI0dGUrZCUyN0F6dXI7Y291bnR5PUJvdWNoZXMtZHUtUmglQzMlQjRuZTtjYXRlZ29yeUlkPWJ1aWxkaW5nO3NvdXJjZVN5c3RlbT1pbnRlcm5hbDtubGF0PTQzLjMwOTYzODk3NzA1MDc4O25sb249NS40MDQ3Mzk4NTY3MTk5NzE7cGRzQ2F0ZWdvcnlJZD05MDAtOTMwMC0wMDAw?map=43.30961,5.40473,15,normal">
            4, Boulevard Henry Boulle
            <br />
            13004 Marseille
            <br />
          </a>
        </p>
        <p className={contact__phone}>
          <a href="tel:+33491649743">04 91 64 97 43</a>
        </p>
      </div>
    </section>
    <ContactForm />
  </Layout>
)
