import { useState } from "react";

function BooleanState() {
    const [isVisible, setIsVisible] =
        useState(true);

    const [isDarkMode, setIsDarkMode] =
        useState(false);

    const [isLiked, setIsLiked] =
        useState(false);

    return (
        <div
            style={{
                padding: "20px",
                background: isDarkMode
                    ? "#333"
                    : "#fff",
                color: isDarkMode
                    ? "#fff"
                    : "#000"
            }}
        >
            <h2>Boolean State</h2>

            <button
                onClick={() =>
                    setIsVisible(!isVisible)
                }
            >
                {isVisible
                    ? "Ẩn"
                    : "Hiện"}
            </button>

            {isVisible && (
                <p>Nội dung đang hiển thị</p>
            )}

            <hr />

            <button
                onClick={() =>
                    setIsDarkMode(
                        !isDarkMode
                    )
                }
            >
                {isDarkMode
                    ? "☀️ Light"
                    : "🌙 Dark"}
            </button>

            <hr />

            <button
                onClick={() =>
                    setIsLiked(!isLiked)
                }
            >
                {isLiked
                    ? "❤️ Đã thích"
                    : "🤍 Thích"}
            </button>
        </div>
    );
}

export default BooleanState;