import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Commander en ligne ou tester en concession"
                backgroundImg="model-s.jpg"
                leftBtnText= "Personnaliser votre Tesla"
                rightBtnText= "Voir les configurations existantes"
            />

            

            <Section
                title="Model 3"
                description="Commander en ligne ou tester en concession"
                backgroundImg="model-3.jpg"
                leftBtnText="Personnaliser votre Tesla"
                rightBtnText="Voir les configurations existantes"
            />

            <Section
                title="Model X"
                description="Commander en ligne ou tester en concession"
                backgroundImg="model-x.jpg"
                leftBtnText="Personnaliser votre Tesla"
                rightBtnText="Voir les configurations existantes"
            />

            <Section
                title="Model Y"
                description="Commander en ligne ou tester en concession"
                backgroundImg="model-y.jpg"
                leftBtnText="Personnaliser votre Tesla"
                rightBtnText="Voir les configurations existantes"
            />
            
            <Section
                title="Les meilleurs panneaux solaire"
                description="Retour sur investissement garantit"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Commander maintenant"
                rightBtnText="En savoir plus"
            />

            <Section
                title="Le meilleur systeme de toit solaire "
                description="Pour une energie 100% verte et un maison autonome en energie"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Commander maintenant"
                rightBtnText="En savoir plus"
            />

            <Section
                title="Accessoires"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Achater maintenant"
                rightBtnText=""
            />

            
            

        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`