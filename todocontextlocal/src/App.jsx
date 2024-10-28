import { useEffect, useState } from "react";
import { TodoProvider } from "./Context";
import {Todoform,TodoItem} from "./Components"
// import localStorage
function App() {
  const [todos, settodos] = useState([]);
const[c,setc]=useState(0)
  const addtodo = (todo) => {
    settodos((prev) => [{ id: Date.now(), ...todo },...prev ]);
  };

  const updateTodo = (id, todo) => {
    settodos((prev) =>
      prev.map((prevtodo) => (
        prevtodo.id === id ? todo : prevtodo
      ))
    );
    // console.log("update in app jsx")
  };
  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((todo) => todo.id != id));
  };
  const togglecomplete = (id) => {
    settodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      )
    );
  };
// useEffect(()=>{
// setc((prev)=>prev+1)
// },[todos])
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length) {
      settodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addtodo, updateTodo, deleteTodo, togglecomplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <Todoform></Todoform>
            </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}></TodoItem>
                {/* {console.log(c)} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
