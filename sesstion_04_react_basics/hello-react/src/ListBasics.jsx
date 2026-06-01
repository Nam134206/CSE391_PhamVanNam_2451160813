import { useState } from "react";

function ListBasics() {
    const [students] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ]);

    const avgAge =
        students.reduce(
            (sum, student) => sum + student.age,
            0
        ) / students.length;

    return (
        <div>
            <h2>List Basics</h2>

            {students.map((student, index) => (
                <div
                    key={student.id}
                    style={{
                        padding: "10px",
                        margin: "5px 0",
                        background:
                            student.age >= 20
                                ? "#d4edda"
                                : "#f8d7da"
                    }}
                >
                    {index + 1}. {student.name} -
                    {student.age} tuổi
                </div>
            ))}

            <p>
                Tuổi trung bình:
                {avgAge.toFixed(1)}
            </p>
        </div>
    );
}

export default ListBasics;