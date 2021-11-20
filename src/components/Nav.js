import React, {useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from '../img/logo.svg';
import { fetchSearch } from  "../actions/gamesAction"
import { useDispatch } from "react-redux";


const Nav = () => {
    const dispatch = useDispatch()
    const [textInput, setTextInput] = useState("")
    const inputHandler = (e) => {
        setTextInput(e.target.value)
    }
    const submitSearch = (e) => {
        e.preventDefault()
        dispatch(fetchSearch(textInput))
        setTextInput("")
    }

    const clearSearch = () => {
        dispatch({type: "CLEAR_SEARCH"})
    }

    return(
        <StyledNav>
            <Logo onClick={clearSearch}>
                <img src={logo} alt="logo" />
                <h1>Video Games Corner</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text" />
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
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
        &:hover{
            background: #4834d4;
        }
    }
`

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img{
        height: 2rem;
        width: 2rem;
    }
`

export default Nav