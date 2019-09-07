import React from "react"
import Layout from "../../components/Layout"
import "../../reset.scss"
import {
  intro,
  intro__content,
  intro__title,
  intro__text,
} from "./Accueil.module.scss"

const Accueil = () => (
  <Layout>
    <section className={intro}>
      <div className={intro__content}>
        <h2 className={intro__title}>Éditorial du 18/08/2019</h2>
        <p className={intro__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          quibusdam a dolorum sed voluptates tempore ipsam maiores id
          doloremque, minus blanditiis expedita esse laudantium dolore repellat
          cum enim eum necessitatibus? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. <br />
          Unde, omnis modi? Culpa dolorem cum nobis! Possimus asperiores itaque
          neque adipisci optio beatae non iure? Enim placeat id dolore
          accusantium quod! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. <br />
          Voluptas, quam. Tenetur id cum rem temporibus, voluptatum doloremque
          eaque non reprehenderit. Expedita debitis animi reiciendis est iste
          iusto quae. Corporis, sequi! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. <br />
          Nobis quam culpa, voluptates blanditiis velit illum facilis aliquid
          laboriosam distinctio illo, officia quasi sunt sint. Quod vitae cum
          culpa animi deserunt.
        </p>
      </div>
    </section>
  </Layout>
)

export default Accueil
