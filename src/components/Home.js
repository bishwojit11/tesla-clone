import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            description="Order Online for touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Order online"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Model 3"
            description="Order Online for touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Order online"
            rightBtnText="Existing Inventory"
        />
         <Section
            title="Model X"
            description="Order Online for touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Order online"
            rightBtnText="Existing Inventory"
        />
         <Section
            title="Model Y"
            description="Order Online for touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Order online"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Lowest Cost Solar Panel in America"
            description="Money-back Guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order online"
            rightBtnText="Learn More"  
        />
        <Section
            title="Solar for New Roofs"
            description="Solar Roofs Cost Less Than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order online"
            rightBtnText="Learn More"  
        />
        <Section
            title="Accessories"
            description="Money-back Guarantee"
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`