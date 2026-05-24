const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];


// Biến thống kê
let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

// Tổng điểm các môn
let totalMath = 0;
let totalPhysics = 0;
let totalCS = 0;

// Bonus: theo giới tính
let maleTotal = 0;
let maleCount = 0;

let femaleTotal = 0;
let femaleCount = 0;


// SV cao nhất và thấp nhất
let highestStudent = null;
let lowestStudent = null;


console.log("| STT | Tên     | TB   | Xếp loại   |");
console.log("|-----|---------|------|-------------|");


// Duyệt danh sách sinh viên
for (let i = 0; i < students.length; i++) {

    const student = students[i];

    // Tính điểm trung bình
    const average =
        student.math * 0.4 +
        student.physics * 0.3 +
        student.cs * 0.3;

    // Làm tròn 1 chữ số
    const avgRounded = average.toFixed(1);

    // Xếp loại
    let rank = "";

    if (average >= 8.0) {
        rank = "Giỏi";
        gioi++;

    } else if (average >= 6.5) {
        rank = "Khá";
        kha++;

    } else if (average >= 5.0) {
        rank = "Trung bình";
        trungBinh++;

    } else {
        rank = "Yếu";
        yeu++;
    }


    // In bảng
    console.log(
        `| ${i + 1} | ${student.name} | ${avgRounded} | ${rank} |`
    );


    // Cộng tổng môn học
    totalMath += student.math;
    totalPhysics += student.physics;
    totalCS += student.cs;


    // Bonus: tính theo giới tính
    if (student.gender === "M") {
        maleTotal += average;
        maleCount++;

    } else if (student.gender === "F") {
        femaleTotal += average;
        femaleCount++;
    }


    // Tìm cao nhất
    if (highestStudent === null || average > highestStudent.average) {

        highestStudent = {
            name: student.name,
            average: average
        };
    }


    // Tìm thấp nhất
    if (lowestStudent === null || average < lowestStudent.average) {

        lowestStudent = {
            name: student.name,
            average: average
        };
    }
}


// Thống kê xếp loại
console.log("\n===== THỐNG KÊ XẾP LOẠI =====");

console.log(`Giỏi: ${gioi}`);
console.log(`Khá: ${kha}`);
console.log(`Trung bình: ${trungBinh}`);
console.log(`Yếu: ${yeu}`);


// SV cao nhất và thấp nhất
console.log("\n===== SINH VIÊN =====");

console.log(
    `Cao nhất: ${highestStudent.name} (${highestStudent.average.toFixed(1)})`
);

console.log(
    `Thấp nhất: ${lowestStudent.name} (${lowestStudent.average.toFixed(1)})`
);


// Điểm TB từng môn
console.log("\n===== ĐIỂM TB TỪNG MÔN =====");

console.log(
    `Math: ${(totalMath / students.length).toFixed(1)}`
);

console.log(
    `Physics: ${(totalPhysics / students.length).toFixed(1)}`
);

console.log(
    `CS: ${(totalCS / students.length).toFixed(1)}`
);


// Bonus: điểm TB theo giới tính
console.log("\n===== ĐIỂM TB THEO GIỚI TÍNH =====");

console.log(
    `Nam: ${(maleTotal / maleCount).toFixed(1)}`
);

console.log(
    `Nữ: ${(femaleTotal / femaleCount).toFixed(1)}`
);