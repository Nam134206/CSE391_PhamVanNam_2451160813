const api = {
    baseURL: "https://jsonplaceholder.typicode.com",

    async getUsers() {
        const res = await fetch(`${this.baseURL}/users`);

        if (!res.ok) {
            throw new Error("Cannot load users");
        }

        return res.json();
    },

    async getUser(id) {
        const res = await fetch(
            `${this.baseURL}/users/${id}`
        );

        return res.json();
    },

    async createUser(data) {
        const res = await fetch(
            `${this.baseURL}/users`,
            {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data)
            }
        );

        return res.json();
    },

    async updateUser(id,data) {
        const res = await fetch(
            `${this.baseURL}/users/${id}`,
            {
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            }
        );

        return res.json();
    },

    async deleteUser(id) {
        await fetch(
            `${this.baseURL}/users/${id}`,
            {
                method:"DELETE"
            }
        );

        return true;
    }
};

const ui = {
    renderUsers(users) {

        userList.innerHTML = users.map(user => `
            <div class="card">
                <h3>${user.name}</h3>

                <p>📧 ${user.email}</p>
                <p>📱 ${user.phone}</p>

                <div class="actions">

                    <button
                        class="edit"
                        onclick="editUser(${user.id})">
                        Edit
                    </button>

                    <button
                        class="delete"
                        onclick="deleteUser(${user.id})">
                        Delete
                    </button>

                </div>
            </div>
        `).join("");
    },

    showLoading() {

        userList.innerHTML = "";

        for(let i=0;i<6;i++) {
            userList.innerHTML += `
                <div class="skeleton"></div>
            `;
        }
    },

    showError(message) {
        showToast(message,"error");
    },

    showSuccess(message) {
        showToast(message,"success");
    }
};

const userList = document.getElementById("userList");
const userForm = document.getElementById("userForm");
const searchInput = document.getElementById("searchInput");

let users = [];
let editingId = null;

async function loadUsers() {

    ui.showLoading();

    try {

        users = await api.getUsers();

        ui.renderUsers(users);

    } catch(error) {

        ui.showError(error.message);

    }
}

document
.getElementById("addBtn")
.addEventListener("click", () => {

    editingId = null;

    userForm.reset();

    document.getElementById("formTitle")
    .textContent = "Add User";

    userForm.classList.remove("hidden");
});

document
.getElementById("cancelBtn")
.addEventListener("click", () => {

    userForm.classList.add("hidden");
});

userForm.addEventListener(
    "submit",
    async (e) => {

        e.preventDefault();

        const userData = {
            name:
            document.getElementById("name").value,

            email:
            document.getElementById("email").value,

            phone:
            document.getElementById("phone").value
        };

        try {

            if(editingId){

                const updated =
                await api.updateUser(
                    editingId,
                    userData
                );

                users = users.map(u =>
                    u.id === editingId
                    ? updated
                    : u
                );

                ui.showSuccess(
                    "User updated"
                );

            }else{

                const created =
                await api.createUser(
                    userData
                );

                users.unshift(created);

                ui.showSuccess(
                    "User created"
                );
            }

            ui.renderUsers(users);

            userForm.classList.add(
                "hidden"
            );

        } catch(error){

            ui.showError(
                error.message
            );
        }
    }
);

async function editUser(id){

    const user =
    users.find(u => u.id === id);

    editingId = id;

    document.getElementById("name")
    .value = user.name;

    document.getElementById("email")
    .value = user.email;

    document.getElementById("phone")
    .value = user.phone;

    document.getElementById("formTitle")
    .textContent = "Edit User";

    userForm.classList.remove(
        "hidden"
    );
}

async function deleteUser(id){

    const confirmDelete =
    confirm(
        "Delete this user?"
    );

    if(!confirmDelete) return;

    try{

        await api.deleteUser(id);

        users = users.filter(
            user => user.id !== id
        );

        ui.renderUsers(users);

        ui.showSuccess(
            "User deleted"
        );

    }catch(error){

        ui.showError(
            error.message
        );
    }
}

searchInput.addEventListener(
    "input",
    () => {

        const keyword =
        searchInput.value
        .toLowerCase();

        const filtered =
        users.filter(user =>
            user.name
                .toLowerCase()
                .includes(keyword)
            ||
            user.email
                .toLowerCase()
                .includes(keyword)
        );

        ui.renderUsers(filtered);
    }
);

function showToast(
    message,
    type
){

    const toast =
    document.getElementById(
        "toast"
    );

    toast.textContent =
    message;

    toast.className =
    `${type} show`;

    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    },3000);
}

loadUsers();