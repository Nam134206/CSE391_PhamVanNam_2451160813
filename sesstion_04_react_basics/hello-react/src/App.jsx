import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";
import LifecycleDemo from "./LifecycleDemo";
import BadCounter from "./BadCounter";
import GoodCounter from "./GoodCounter";
import FlowDemo from "./FlowDemo";

import SimpleVariables from "./SimpleVariables";
import TernaryDemo from "./TernaryDemo";
import ListRendering from "./ListRendering";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard"

import NumberState from "./components/NumberState";
import StringState from "./components/StringState";
import BooleanState from "./components/BooleanState";
import MultipleStates from "./components/MultipleStates";

import ClickEvents from "./ClickEvents";
import InputEvents from "./InputEvents";
import KeyboardEvents from "./KeyboardEvents";
import FormEvents from "./FormEvents";

import ListBasics from "./ListBasics";
import CreateItem from "./CreateItem";
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";
function App() {
    // State chính (Tier 4)
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filter, setFilter] = useState("all");
    
    // ===== Thêm todo (Tier 6) =====
    function addTodo() {
        if (inputValue.trim() === "") return;
        
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            done: false
        };
        
        setTodos([...todos, newTodo]);
        setInputValue("");
    }
    
    // Xử lý phím Enter (Tier 5)
    function handleKeyPress(event) {
        if (event.key === "Enter") {
            addTodo();
        }
    }
    
    // ===== Toggle done (Tier 6) =====
    function toggleTodo(id) {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ));
    }
    
    // ===== Xóa todo (Tier 6) =====
    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    
    // ===== Lọc todos (Tier 2) =====
    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.done;
        if (filter === "completed") return todo.done;
        return true;
    });
    
    // ===== Đếm số việc (Tier 2) =====
    const activeCount = todos.filter(todo => !todo.done).length;
    const completedCount = todos.filter(todo => todo.done).length;
    
    return (
        
        <div style={{ 
            maxWidth: "500px", 
            margin: "0 auto", 
            padding: "20px",
            fontFamily: "Arial, sans-serif"
        }}>
            <h1>Tier 0 - JSX Basics</h1>

            <UserProfile />

            <hr />

            <ProductInfo />
            <h1>Tier 1 - React Flow</h1>
      <LifecycleDemo />
      <BadCounter />
      <GoodCounter />
      <FlowDemo />

      <hr />

      <h1>Tier 2 - JSX Variables</h1>
      <SimpleVariables />
      <TernaryDemo />
      <ListRendering />

      <hr />

      <h1>Tier 4 - useState</h1>
      <NumberState />
      <StringState />
      <BooleanState />
      <MultipleStates />

      <hr />

      <h1>Tier 5 - Events</h1>
      <ClickEvents />
      <InputEvents />
      <KeyboardEvents />
      <FormEvents />

      <hr />

      <h1>Tier 6 - CRUD</h1>
      <ListBasics />
      <CreateItem />
      <DeleteItem />
      <UpdateItem />

            <h1 style={{ textAlign: "center" }}>📋 Todo List</h1>
            
            {/* Input (Tier 5) */}
            <div style={{ display: "flex", marginBottom: "20px" }}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Nhập công việc..."
                    style={{ 
                        flex: 1, 
                        padding: "10px", 
                        fontSize: "16px",
                        border: "2px solid #ddd",
                        borderRadius: "4px 0 0 4px"
                    }}
                />
                <button 
                    onClick={addTodo}
                    style={{ 
                        padding: "10px 20px", 
                        fontSize: "16px",
                        background: "#3498db",
                        color: "white",
                        border: "none",
                        borderRadius: "0 4px 4px 0",
                        cursor: "pointer"
                    }}
                >
                    Thêm
                </button>
            </div>
            
            {/* Filter (Tier 3) */}
            <TodoFilter 
                filter={filter}
                setFilter={setFilter}
            />
            
            {/* Todo list (Tier 6) */}
            {filteredTodos.length === 0 ? (
                <div style={{ 
                    textAlign: "center", 
                    padding: "40px",
                    color: "#999"
                }}>
                    {todos.length === 0 
                        ? "📝 Chưa có công việc nào" 
                        : "Không có công việc phù hợp"}
                </div>
            ) : (
                filteredTodos.map(todo => (
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                ))
            )}
            
            {/* Footer (Tier 2) */}
            {todos.length > 0 && (
                <div style={{ 
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "15px",
                    padding: "10px",
                    background: "#f9f9f9",
                    borderRadius: "4px"
                }}>
                    <span>{activeCount} việc chưa hoàn thành</span>
                    {completedCount > 0 && (
                        <span style={{ color: "#666" }}>
                            {completedCount} việc đã xong
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;