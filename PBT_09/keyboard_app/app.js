const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://picsum.photos/id/1024/600/400"
];

let index = 0;
let playing = false;
let interval = null;

const img = document.querySelector("#img");
const modal = document.querySelector("#modal");

/* INIT */
function render() {
    img.src = images[index];
}
render();

/* NAVIGATION */
function next() {
    index = (index + 1) % images.length;
    render();
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    render();
}

/* SLIDESHOW */
function play() {
    if (interval) return;
    interval = setInterval(next, 1500);
    playing = true;
}

function pause() {
    clearInterval(interval);
    interval = null;
    playing = false;
}

/* MODAL */
function openModal() {
    modal.classList.add("show");
    modal.innerHTML = `<img src="${images[index]}" width="600">`;
}

function closeModal() {
    modal.classList.remove("show");
}

/* COMMAND PALETTE */
const cmd = document.querySelector("#cmd");
const cmdInput = document.querySelector("#cmdInput");
const cmdList = document.querySelector("#cmdList");

const commands = [
    { name: "Next Image", action: next },
    { name: "Previous Image", action: prev },
    { name: "Play Slideshow", action: play },
    { name: "Pause Slideshow", action: pause },
    { name: "Open Modal", action: openModal },
    { name: "Close Modal", action: closeModal }
];

function openCmd() {
    cmd.classList.add("show");
    cmdInput.focus();
    renderCmd("");
}

function closeCmd() {
    cmd.classList.remove("show");
    cmdInput.value = "";
}

function renderCmd(filter) {
    cmdList.innerHTML = "";

    commands
        .filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(c => {
            const div = document.createElement("div");
            div.className = "item";
            div.textContent = c.name;

            div.addEventListener("click", () => {
                c.action();
                closeCmd();
            });

            cmdList.appendChild(div);
        });
}

/* KEYBOARD SYSTEM */
document.addEventListener("keydown", (e) => {

    // CTRL + K → Command Palette
    if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        openCmd();
    }

    // ESC → close modal + cmd
    if (e.key === "Escape") {
        closeCmd();
        closeModal();
    }

    // SPACE → play/pause
    if (e.key === " ") {
        e.preventDefault();
        playing ? pause() : play();
    }

    // ARROWS
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();

    // NUMBER KEYS 1-9
    if (e.key >= "1" && e.key <= "9") {
        const i = Number(e.key) - 1;
        if (images[i]) {
            index = i;
            render();
        }
    }
});

/* CMD INPUT */
cmdInput.addEventListener("input", (e) => {
    renderCmd(e.target.value);
});

cmdInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const first = document.querySelector(".item");
        if (first) first.click();
    }
});

/* CLICK MODAL CLOSE */
modal.addEventListener("click", closeModal);

/* FOCUS MANAGEMENT NOTE:
Tab navigation tự động hoạt động vì dùng button + input semantic elements
*/