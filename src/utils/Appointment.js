import React from 'react'
import styled from 'styled-components'
import { appointmentData, headinData } from '../data/SidebarData'


const Container = styled.div`
  width: 100%;
  max-width: 1248px;
  height: 283px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(119, 119, 119 0.25);
  border: 1px solid #fff;
  margin-left: 25px;
`;

const Top = styled.div`
  height: 54px;
  
  box-sizing: border-box;
  padding-left: 17px;
  padding-right: 26px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 13px;
  }

  h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #1eb2a6;
  }
`;

const Desc = styled.div`
  height: 53px;
  background: #1eb2a6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 17px;
  padding-right: 51px;

  h5 {
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    color: #fff;
    margin-top: 15PX;
   
  }
  
`;

const Lower = styled.div`
  /* height: 176px; */
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;

  hr {
      background: #333;
      opacity: 0.2;
  }
`;

const Div = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 10px 47px 0px 17px;
      height: 40px;
      box-sizing: border-box;
`;

const Detail = styled.div`
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #333;
`;

const Appointment = () => {
    return (
            <Container>
                <Top>
                    <div>
                    <h4>Pending Installation Request</h4>
                    <h4>View All</h4>
                    </div> 
                </Top>
                <Desc>
                    {headinData.map((item, index) => (
                    <div key={index}>
                        <h5>{item.heading}</h5>
                    </div>
                    ))}
                </Desc>
                <Lower>
                    {appointmentData.map((item, index) => (
                    <Group key={index}>
                        <Div>
                            <Detail>{item.name}</Detail>
                            <Detail>{item.request}</Detail>
                            <Detail>{item.date}</Detail>
                            <Detail>{item.contact}</Detail>
                            <Detail>{item.status}</Detail>
                            <Detail>{item.action}</Detail>
                        </Div>
                        <hr /> 
                    </Group>
                    ))}
                </Lower>
            </Container>
    )
}

export default Appointment
