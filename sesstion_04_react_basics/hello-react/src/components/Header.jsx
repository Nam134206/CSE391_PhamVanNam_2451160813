function Header() {
    return (
        <header
            style={{
                background: "#3498db",
                color: "white",
                padding: "15px",
                textAlign: "center"
            }}
        >
            <h1>React Tier 3 Demo</h1>

            <nav>
                <a
                    href="#"
                    style={{
                        color: "white",
                        margin: "0 10px"
                    }}
                >
                    Trang chủ
                </a>

                <a
                    href="#"
                    style={{
                        color: "white",
                        margin: "0 10px"
                    }}
                >
                    Sản phẩm
                </a>
            </nav>
        </header>
    );
}

export default Header;