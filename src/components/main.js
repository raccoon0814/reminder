import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    width: 540px;
    height: 880px;
    background-color: skyblue;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const MainText = styled.span`
    text-align: center;
`

function Main () {
    return (
        <MainContainer>
            <MainText>어쩌구저쩌구 앱 소개가 들어갑니다</MainText>
        </MainContainer>
    )
}

export default Main