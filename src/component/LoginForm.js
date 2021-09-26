import React from 'react'
import styled from 'styled-components'
import SideFrame from '../utils/SideFrame'
import Login from '../utils/Login'


const Section = styled.div`
  width: 100%;
  max-width: 1435px;
  height: 1028.14px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  width: 100%;
  max-width: 1035px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(30, 178, 166, 0.04);
`;

const LoginForm = () => {
    return (
     <Section>
        <SideFrame />
        <Box>
           <Login />
        </Box> 
     </Section> 
    )
}

export default LoginForm
