import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import raccoon from "../image/raccoon.png"

const LoginContainer = styled.div`
    width: 480px;
    height: 880px;
    background-color: rgb(250,250,250);
    border-radius: 15px 0px 0px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const LoginImg = styled.div`
    width: 250px;
    height: 250px;
    background: url(${raccoon}) center no-repeat;
    background-size: cover;
    margin: 20px 0px;
`

const LoginText = styled.span`
    font-size: x-large;
    font-weight: 700;
    margin-bottom: 20px;
`

const LoginButton = styled.button`
    width: 300px;
    height: 80px;
    background-color: rgba(175,175,175, 0.8);
    border-radius: 50px;
    margin-top: 20px;
    font-size: x-large;
    font-weight: 700;
    color: white;
    `


function Login ({ isLogin, setIsLogin }) {
    const loginClick = () => {
        setIsLogin(!isLogin)
    }

    return (
        <LoginContainer>
            <LoginImg />
            <span>{isLogin ? 'SEB_FE_43' : 'Welcome to'}</span>
            <LoginText>{isLogin ? '윤정훈' : 'CODE REMINDER'}</LoginText>
            <span>{isLogin ? `어떤 데이터를 넣는게 좋을까.` : `Wake Me Up!`}</span>
            {isLogin ? <Link to="/"><LoginButton onClick={loginClick}>로그아웃</LoginButton></Link>
             : <Link to="/todo"><LoginButton onClick={loginClick}>게스트로 로그인</LoginButton></Link>}
            {/* <Link to="/todo"><LoginButton>게스트로 로그인</LoginButton></Link> */}
        </LoginContainer>
    )
}

export default Login