import React from "react"
import Hero from "../components/Hero"


import CarouselComponent from "../components/Carousel"
import Layout from "../components/layout"
import RouterTrip from "../components/RouterTrip"
import SEO from "../components/seo"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Vinicolas"/>
    <RouterTrip />
  </Layout>
)

export default IndexPage
