import React from "react";
import styled from "styled-components";

const DogContainer = styled.div`
    width: 540px;
    height: 880px;
    background-color: rgb(250,250,250);
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: flex-start;
    justify-content: center;
    flex-wrap: wrap;

    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

`

const DogPicture = styled.div`
    width: 400px;
    height: 300px;
    margin: 10px; 
    background-color: skyblue;

`

function Dog () {
    return (
        <DogContainer>
            <DogPicture />
            <DogPicture />
            <DogPicture />
            <DogPicture />
            <DogPicture />


        </DogContainer>
    )
}

export default Dog