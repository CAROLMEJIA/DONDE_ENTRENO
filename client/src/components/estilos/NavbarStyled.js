import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    list-style-type: none;
    display: flex;
    justify-content: space-around;

    height: 80px;

    padding-bottom: 0;
    padding-right: 100px;
    overflow: hidden;

    background-color: #23252E;
    border-bottom: 3px solid #DFCB44 ;
    flex-wrap: wrap;
    &.hover {
        color:#DFCB44
    }
`;

export const NavLink = styled(Link)`
    color: #FFFEFA;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-right: 30px;
    margin-left: 30px;
    height: 100%;
    cursor: pointer;
    &.active {
        text-decoration: none;
    }
    &.hover {
        color:#DFCB44
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
    white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    /* Third Nav */
    /* justify-content: flex-end;
    width: 100vw; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 18px;
    background: #DFCB44;
    padding: 10px 22px;
    color:  #23252E;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #FFFEFA;
        color: #010606;
        text-decoration: none;
    }
`;