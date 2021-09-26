import React from 'react'
import styled from 'styled-components'
import { custData } from '../data/MenuData';


const Section = styled.div`
    width: 100%;
    max-width: 1301px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: 31px;
    padding-right: 28px;
`;

const Container = styled.div`
   width: 100%;
   max-width: 242px;
   height: 120px;
   background: #fff;
   box-shadow: 0px 4px 8px rgba(119, 119, 119, 0.25);
   border-radius: 5px;
   box-sizing:  border-box;
   padding-top: 29px;
   padding-left: 15px;
   display: flex;
   flex-direction: row;
`;

const Div = styled.div`
       display: flex;
       flex-direction: column;
       padding-top: 5px;

   h3 {
      font-weight: bold;
      font-size: 25px;
      line-height: 30px;
      color: #333;
   }

   h5 {
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #384C74;  
   } 
`;

const InnerBox = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: rgba(30, 178, 166, 0.25);
    margin-right: 16px;
`;

const Box = () => {
    return (
        <Section>
            {custData.map((item, index) => (
            <Container key={index}>
                <InnerBox />
                <Div>
                    <h3>{item.num}</h3>
                    <h5>{item.title}</h5>
                </Div>
            </Container>
            ))}
        </Section>
    )
}

export default Box
