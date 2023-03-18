import React from 'react'
import { SidebarContainer, Icon, CloseIcon,
         SidebarMenu, SidebarRoute,
         SidebarWrapper }from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
        <Icon onClick = {toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarRoute to = "/book"> Book a Session </SidebarRoute>
            <SidebarRoute to = "/shop"> Shop </SidebarRoute>
            <SidebarRoute to = "/the-cats"> The Cats </SidebarRoute>
            <SidebarRoute to = "/reiki-faqs"> Reiki FAQs </SidebarRoute>
            </SidebarMenu>
        </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar;