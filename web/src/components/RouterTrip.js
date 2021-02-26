import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'

import routerImg from '../assets/images/maps.jpg';

const RouterTrip = () => {
    return (
        <RouterContainer>
            <TopLine>
                Rotas
           </TopLine>
            <Description>
                Rota das Vinicolas
           </Description>
            <ContentWrapper>
                <ColumnOne>
                    <Rout>
                        <IoMdCheckmarkCircleOutline />
                        <h3>  Teste </h3>
                <p>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
                 </Rout>
                    <Rout>
                        <FaRegLightbulb />
                 <h3>  Teste Rota  </h3>
                <p>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
                    </Rout>
                </ColumnOne>
                <ColumnTwo>
               </ColumnTwo>
            </ContentWrapper>
        </RouterContainer>
    )
}

export default RouterTrip


const RouterContainer = styled.div`
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
const Description = styled.p`
text-aling: start;
padding-left: 2rem;
margin-bottom: 4rem;
font-size: clam(1.5rem, 5vw, 2rem);
`

const ContentWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
padding: 0 2rem;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`


const ColumnOne = styled.div`
display: grid;
`
const Rout = styled.div`
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
const ColumnTwo = styled.div`
display: grid;
margin-top: 2rem;
width: 100%;

@media screen and (max-width: 500px){
    grid-template-columns: 1fr;
}
` 

const Image = styled(Img)`
min-height:100%
border-radius: 10px;
`
