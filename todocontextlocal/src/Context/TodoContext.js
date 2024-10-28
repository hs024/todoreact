import React from "react";
import { createContext,useContext } from "react";

export const todoContext=createContext({
todos:[{id:1,todo:"todo msg",completed:false},],
addtodo:(todo)=>{},
updateTodo:(id,todo)=>{},
deleteTodo:(id)=>{},
togglecomplete:(id)=>{}
})

export const UseTodo =()=>{
    return useContext(todoContext)
}

export const TodoProvider=todoContext.Provider


