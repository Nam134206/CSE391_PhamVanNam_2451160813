import { useState } from "react";

function KeyboardEvents() {
    const [lastKey, setLastKey] = useState("");
    const [text, setText] = useState("");

    function handleKeyDown(event) {
        setLastKey(event.key);

        if (event.key === "Escape") {
            setText("");
        }

        if (event.key === "Enter") {
            alert("Bạn nhập: " + text);
        }
    }

    return (
        <div>
            <h2>Keyboard Events</h2>

            <input
                type="text"
                value={text}
                onChange={(e) =>
                    setText(e.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Nhập rồi Enter..."
            />

            <p>Phím cuối: {lastKey}</p>
        </div>
    );
}

export default KeyboardEvents;