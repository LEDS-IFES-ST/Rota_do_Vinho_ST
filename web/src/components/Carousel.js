import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = ({id}) => {
    console.log(id);
    const data = useStaticQuery(graphql`
    query teste {
        allMysqlImagem {
          edges {
            node {
              descImagem
              codImagem
              mysqlImage {
                childImageSharp {
                  fluid{
                    ...GatsbyImageSharpFluid
                  }
                }
              } 
        }
      }
    }
}
`)

function getImages(data) {
    const imageArray = []
    data.allMysqlImagem.edges.forEach((item, index) => {
        imageArray.push(
            <Carousel.Item key={index}>
                <ImageTeste fluid={item.node.mysqlImage.childImageSharp.fluid} key={index} src={item.node.mysqlImage.childImageSharp.fluid.src}/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })
    return imageArray
}

    return (
        <HeroContainer>
            <HeroBg>
                <Carousel>
                    {getImages(data)}
                </Carousel>
            </HeroBg>
        </HeroContainer>
    )
}

export default CarouselComponent

const HeroContainer = styled.div`

background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
height: 50vh;
padding: 0 1rem;
position: relative;
margin-top: 80px;
color: #fff;

:before {
content: "";
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
z-index: 2;
background: linear-gradient(
    180deg, 
    rgba(0,0,0,0.2) 0%, 
    rgba(0,0,0,0.2) 100%
    ),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);

}
`
const HeroBg = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
width: 100vw;
height: 50vh;
overflow: hidden;

`   

const ImageTeste = styled(Img)`
position: relative;
width: 100vw;
height: 50vh;
-o-object-fit: cover;
object-fit: cover;
`


