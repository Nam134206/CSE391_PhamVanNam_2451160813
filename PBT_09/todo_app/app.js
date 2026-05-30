let todos = [];
let filter = "all";

const $ = (s) => document.querySelector(s);

const form = $("#todoForm");
const input = $("#todoInput");
const list = $("#todoList");
const count = $("#count");
const clearBtn = $("#clearCompleted");

// LOAD FROM LOCALSTORAGE
window.addEventListener("load", () => {
    const saved = localStorage.getItem("todos");
    if (saved) todos = JSON.parse(saved);
    render();
});

// ADD TODO
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    todos.push({ id: Date.now(), text, done: false, editing: false });
    input.value = "";
    save();
    render();
});

// EVENT DELEGATION (DELETE / TOGGLE)
list.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    const id = Number(li.dataset.id);

    if (e.target.closest(".delete-btn")) {
        todos = todos.filter(t => t.id !== id);
    } else if (e.target.closest(".todo-text")) {
        todos = todos.map(t => t.id === id ? { ...t, done: !t.done } : t);
    }

    render();
});

// EDIT MODE
list.addEventListener("dblclick", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    const id = Number(li.dataset.id);

    todos = todos.map(t => t.id === id ? { ...t, editing: true } : t);
    render();
});

// SAVE EDIT (ENTER)
list.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    const li = e.target.closest("li");
    if (!li || !e.target.classList.contains("edit-input")) return;

    const id = Number(li.dataset.id);

    todos = todos.map(t =>
        t.id === id ? { ...t, text: e.target.value, editing: false } : t
    );

    render();
});

// FILTER
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        filter = btn.dataset.filter;
        render();
    });
});

// CLEAR COMPLETED
clearBtn.addEventListener("click", () => {
    todos = todos.filter(t => !t.done);
    save();
    render();
});

// RENDER ENGINE
function render() {
    list.innerHTML = "";

    todos.filter(t => {
        if (filter === "active") return !t.done;
        if (filter === "completed") return t.done;
        return true;
    }).forEach(todo => {
        const li = document.createElement("li");
        li.dataset.id = todo.id;

        if (todo.editing) {
            const input = document.createElement("input");
            input.className = "edit-input";
            input.value = todo.text;
            li.appendChild(input);
        } else {
            const span = document.createElement("span");
            span.className = "todo-text";
            span.textContent = todo.text;
            if (todo.done) span.classList.add("completed");
            li.appendChild(span);
        }

        const del = document.createElement("button");
        del.className = "delete-btn";
        del.textContent = "❌";

        li.appendChild(del);
        list.appendChild(li);
    });

    count.textContent = `${todos.filter(t => !t.done).length} items left`;
}

// SAVE
function save() {
    localStorage.setItem("todos", JSON.stringify(todos));
}