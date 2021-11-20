import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from '../img/logo.svg';

const Nav = () => {
    return(
        <StyledNav>
            <Logo>
                <img src={logo} alt="logo" />
                <h1>Video Games Corner</h1>
            </Logo>
            <div className="search">
                <input type="text" />
                <button>Search</button>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 30%;
        font-size: 1.2rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        outline: none;
        font-weight: bold;
        font-family: inherit;
    }
    button{
        font-size: 1.2rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #8c7ae6;
        color: white;
    }
`

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
`

export default Nav