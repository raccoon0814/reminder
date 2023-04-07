import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    width: 540px;
    height: 880px;
    background-color: rgb(250,250,250);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const MainText = styled.span`
    text-align: center;
    font-size: large;
`

const Autor = styled(MainText)`
    font-size: midium;
    margin-top: 30px;
`

function Main () {
    return (
        <MainContainer>
            <MainText>
            매일 아침 하루 일과를 계획하고 그 계획을 실행하는 사람은 극도로<br />

            바쁜 미로 같은 삶 속에서 그를 안내할 한 올의 실을 지니고 있는 것이다.<br />

            그러나 계획이 서있지 않고 단순히 우발적으로 시간을 사용하게 된다면,<br />

            곧 무질서가 삶을 지배할 것이다.
            </MainText>
            <Autor> - 빅터 위고 - </Autor>
        </MainContainer>
    )
}

export default Main