import React from 'react'
import {Link} from 'react-router-dom';
import { sidebarData } from '../data/SidebarData'
import imageFive from '../images/Group.png'
import styled from 'styled-components'

const Section = styled.div`
   width: 199px;
   height: 939px;
   background: #fff;
   display: flex;
   flex-direction: column;
   font-style: 15px;
   box-sizing: border-box;
   padding: 73px 0px 49px 16px;
   box-shadow: 0px 4px 8px rgba(119, 119, 119, 0.25);
   margin-top: 5px;
`;

const Container = styled.div`
   height: 375px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-bottom: 430px;
`;

const Imagebox = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
  h4 {
    font-weight: 500;
    color: #333;
  }
`;

const Image1 = styled.img`
   object-fit: cover;
   margin-right: 10px;
   text-decoration: none;
`;

const ContainerB = styled.div`

  h4 {
    font-weight: 500;
    color: #333;
  }
`;

const Image = styled.img`
   object-fit: cover;
   margin-right: 10px;
   width: 25px;
   height: 25px;
   text-decoration: none;
`;




const SideBar = () => {
    return (
        <Section>
          <Container>
             {sidebarData.map((item, index) => (
               <Imagebox key={index} >
                <Link style={{textDecoration: 'none'}}>
                  <Image1 
                    src={item.images} 
                    alt={item.alt}
                    to={item.link} 
                    width={item.width} 
                    heigh={item.height} 
                  />
                 </Link>
                  <h4>{item.title}</h4>
                  
               </Imagebox>
             ))}
          </Container> 
          <ContainerB>
            <Imagebox >
             <Link style={{textDecoration: 'none'}}>
              <Image 
                src={imageFive} 
                alt='setting' 
                link='./setting' 
              />
              </Link>
              <h4>Settings</h4>
            </Imagebox>
          </ContainerB> 
        </Section>
    )
}

export default SideBar
