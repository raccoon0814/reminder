import React from "react";
import styled from "styled-components";
import { useState } from "react";

const TodoContainer = styled.div`
    width: 540px;
    height: 880px;
    background-color: skyblue;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TodoTitle = styled.div`
    width: 490px;
    height: 90px;
    background-color: tomato;
    border-radius: 25px;
`

const TodoButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: rgba(36,19,15,0.5);
    border-radius: 25px;
`

const TodoList = styled.ul`
    width: 490px;
    height: 600px;
    background-color: white;
    border-radius: 25px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    align-content: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
`
const TodoItem = styled.li`
    width: 470px;
    height: 80px;
    background-color: pink;
    border-radius: 25px;
    margin-top: 10px;
    list-style-type: none;
`

const TodoInput = styled.input`
    width: 300px;
    height: 80px;
`

function Todo () {
    const [inputValue, setInputValue] = useState([])
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '나루랑 산책하기',
            checked: false,
        },
        {
            id: 2,
            text: '나루랑 밥먹기',
            checked: false,
        }
    ])


    return (
        <TodoContainer>
            <TodoTitle>
                To do List!
                <TodoInput className="inputBox" type="text" value={inputValue} placeholder="텍스트" onChange={(event) => setInputValue(event.target.value)}/>
                <TodoButton>+</TodoButton>
            </TodoTitle>
            <TodoList>
                {todos.map((todo) => (
                    <TodoItem>
                        <input type="checkbox"></input>
                        <div>{todo.text}</div>
                        <button>X</button>
                    </TodoItem>
                ))}
            </TodoList>
        </TodoContainer>
    )
}

export default Todo