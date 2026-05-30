const $ = s => document.querySelector(s);

const form = $("#form");
const name = $("#name");
const email = $("#email");
const pass = $("#password");
const confirm = $("#confirm");
const phone = $("#phone");

const nameMsg = $("#nameMsg");
const emailMsg = $("#emailMsg");
const passMsg = $("#passMsg");
const confirmMsg = $("#confirmMsg");

const bar = $("#bar");
const submitBtn = $("#submitBtn");

const modal = $("#modal");
const modalBox = $("#modalBox");

/* STATE */
let state = {
    name: false,
    email: false,
    pass: false,
    confirm: false,
    phone: false
};

/* NAME */
name.addEventListener("input", () => {
    const valid = name.value.length >= 2 && name.value.length <= 50;

    state.name = valid;
    name.className = valid ? "valid" : "invalid";
    nameMsg.textContent = valid ? "OK" : "2-50 ký tự";
    checkForm();
});

/* EMAIL */
email.addEventListener("input", () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = regex.test(email.value);

    state.email = valid;
    email.className = valid ? "valid" : "invalid";
    emailMsg.textContent = valid ? "" : "Email không hợp lệ";
    checkForm();
});

/* PASSWORD STRENGTH */
pass.addEventListener("input", () => {
    const val = pass.value;

    let strength = 0;
    let label = "";
    let color = "";

    const hasLetter = /[a-zA-Z]/.test(val);
    const hasNumber = /[0-9]/.test(val);
    const hasUpper = /[A-Z]/.test(val);
    const hasLower = /[a-z]/.test(val);
    const hasSpecial = /[^a-zA-Z0-9]/.test(val);

    if (val.length >= 8 && hasLetter && hasNumber && hasUpper && hasLower && hasSpecial) {
        strength = 100;
        label = "Mạnh";
        color = "green";
        state.pass = true;
    } else if (val.length >= 8 && hasLetter && hasNumber) {
        strength = 60;
        label = "Trung bình";
        color = "orange";
        state.pass = true;
    } else {
        strength = 30;
        label = "Yếu";
        color = "red";
        state.pass = false;
    }

    bar.style.width = strength + "%";
    bar.style.background = color;
    passMsg.textContent = label;

    checkForm();
});

/* CONFIRM PASSWORD */
confirm.addEventListener("input", () => {
    const valid = confirm.value === pass.value && pass.value.length > 0;

    state.confirm = valid;
    confirm.className = valid ? "valid" : "invalid";
    confirmMsg.textContent = valid ? "" : "Không khớp password";

    checkForm();
});

/* PHONE FORMAT AUTO */
phone.addEventListener("input", () => {
    let v = phone.value.replace(/\D/g, "");

    if (v.length > 10) v = v.slice(0, 10);

    let formatted = v;
    if (v.length > 4 && v.length <= 7)
        formatted = v.slice(0,4) + "-" + v.slice(4);
    else if (v.length > 7)
        formatted = v.slice(0,4) + "-" + v.slice(4,7) + "-" + v.slice(7);

    phone.value = formatted;

    state.phone = v.length === 10;
    phone.className = state.phone ? "valid" : "invalid";

    checkForm();
});

/* CHECK FORM */
function checkForm() {
    const ok = Object.values(state).every(Boolean);
    submitBtn.disabled = !ok;
}

/* SUBMIT */
form.addEventListener("submit", (e) => {
    e.preventDefault();

    modal.classList.add("show");
    modalBox.innerHTML = `
        <h2>Đăng ký thành công 🎉</h2>
        <p>Name: ${name.value}</p>
        <p>Email: ${email.value}</p>
        <p>Phone: ${phone.value}</p>
    `;
});

/* CLOSE MODAL */
modal.addEventListener("click", () => {
    modal.classList.remove("show");
});