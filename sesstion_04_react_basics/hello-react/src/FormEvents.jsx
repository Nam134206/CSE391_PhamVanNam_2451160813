import { useState } from "react";

function FormEvents() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] =
        useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        if (name === "" || email === "") {
            alert("Nhập đầy đủ thông tin");
            return;
        }

        setSubmitted(true);
    }

    return (
        <div>
            <h2>Form Events</h2>

            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Tên"
                            value={name}
                            onChange={(e) =>
                                setName(
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <br />

                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) =>
                                setEmail(
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <br />

                    <button type="submit">
                        Gửi
                    </button>
                </form>
            ) : (
                <div>
                    <h3>Đăng ký thành công</h3>

                    <p>Tên: {name}</p>

                    <p>Email: {email}</p>
                </div>
            )}
        </div>
    );
}

export default FormEvents;