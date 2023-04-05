import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
    width: 480px;
    height: 880px;
    background-color: tomato;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const LoginImg = styled.div`
    width: 250px;
    height: 250px;
    background-color: white;
    border-radius: 25px;
    margin: 20px 0px;
`

const LoginText = styled.span`
    font-size: x-large;
    font-weight: 700;
    margin-bottom: 20px;
`

const LoginButton = styled.button`
    width: 380px;
    height: 100px;
    background-color: rgba(70,70,70, 0.8);
    border-radius: 25px;
    margin: 10px;
    `

function Login () {
    return (
        <LoginContainer>
            <LoginImg />
            <span>Welcome to</span>
            <LoginText>CODE REMINDER</LoginText>
            <span>So wake me up when it's all over. When I'm wiser and I'm older.<br /> All this time I was finding myself, and I Didn't know I was lost</span>
            <Link to="/todo"><LoginButton>게스트로 로그인</LoginButton></Link>
        </LoginContainer>
    )
}

export default Login