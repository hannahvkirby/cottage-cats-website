import React from 'react'
import { SidebarContainer, Icon, CloseIcon,
         SidebarMenu, SidebarLink, SidebarRoute,
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
            </SidebarMenu>
        </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar;