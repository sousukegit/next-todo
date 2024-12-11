"use client"

import { useState } from "react";

type inputTask = string;

type todo = {
    id:number,
    name:string
  }

type todos = todo[]

const myTodos:todos = [
    {id:1,name:"弁当作る"},
    {id:2,name:"買い物行く"}
  ]

const initInputTask:inputTask = "";





const Todo:React.FC = () =>{
  const [todos,setTodos] = useState<todos>(myTodos)
  const [inputTask,setInputTask] = useState<inputTask>(initInputTask)

  const updateTodo = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>,id:number) => {
    const newTodos = [...todos].map((todo)=>{
      return todo.id === id ? {id : todo.id ,name : inputTask} : todo
    })
    setTodos(newTodos)
    setInputTask("")
  }
  
  const deleteTodo = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>,id:number) => {
    const newTodos = [...todos].filter((todo)=>{
      return todo.id !== id
    })
    setTodos(newTodos)
  }
  
  const addTodo = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newId = todos.length + 1
    const newTodo = {id:newId,name:inputTask}
    const newTodos = [...todos,newTodo]
    setTodos(newTodos)
    setInputTask("")
  }
  


  return(
    <>
      <ul>
         {todos.map((todo)=>{
            return (
              <li key={todo.id}>id：{todo.id}　やること：{todo.name}
              <button className="bg-cyan-800" key={`upd-${todo.id}`} onClick={(e)=>{updateTodo(e,todo.id)}}>更新</button>
              <button className="bg-red-600" key={`del-${todo.id}`}  onClick={(e)=>{deleteTodo(e,todo.id)}}>削除</button>
              </li>
            )
          })}
      </ul>
      <input type="text" className="text-black" value={inputTask} onChange={(e)=>{setInputTask(e.target.value)}}/>
      <button className="bg-gray-500" onClick={(e)=>{addTodo(e)}}>登録</button>
    </>
  )
}

export default Todo

