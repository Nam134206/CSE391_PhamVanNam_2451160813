function SimpleVariables() {
    const ten = "Phạm Văn Nam";
    const tuoi = 20;
    const queQuan = "Hà Nội";
    const canNang = 65;
    const chieuCao = 1.7;

    const bmi = (
        canNang /
        (chieuCao * chieuCao)
    ).toFixed(1);

    const gio = new Date().getHours();

    const loiChao =
        gio < 12
            ? "Chào buổi sáng"
            : gio < 18
            ? "Chào buổi chiều"
            : "Chào buổi tối";

    const monHoc = [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h2>2.1 Simple Variables</h2>

            <h3>{loiChao}</h3>

            <p>Tên: {ten}</p>

            <p>Tuổi: {tuoi}</p>

            <p>Quê quán: {queQuan}</p>

            <p>Năm sau: {tuoi + 1}</p>

            <p>BMI: {bmi}</p>

            <p>
                Môn học:
                {" "}
                {monHoc.join(", ")}
            </p>
        </div>
    );
}

export default SimpleVariables;