import { useState } from "react";

function StringState() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div style={{ padding: "20px" }}>
            <h2>Thông tin người dùng</h2>

            <input
                type="text"
                placeholder="Nhập tên"
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
            />

            <br />
            <br />

            <input
                type="email"
                placeholder="Nhập email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />

            <p>Tên: {name}</p>

            <p>Email: {email}</p>

            <p>
                Ký tự tên:
                {name.length}/100
            </p>

            <p>
                {email.includes("@")
                    ? "✅ Email hợp lệ"
                    : "❌ Email chưa hợp lệ"}
            </p>
        </div>
    );
}

export default StringState;