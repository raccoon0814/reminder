import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
    width: 120px;
    height: 860px;
    background-color: rgb(70,70,70);
    padding: 10px 0px;
    border-radius: 0px 15px 15px 0px;
`

const NavButton = styled.button`
    width: 80px;
    height: 80px;
    background-color: rgb(217,217,217);
    margin: 5px;
    font-size: x-large;
    font-weight: 700;
    border-radius: 10px;
    ${({isLogin}) => {
        return isLogin ? 'null' : 'display: none;'
    }}
    &:hover{
        background-color: rgb(250,250,250);
        transition: 0.5s;
    }
    `

function Nav ({ isLogin }) {
    return (
        <NavContainer>
            <Link to="/todo"><NavButton isLogin={isLogin}>📖</NavButton></Link>
            <Link to="/dog"><NavButton isLogin={isLogin}>🐶</NavButton></Link>
        </NavContainer>
    )
}

export default Nav