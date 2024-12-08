"use client"

import { useState } from "react";

type todo = {
    id:number,
    name:string
  }

type todos = todo[]

const myTodos:todos = [
    {id:1,name:"弁当作る"},
    {id:2,name:"買い物行く"}
  ]

const updateTodo = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  
}



const Todo:React.FC = () =>{
  const [todos,setTodos] = useState<todos>(myTodos)
  return(
    <>
      <ul>
         {todos.map((todo)=>{
            return (
              <li key={todo.id}>id：{todo.id}　やること：{todo.name}

              <button className="bg-cyan-800" onClick={updateTodo}>更新</button>
              </li>
            )
          })}
      </ul>
    </>
  )
}

export default Todo

