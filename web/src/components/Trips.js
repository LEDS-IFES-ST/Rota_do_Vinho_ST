import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'
import { Button } from './Button';
import { ImLocation } from 'react-icons/im'


const Trips = ({ heading }) => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allMysqlImagem {
          edges {
            node {
              descImagem
              codImagem
              mysqlImage {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              } 
        }
      }
    }
}
`)

    function getTrips(data) {
        const tripsArray = []
        data.allMysqlImagem.edges.forEach((item, index) => {
            tripsArray.push(
                <ProductCard key={index}>
                    <ProductImg fluid={item.node.mysqlImage.childImageSharp.fluid} key={index} />
                    <ProductInfo>
                        <TextWrap>
                            <ImLocation />
                            <ProductTitle>{item.node.descImagem}</ProductTitle>
                        </TextWrap>
                        <Button
                            primary="true"
                            round="true"
                            to={`/vinicola/${item.node.codImagem}`}
                            css={`position: absolute;
                                  top: 420px;
                                  font-size: 14px;
                    `}>{item.node.codImagem}</Button>
                    </ProductInfo>
                </ProductCard>
            )
        })

        return tripsArray
    }

    return (
        <div>
            <ProductsContainer>
                <ProductsHeading>{heading}</ProductsHeading>
                <ProductWrapper>{getTrips(data)}</ProductWrapper>
            </ProductsContainer>
        </div>
    )
}




export default Trips

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem;
    color: #fff;
`
const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`

const ProductWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;
justify-items: center;
padding: 0 2rem;

@media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
}
`
const ProductCard = styled.div`
line-height: 2;
width: 100%;
height: 500px;
position: relative;
border-radius: 10px;
transition: 0.2 ease;
`

const ProductImg = styled(Img)`
height: 100%;
max-width: 100%;
position: absolute;
border-radius: 10px;
filter: brightness(70%);
transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover{
    filter: brightness(100%);
}
`

const ProductInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0 2rem;

@media screen and (max-width:280px) {
    padding: 0 1rem;
}
`
const TextWrap = styled.div`
display: flex;
align-items: center;
position: absolute;
top: 357px;
`
const ProductTitle = styled.div`
font-weight: 400;
font-size: 1rem;
margin-left: 0.5rem;
`

