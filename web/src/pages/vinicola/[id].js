import React from "react"

import CarouselComponent from "./../../components/Carousel"
import Layout from "./../../components/layout"
import RouterTrip from "./../../components/RouterTrip"
import SEO from "./../../components/seo"
import HomeItens from "./../../components/HomeItens"
import Description from "../../components/Description"


const IndexPage = (props) => (

  <Layout>
    <HomeItens />
    <SEO title="Home" />
    <CarouselComponent id={props.params.id} />
    <Description />
    <RouterTrip />
  </Layout>
)

export default IndexPage
