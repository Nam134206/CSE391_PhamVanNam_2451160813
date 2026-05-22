
const openFormBtn = document.getElementById('openFormBtn');
const closeFormBtn = document.getElementById('closeFormBtn');
const studentModal = document.getElementById('studentModal');
const studentForm = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');
const totalStudents = document.getElementById('totalStudents');
const avgScore = document.getElementById('avgScore');

const studentId = document.getElementById('studentId');
const studentName = document.getElementById('studentName');
const className = document.getElementById('studentClass');
const score = document.getElementById('score');
const email = document.getElementById('email');

let students = JSON.parse(localStorage.getItem('students')) || [
     {
        id: "1324567",
        name: "Vân a",
        class: "66HTTT1",
        score: 8.5,
        email: "vananh@gmail.com"
    },
];


let editIndex = -1;

openFormBtn.onclick = function(){
    studentModal.style.display = 'flex';
}
closeFormBtn.onclick = function(){
    studentModal.style.display = 'none';
    resetForm();
}

function resetForm(){
    studentForm.reset();
    editIndex = -1;
}
function saveStudent(){
    localStorage.setItem('students', JSON.stringify(students));
}

function renderStudents(){
    studentList.innerHTML = '';
    students.forEach(function(student, index){
        studentList.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.class}</td>
                <td>${student.score}</td>
                <td>${student.email}</td>
                <td>
                    <button class="btns" onclick="editStudent(${index})">Sửa</button>
                    <button class="btnx" onclick="deleteStudent(${index})">Xóa</button>
                </td>
            </tr>
        `;
    });
    updateStatistics();
}
function updateStatistics(){
    totalStudents.innerText = students.length;
    let total = 0;
    students.forEach(function(student){
        total += Number(student.score);
    });
    let avg = 0;
    if(students.length > 0){
        avg = total / students.length;
    }
    avgScore.innerText = avg.toFixed(2);
}
studentForm.onsubmit = function(event){
    event.preventDefault();
    const student = {
        id: studentId.value,
        name: studentName.value,
        class: className.value, 
        score: score.value,
        email: email.value
    };
    if(editIndex === -1){

        students.push(student);
    }
    else{

        students[editIndex] = student;
    }
    saveStudent();
    renderStudents();
    studentModal.style.display = "none";
    resetForm();
};
function editStudent(index){
    editIndex = index;
    const student = students[index];
    studentId.value = student.id;
    studentName.value = student.name;
    className.value = student.class;
    score.value = student.score;
    email.value = student.email;
    studentModal.style.display = "flex";
}
function deleteStudent(index){

    let check = confirm(
        "Bạn có chắc muốn xóa?"
    );

    if(check){

        students.splice(index, 1);

        saveStudent();

        renderStudents();
    }
}
renderStudents();