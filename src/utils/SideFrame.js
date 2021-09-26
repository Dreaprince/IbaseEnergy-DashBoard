import React from 'react'
import styled from 'styled-components'
import Bg from '../images/bg.png'
import logo from '../images/Logo1.png'


const Container = styled.div`
    width: 100%;
    max-width: 400px;
    height: 1028.14px;
    display: flex;
    flex-direction: column;
    background: url(${Bg});
    box-sizing: border-box;
    padding-left: 40px;
   h3 {
    font-weight: bold;
    font-size: 15px;
    line-height: 25px;
    color: #18B2D2;
    margin-bottom: 11.68px;
   }
`;

const Logo = styled.div`
   width: 109.59px;
   height: 61.2px;
   background: url(${logo});
   margin: 73.61px 0px 300.99px;
`;

const Page = styled.div`
     font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #384C74;
    margin-bottom: 23.37px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 353.39px;
`;

const Box = styled.div`
   width: 34.29px;
   height: 4.67px;
   background: #18B2D2;
   margin-right: 6px;
`;

const Box1 = styled.div`
   width: 34.29px;
   height: 4.67px;
   background: #fff;
   margin-right: 6px;
`;

const Footer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
    padding-right: 60px;
   h5 {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #384C74;  
   }
`;

const SideFrame = () => {
    return (
        <Container>
            <Logo />
            <h3>OUR SOLUTION</h3>
            <Page>
                our solution provides low-cost, carbon-free on demand power for households and small business across Nigeria
            </Page>
            <Div>
                <Box />
                <Box1 />
                <Box1 />
            </Div>
            <Footer>
                <h5>Privacy Policy</h5>
                <h5>Terms & Conditions</h5>
                <h5>Faqs</h5>
            </Footer>
        </Container>
    )
}

export default SideFrame
