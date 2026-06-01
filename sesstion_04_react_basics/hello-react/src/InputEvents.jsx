import { useState } from "react";

function InputEvents() {
    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <div>
            <h2>Input Events</h2>

            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Nhập gì đó..."
            />

            <p>Ký tự: {text.length}</p>

            <p>Bạn nhập: {text}</p>
        </div>
    );
}

export default InputEvents;