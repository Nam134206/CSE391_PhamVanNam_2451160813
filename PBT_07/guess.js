// Random số từ 1 -> 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Giới hạn số lần đoán
const maxAttempts = 7;

let attempts = 0;

// Lưu các số đã đoán
const guessedNumbers = [];


// Game loop
while (attempts < maxAttempts) {

    // Prompt nhập số
    const input = prompt(
        `Lần ${attempts + 1}/${maxAttempts}\nNhập số từ 1 đến 100:`
    );

    // User bấm Cancel
    if (input === null) {
        alert("Đã thoát game!");
        break;
    }

    // Convert sang number
    const guess = Number(input);


    // Validate input
    if (
        Number.isNaN(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        alert("Lỗi: Vui lòng nhập số từ 1 đến 100!");
        continue;
    }


    // Kiểm tra đoán trùng
    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }


    // Lưu số đã đoán
    guessedNumbers.push(guess);

    // Tăng số lượt
    attempts++;


    // So sánh
    if (guess === secretNumber) {

        alert(`🎉 Đúng rồi!\nBạn đoán đúng sau ${attempts} lần!`);

        break;

    } else if (guess < secretNumber) {

        alert("⬆️ Cao hơn!");

    } else {

        alert("⬇️ Thấp hơn!");
    }


    // Hết lượt
    if (attempts === maxAttempts) {

        alert(
            `❌ Bạn đã hết lượt!\nĐáp án là: ${secretNumber}`
        );
    }
}