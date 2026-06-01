import { useState } from "react";

// ===== COMPONENTS =====
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

import LifecycleDemo from "./LifecycleDemo";
import BadCounter from "./BadCounter";
import GoodCounter from "./GoodCounter";
import FlowDemo from "./FlowDemo";

import NumberState from "./components/NumberState";
import StringState from "./components/StringState";
import BooleanState from "./components/BooleanState";
import MultipleState from "./components/MultipleState";

import SimpleVariables from "./SimpleVariables";
import TernaryDemo from "./TernaryDemo";
import ListRendering from "./ListRendering";

import Header from "./components/Header";
import Footer from "./components/Footer";

import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";

import ClickEvents from "./ClickEvents";
import InputEvents from "./InputEvents";
import KeyboardEvents from "./KeyboardEvents";
import FormEvents from "./FormEvents";

import ListBasics from "./ListBasics";
import CreateItem from "./CreateItem";
import DeleteItem from "./Delete";
import UpdateItem from "./Update";

function App() {
    // ================= DATA =================
    const products = [
        { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://picsum.photos/250/150?1" },
        { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://picsum.photos/250/150?2" },
        { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://picsum.photos/250/150?3" }
    ];

    const users = [
        { id: 1, name: "Nguyễn Văn Minh", email: "minh@gmail.com", avatar: "https://i.pravatar.cc/100?img=1" },
        { id: 2, name: "Trần Văn An", email: "an@gmail.com", avatar: "https://i.pravatar.cc/100?img=2" },
        { id: 3, name: "Lê Thị Linh", email: "linh@gmail.com", avatar: "https://i.pravatar.cc/100?img=3" }
    ];

    // ================= TODO STATE =================
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filter, setFilter] = useState("all");

    function addTodo() {
        if (inputValue.trim() === "") return;

        setTodos([
            ...todos,
            { id: Date.now(), text: inputValue, done: false }
        ]);

        setInputValue("");
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") addTodo();
    }

    function toggleTodo(id) {
        setTodos(
            todos.map(t =>
                t.id === id ? { ...t, done: !t.done } : t
            )
        );
    }

    function deleteTodo(id) {
        setTodos(todos.filter(t => t.id !== id));
    }

    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.done;
        if (filter === "completed") return todo.done;
        return true;
    });

    const activeCount = todos.filter(t => !t.done).length;
    const completedCount = todos.filter(t => t.done).length;

    // ================= STYLE HELPERS =================
    const box = {
        border: "2px solid #ddd",
        padding: "15px",
        margin: "20px 0",
        borderRadius: "8px"
    };

    const title = {
        background: "#222",
        color: "white",
        padding: "10px",
        borderRadius: "6px"
    };

    return (
        <div style={{ maxWidth: 900, margin: "0 auto", fontFamily: "Arial" }}>

            <Header />

            {/* ================= TODO SECTION ================= */}
            <div style={box}>
                <h2 style={title}>📋 TODO APP</h2>

                <div style={{ display: "flex", marginTop: 10 }}>
                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Nhập công việc..."
                        style={{ flex: 1, padding: 10 }}
                    />
                    <button onClick={addTodo}>Thêm</button>
                </div>

                <TodoFilter filter={filter} setFilter={setFilter} />

                {filteredTodos.length === 0 ? (
                    <p>Không có công việc</p>
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

                {todos.length > 0 && (
                    <p>
                        {activeCount} chưa xong | {completedCount} đã xong
                    </p>
                )}
            </div>

            {/* ================= TIER 1 ================= */}
            <div style={box}>
                <h2 style={title}>TIER 1 - FLOW</h2>
                <LifecycleDemo />
                <BadCounter />
                <GoodCounter />
                <FlowDemo />
            </div>

            {/* ================= TIER 2 ================= */}
            <div style={box}>
                <h2 style={title}>TIER 2 - VARIABLES</h2>
                <SimpleVariables />
                <TernaryDemo />
                <ListRendering />
            </div>

            {/* ================= PRODUCTS ================= */}
            <div style={box}>
                <h2 style={title}>PRODUCTS</h2>
                {products.map(p => (
                    <ProductCard key={p.id} {...p} />
                ))}
            </div>

            {/* ================= USERS ================= */}
            <div style={box}>
                <h2 style={title}>USERS</h2>
                {users.map(u => (
                    <UserCard key={u.id} {...u} />
                ))}
            </div>

            {/* ================= TIER 4 ================= */}
            <div style={box}>
                <h2 style={title}>TIER 4 - STATE</h2>
                <NumberState />
                <StringState />
                <BooleanState />
                <MultipleState />
            </div>

            {/* ================= TIER 5 ================= */}
            <div style={box}>
                <h2 style={title}>TIER 5 - EVENTS</h2>
                <ClickEvents />
                <InputEvents />
                <KeyboardEvents />
                <FormEvents />
            </div>

            {/* ================= TIER 6 ================= */}
            <div style={box}>
                <h2 style={title}>TIER 6 - CRUD</h2>
                <ListBasics />
                <CreateItem />
                <DeleteItem />
                <UpdateItem />
            </div>

            <Footer />
        </div>
    );
}

export default App;