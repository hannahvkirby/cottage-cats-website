import styled from 'styled-components'
import  {Link as LinkR} from 'react-router-dom'


export const Nav = styled.nav`
    background: black;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease
    }
`;

export const NavbarContainer = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 24px;
    z-index: 1;
    max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    margin: 24px;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.2s ease-in-out;


    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        left: 3.5rem;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    };

`;


export const NavMenu = styled.ul`
    display: flex;
    align-items: left;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        visibility: none;
    };
`;



export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    };
`;

export const NavBtnLink = styled(LinkR)`
    color: white;
    padding: 0 1rem;
    text-decoration: none;
`;

export const NavCart = styled.nav`
    display: flex;
    align-items: center;

`;

export const FBBtn = styled.a`
    align-items: right;
    justify-content: center;
    padding-top: 30px;
    @media screen and (max-width: 768px) {
        display: none;
    };
`