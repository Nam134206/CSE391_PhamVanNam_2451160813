let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let editIndex = -1;

// DOM
const taskList = document.getElementById("taskList");
const modal = document.getElementById("modal");
const form = document.getElementById("taskForm");

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const date = document.getElementById("date");
const priority = document.getElementById("priority");

// mở form
document.getElementById("openFormBtn").onclick = () => {
    modal.classList.remove("hidden");
    editIndex = -1;
    form.reset();
};

// đóng form
document.getElementById("closeBtn").onclick = () => {
    modal.classList.add("hidden");
};

// submit form (thêm hoặc sửa)
form.onsubmit = function(e) {
    e.preventDefault();

    let task = {
        title: title.value,
        desc: desc.value,
        date: date.value,
        priority: priority.value,
        done: false
    };

    if (editIndex === -1) {
        tasks.push(task); // THÊM
    } else {
        tasks[editIndex] = task; // SỬA
    }

    save();
    render();
    modal.classList.add("hidden");
};

// render danh sách
function render() {
    taskList.innerHTML = "";

    let doneCount = 0;

    tasks.forEach((t, index) => {

        if (t.done) doneCount++;

        taskList.innerHTML += `
        <div class="task ${t.done ? "done" : ""}">
            <h3>${t.title}</h3>
            <p>${t.desc}</p>
            <p>${t.date} | ${t.priority}</p>

            <button class="btnc" onclick="toggleDone(${index})">✔</button>
            <button class="btns" onclick="editTask(${index})">Sửa</button>
            <button class="btnx" onclick="deleteTask(${index})">Xóa</button>
        </div>
        `;
    });

    // thống kê
    document.getElementById("total").innerText = tasks.length;
    document.getElementById("done").innerText = doneCount;
    document.getElementById("notDone").innerText = tasks.length - doneCount;
}

// đánh dấu hoàn thành
function toggleDone(i) {
    tasks[i].done = !tasks[i].done;
    save();
    render();
}

// xóa
function deleteTask(i) {
    if (confirm("Bạn có chắc muốn xóa?")) {
        tasks.splice(i, 1);
        save();
        render();
    }
}

// sửa
function editTask(i) {
    editIndex = i;

    title.value = tasks[i].title;
    desc.value = tasks[i].desc;
    date.value = tasks[i].date;
    priority.value = tasks[i].priority;

    modal.classList.remove("hidden");
}

// lưu localStorage
function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// chạy lần đầu
render();