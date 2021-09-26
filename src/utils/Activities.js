import React from 'react'
import {FiChevronRight} from 'react-icons/fi';
import styled, {css} from 'styled-components/macro'
import { 
    customerData, 
    installedData, 
    successfullData 
} from '../data/SidebarData'


const Section = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1300px;
    box-sizing: border-box;
    padding-left: 25px;
    padding-right: 28px;
    justify-content: space-between;
`;

const Container = styled.div`
    width: 100%;
    max-width: 360px;
    height: 280.27px;
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0px 4px 8px rgba(119, 119, 119, 0.25) ;
    border-radius: 5px;
    justify-content: space-between;
`;

const Top = styled.div`
   height: 53px;
   background: #1EB2A6;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   box-sizing: border-box;
   padding-left: 17px;
   padding-right: 27px;
   margin-bottom: 10px;
   h4 {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: #fff;
   }
   h6 {
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      color: #fff;
   }
`;

const Normer = css`
     display: flex;
   flex-direction: column;
   height: 53px;
   box-sizing: border-box;

   h2 {
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      color: #333;
      padding-left: 9px;
      padding-right: 16px;
   }

   div {
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       padding-left: 4px;
       padding-right: 8px;
   }
   hr {
       margin-top: 9px;
       background: #333;
       opacity: 0.2;
   }
`;

const Lower = styled.div`
   ${Normer}
   padding-left: 8px;
   padding-right: 11px;
`;

const Lower1 = styled.div`
   ${Normer}
   padding-left: 18px;
   padding-right: 15px;
   
   ul {
       margin-left: 17px;
   }
   li {
    color: #1eb2a6;
   }
   li span {
     color: #333;
   }
`;

const Norm = css`
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
`;

const Email = styled.div`
    ${Norm} 
    color: #333; 
`;

const Mobile = styled.div`
    ${Norm}
    color: #1eb2a6;
`;

const Icon = styled(FiChevronRight)`
    height: 10.64px;
    width: 7px;
    cursor: pointer;
    opacity: 0.5;
`;

const Bottom = styled.div`
   height: 31px;
   background: #1eb2a6;
   opacity: 0.2;
   margin-top: 25px;

   h2 {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #000; 
    text-align: center;
    margin-top: 8px;
   }
`;

const ContainerB = styled.div`
    width: 100%;
    max-width: 460px;
    height: 280.27px;
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0px 4px 8px rgba(119, 119, 119, 0.25) ;
    border-radius: 5px;
    justify-content: space-between;
`;

const Ac = styled.div`
  ${Norm}
`;

const Activities = () => {
    return (
        <Section>
          <Container>
            <Top>
              <h4>Recent Customer</h4>
              <h6>Most Recent List Of Customer</h6>
            </Top>
            {customerData.map((item, index ) => (
            <Lower key={index}>
                <h2>{item.name}</h2>
                <div>
                    <Email>{item.email}</Email>
                    <Mobile>{item.mobile}</Mobile>
                    <Icon />
                </div>
                <hr />
            </Lower>
            ))}
            <Bottom>
                <h2>All Customers</h2>
            </Bottom>
          </Container>
          <ContainerB>
            <Top>
              <h4>Recent Customer</h4>
              <h6>Most Recent List Of Customer</h6>
            </Top>
            {successfullData.map((item, index) => (
            <Lower1 key={index}>   
                <ul>
                    <li>
                        <span>
                            <Ac>{item.des}</Ac>
                            <div>
                              <Ac>{item.id}</Ac>
                              <Mobile>{item.price}</Mobile>
                            </div>
                            
                        </span>
                    </li>
                </ul>
                <hr />
            </Lower1> 
            ))}
            <Bottom>
                <h2>All Payment</h2>
            </Bottom>
          </ContainerB>
          <Container>
            <Top>
              <h4>Installed System</h4>
              <h6>Most Recent Completed Installtions</h6>
            </Top>
            {installedData.map((item, index) => (
            <Lower1 key={index}>
                <ul>
                    <li>
                        <span>
                            <Ac>{item.des}</Ac>
                            <Ac>{item.name}</Ac>
                        </span>
                    </li>
                </ul>
                <hr />
            </Lower1>
            ))}
            <Bottom>
                <h2>All Details</h2>
            </Bottom>
          </Container>
        </Section>
    )
}

export default Activities
