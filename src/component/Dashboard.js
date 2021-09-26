import React from 'react'
import styled from 'styled-components'
import Activities from '../utils/Activities'
import Appointment from '../utils/Appointment'
import Navbar from '../utils/Navbar'
import SideBar from '../utils/SideBar'
import Box from '../utils/Box'


const Section = styled.div`
   width: 100%;
   max-width: 1500px;
   background: #F4F4F4;
   display: flex;
   flex-direction: column;
   margin: 20px auto 0;
   box-sizing: border-box;
   margin-bottom: 30px;

   h1 {
   font-size: 18px;
   font-weight: 600;
   line-height: 22px;
   color: #333;  
   opacity: 0.2;
   }
`;

const Container = styled.div`
   display: flex;
   flex-direction: column;
   height: 1024px;
`;

const Div = styled.div`
   display: flex;
   flex-direction: row;
`;

const Group = styled.div`
   width: 100%;
    max-width: 1300px;
   display: flex;
   flex-direction: column;
`;

const Heading = styled.div`
   font-size: 24px;
   font-weight: bold;
   line-height: 29px;
   color: #526A98;
   margin: 44px 25px 15px;
`;

const Subheading = styled.div`
   font-size: 18px;
   font-weight: 600;
   line-height: 22px;
   color: #526A98;
   margin: 41px 25px 19px;
`;

const SubHeading = styled.div`
   font-size: 18px;
   font-weight: 600;
   line-height: 22px;
   color: #526A98;
   margin: 32px 25px 20px;
`;

const Dashboard = () => {
    return (
        <Section>
            <h1>Dashboard</h1>
            <Container>
               <Navbar />
               <Div>
                 <SideBar />
                 <Group>
                    <Heading>Dashboard</Heading> 
                    <Box />
                    <Subheading>Activities</Subheading>
                    <Activities />
                    <SubHeading>Upcoming Appointments (5)</SubHeading>
                    <Appointment />
                 </Group>
               </Div> 
            </Container>
            
        </Section>
    )
}

export default Dashboard
