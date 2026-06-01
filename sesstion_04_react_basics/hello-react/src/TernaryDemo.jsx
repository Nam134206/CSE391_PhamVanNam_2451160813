function TernaryDemo() {
    const isLoggedIn = true;
    const score = 8.5;

    const online = true;

    const stock = 0;

    return (
        <div style={{ padding: "20px" }}>
            <h2>2.2 Conditional Rendering</h2>

            <h3>
                {isLoggedIn
                    ? "Chào mừng bạn!"
                    : "Vui lòng đăng nhập"}
            </h3>

            <p>
                Kết quả:
                {" "}
                {score >= 5
                    ? "Đậu"
                    : "Rớt"}
            </p>

            <p>
                Trạng thái:
                {" "}
                {online
                    ? "🟢 Online"
                    : "🔴 Offline"}
            </p>

            {isLoggedIn && (
                <div>
                    <button>Trang cá nhân</button>
                    <button>Đăng xuất</button>
                </div>
            )}

            {stock === 0 && (
                <h3 style={{ color: "red" }}>
                    Hết hàng
                </h3>
            )}
        </div>
    );
}

export default TernaryDemo;