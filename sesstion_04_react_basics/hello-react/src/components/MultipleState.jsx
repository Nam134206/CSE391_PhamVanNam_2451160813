import { useState } from "react";

function MultipleStates() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] =
        useState("");
    const [isStudent, setIsStudent] =
        useState(false);

    const [submitted, setSubmitted] =
        useState(false);

    function handleSubmit() {
        if (
            name === "" ||
            age === "" ||
            email === ""
        ) {
            alert(
                "Nhập đầy đủ thông tin"
            );
            return;
        }

        if (
            age <= 0 ||
            age >= 100
        ) {
            alert(
                "Tuổi không hợp lệ"
            );
            return;
        }

        setSubmitted(true);
    }

    function handleReset() {
        setName("");
        setAge("");
        setEmail("");
        setIsStudent(false);
        setSubmitted(false);
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Form Đăng Ký</h2>

            {!submitted ? (
                <>
                    <input
                        placeholder="Tên"
                        value={name}
                        onChange={(e) =>
                            setName(
                                e.target.value
                            )
                        }
                    />

                    <br />
                    <br />

                    <input
                        type="number"
                        placeholder="Tuổi"
                        value={age}
                        onChange={(e) =>
                            setAge(
                                e.target.value
                            )
                        }
                    />

                    <br />
                    <br />

                    <input
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(
                                e.target.value
                            )
                        }
                    />

                    <br />
                    <br />

                    <label>
                        <input
                            type="checkbox"
                            checked={
                                isStudent
                            }
                            onChange={(e) =>
                                setIsStudent(
                                    e.target
                                        .checked
                                )
                            }
                        />
                        Là sinh viên
                    </label>

                    <br />
                    <br />

                    <button
                        onClick={
                            handleSubmit
                        }
                    >
                        Đăng ký
                    </button>

                    {name && (
                        <p>
                            Xin chào{" "}
                            <b>{name}</b>
                        </p>
                    )}
                </>
            ) : (
                <>
                    <h3>
                        ✅ Đăng ký thành
                        công
                    </h3>

                    <p>
                        Tên: {name}
                    </p>

                    <p>
                        Tuổi: {age}
                    </p>

                    <p>
                        Email: {email}
                    </p>

                    <p>
                        Sinh viên:
                        {isStudent
                            ? " Có"
                            : " Không"}
                    </p>

                    <button
                        onClick={
                            handleReset
                        }
                    >
                        Đăng ký lại
                    </button>
                </>
            )}
        </div>
    );
}

export default MultipleStates;