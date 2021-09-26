import React from 'react'
import { menuData } from '../data/MenuData'
import imageOne from '../images/logo.png'
import styled from 'styled-components'

const Nav = styled.nav`
  background: #fff;
  width: 100%;
  max-width: 1500px;
  height: 77px;
  box-shadow: 0px 4px 8px rgba(119, 119, 119, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoBlock = styled.div`
  max-width: 199px;
  width: 100%;
  display: flex;
  flex-direction: row;

  img {
     margin: 14px 14.75px 0px 52px;
     width: 104px;
     height: 49px;
     object-fit: cover; 
  }

  hr {
      height: 77px;
      border: 1px solid #fff;
      box-shadow: 0px 4px 8px rgba(119, 119, 119, 0.25);
  }
`;

const NavMenu = styled.div`
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 19.3px;
    div {}
`;

const NavMenuLinks = styled.img`
     object-fit: cover;
`;



const Navbar = () => {
    return (
        <Nav>
            <LogoBlock>
               <img src={imageOne} alt='logo' to="/" /> 
               <hr />
            </LogoBlock>
            <NavMenu>
            {menuData.map((item, index) => (
                <div key={index}> 
                    <NavMenuLinks 
                        src={item.images} 
                        alt={item.alt} 
                        to={item.link} 
                        width={item.width} 
                        heigh={item.height}
                    />
                </div> 
             ))}
            </NavMenu>      
        </Nav>
    )
}

export default Navbar
