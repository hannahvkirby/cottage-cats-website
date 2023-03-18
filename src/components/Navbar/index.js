import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import {AiOutlineShoppingCart, AiFillFacebook} from 'react-icons/ai'
import { Nav, NavbarContainer, NavLogo ,
         MobileIcon, NavCart,
         NavMenu, FBBtn, RightMenuContainer,
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
              <NavBtnLink to = "/book">
                Book a Session
              </NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to = "/shop">
                Shop
              </NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to = "/the-cats">
                The Cats
              </NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to = "/reiki-faqs">
                Reiki FAQs
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
          <NavLogo>
            Cottage Cats LLC
          </NavLogo>
          <RightMenuContainer>
            <FBBtn href='https://www.facebook.com/cottagecatsonfb' target={'_blank'}>
                <AiFillFacebook color="white"/>
            </FBBtn>
          <NavCart to = "/cart">
            <AiOutlineShoppingCart color="white" />
          </NavCart>
          </RightMenuContainer>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;