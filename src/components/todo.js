import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from '../components/modal';


const TodoContainer = styled.div`
    width: 540px;
    height: 880px;
    background-color: rgb(250,250,250);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TodoTitle = styled.div`
    width: 450px;
    height: 70px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid black;
    border-radius: 25px;
`

const TodoButton = styled.button`
    border-radius: 25px;
    font-size: large;
`

const TodoList = styled.ul`
    width: 450px;
    height: 600px;
    border-radius: 25px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    align-content: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    padding-left: 0;
`
const TodoItem = styled.li`
    width: 450px;
    height: 40px;
    border: 1px solid black;
    border-radius: 25px;
    margin-top: 10px;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => (props.isChecked ? "tomato" : "none")};
    `

const TodoInput = styled.input`
    width: 300px;
`

const ButtoonContainer = styled.div`
    display: flex
`

function Todo () {
    const [inputValue, setInputValue] = useState([])
    const [todos, setTodos] = useState([])
    const [isChecked, setIsChecked] = useState(false)

    const navigate = useNavigate()


    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3001/todos/',{
                method: "GET"
            })
            .then(res => { 
                if(!res.ok){
                    throw Error('colud not fetch the data for that resource')
                }
                return res.json()
            })
            .then((data) => {
                setTodos(data)
                console.log(data)
            }) 
            .catch(err => {
                console.log('Error!')
            })
        }, 500)
    }, [])

    const todoDelete = (id) => {
        setTimeout(() => {
            fetch(`http://localhost:3001/todos/${id}`,{
            method: "DELETE"}
            )
            .then(res => {
              if (!res.ok) {
                throw Error('could not fetch the data for that resource');
              } 
              return res.json();
            })
            .then(() => {
                alert('다음에 다시 도전하세요!')
                navigate(0)
            })
            .catch(err => {
                console.log('error')
            })
            
          }, 500);
    }

    const todoSubmit = () => {
        let patchData = {
            "text": inputValue,
            "checked": false
          }
          if(inputValue.length === 0) {
            alert('내용을 입력하세요')
            // throw Error('내용이 없습니다')
            navigate(0)
        }

        setTimeout(() => {
            fetch(`http://localhost:3001/todos/`,{
            headers: {
              "Content-Type" : "application/json",
              Accept: "application/json"
            },
            method: "POST",
            body: JSON.stringify(patchData)
          })
            .then(res => {
                if(!res.ok){
                    throw Error('colud not fetch the data for that resource')
                }
                return res.json()
            })
            .then(() => {
                navigate(0)
            })
            .catch(err => {
                console.log('Error!')
            })
        }, 500)
    }

    const changeCheck = (id) => {
        setIsChecked(isChecked)
    }

    return (
        <TodoContainer>
            <TodoTitle>
                <TodoInput type="text" value={inputValue} placeholder="MAKE TO DO" onChange={(event) => setInputValue(event.target.value)}/>
                <TodoButton onClick={todoSubmit}>추가</TodoButton>
            </TodoTitle>
            <TodoList>
                {todos && todos.map((todo) => (
                    <TodoItem key={todo.id} isChecked={isChecked}>
                        <input type="checkbox" onChange={() => changeCheck(todo.id)} isChecked={isChecked}></input>
                        <div>{todo.text}</div>
                        <ButtoonContainer>
                            <Modal id={todo.id} />
                            <button onClick={() => todoDelete(todo.id)}>삭제</button>
                        </ButtoonContainer>
                    </TodoItem>
                ))}
            </TodoList>
        </TodoContainer>
    )
}

export default Todo