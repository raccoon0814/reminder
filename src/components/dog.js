import React from "react";
import styled from "styled-components";
import naru from "../image/naru1.png"
import naru3 from "../image/naru3.png"
import naru4 from "../image/naru4.png"
import naru5 from "../image/naru5.png"
import naru6 from "../image/naru6.png"

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
    background-size: cover;
    background: url(${naru}) center no-repeat;
`


const DogPicture3 = styled(DogPicture)`
    background: url(${naru3}) center no-repeat;
    background-size: cover;
`
const DogPicture4 = styled(DogPicture)`
    background: url(${naru4}) center no-repeat;
    background-size: cover;
`
const DogPicture5 = styled(DogPicture)`
    background: url(${naru5}) center no-repeat;
    background-size: cover;
`
const DogPicture6 = styled(DogPicture)`
    background: url(${naru6}) center no-repeat;
    background-size: cover;

`

function Dog () {
    return (
        <DogContainer>
            <DogPicture />
            <DogPicture3/>
            <DogPicture4 />
            <DogPicture5 />
            <DogPicture6 />
        </DogContainer>
    )
}

export default Dog