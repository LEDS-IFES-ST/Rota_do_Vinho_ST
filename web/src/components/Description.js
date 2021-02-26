import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import { useStaticQuery, graphql } from "gatsby";


const Description = () => {

    const data = useStaticQuery(graphql`
    query MyQueryTeste {
        allFile (filter: {ext: {regex: "/(jpg)/"},
                          name: {in: ["teste", "testeVinicola"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
`)
    return (
        <DescriptionContainer>
            <TopLine>
                Description
            </TopLine>
            <DescriptionSection>
                Alguem disse isso
            </DescriptionSection>
            <ContentWrapper>
                <ColuneOne>
                    <About>
                        <IoMdCheckmarkCircleOutline />
                        <h3>Sobre</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </About>
                    <About>
                        <FaRegLightbulb />
                        <h3>Sobre</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </About>
                </ColuneOne>
                <ColuneTwo>
                    {
                        data.allFile.edges.map(
                            (image, key) => (
                                <Images key={key} fluid={image.node.childImageSharp.fluid} />
                            ))
                    }
                </ColuneTwo>
            </ContentWrapper>
        </DescriptionContainer>
    )
}

export default Description

const DescriptionContainer = styled.div`
width: 100%;
background: #fcfcfc;
color: #000;
padding: 5rem calc((100vw - 1300px) / 2);
height: 100%;
`
const TopLine = styled.p`
color: #077bf1;
font-size: 1rem;
padding-left: 2rem;
margin-bottom: 0.75rem;
`
const DescriptionSection = styled.p`
text-aling: center;
padding-left: 2rem;
margin-bottom: 4rem;
font-size: clamp(1.5rem, 5vw, 2rem);
font-weight: bold;
`

const ContentWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
padding: 0 2rem;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`
const ColuneOne = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
`
const About = styled.div`
padding-top: 1rem;
padding-right: 2rem;

h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
}

p { 
  color: 3b3b3b;  
}
`
const ColuneTwo = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin-top: 2rem;
grid-gap: 10px;

@media screen and (max-width: 500px){
    grid-template-columns: 1fr;
}
`
const Images = styled(Img)`
border-radius: 10px;
min-height:100%;
min-width:100%;
`