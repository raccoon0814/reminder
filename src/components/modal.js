import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";


const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top:0; left:0; bottom:0; right:0;
  background: rgba(0, 0, 0, 0.8);
`;

const ModalBtn = styled.button`
`;

const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  position: absolute;
  top: calc(50vh - 100px); left: calc(50vw - 200px);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 400px;
  height: 200px;
  text-align: center;
`;

function Modal ({id}) {
  const [isOpen, setIsOpen] = useState(false);
  const [fixValue, setFixValue] = useState("")

  const navigate = useNavigate()

  const openModalHandler = () => {
    setIsOpen(isOpen === false ? true : false)
  };

  const closeModalHandler = () => {
    setIsOpen(false)
  };

  const todoUpdate = () => {
    let updateText = {"text" : fixValue}
    setTimeout(() => {
        fetch(`http://localhost:3001/todos/${id}`,{
        headers: {
            "Content-Type" : "application/json",
            Accept: "application/json"
            },
        method: "PATCH",
        body: JSON.stringify(updateText)
        })
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          } 
          return res.json();
        })
        .then(() => {
            alert('수정 완료')
            navigate(0)
        })
        .catch(err => {
            console.log('error')
        })
        
      }, 500);
}

  return (
    <>
      <ModalContainer>
      <ModalBtn onClick={openModalHandler}>
          {isOpen === true ? "닫기!" : "수정"}
        </ModalBtn>
        {isOpen === true ? <>
        <ModalBackdrop onClick={closeModalHandler}>
          <ModalView onClick={(event) => {event.stopPropagation()}}>
            <input tyse='text' value={fixValue} placeholder="EDIT TO DO" onChange={(event) => setFixValue(event.target.value)}></input>
            <ModalBtn onClick={todoUpdate}>수정</ModalBtn>
            <ModalBtn onClick={openModalHandler}>
              {isOpen === true ? "닫기!" : "수정"}
            </ModalBtn>
          </ModalView>
        </ModalBackdrop>
        </> : null}
      </ModalContainer>
    </>
  );
};

export default Modal