import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import {AiOutlineShoppingCart, AiFillFacebook} from 'react-icons/ai'
import { Nav, NavbarContainer, NavLogo ,
         MobileIcon, NavCart,
         NavMenu, FBBtn,
         NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick = {toggle}>
            <FaBars color='white'/>
          </MobileIcon>
          <NavMenu>
            <NavBtn>
              <NavBtnLink >
                Book a Session
              </NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink >
                Shop
              </NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink >
                The Cats
              </NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink >
                Reiki FAQs
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
          <NavLogo>
            Cottage Cats LLC
          </NavLogo>
            <FBBtn>
                <AiFillFacebook color="white"/>
            </FBBtn>
          <NavCart>
            <AiOutlineShoppingCart color="white" />
          </NavCart>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;