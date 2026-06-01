function ProductCard({ name, price, image }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                width: "250px"
            }}
        >
            <img
                src={image}
                alt={name}
                style={{
                    width: "100%",
                    borderRadius: "8px"
                }}
            />

            <h3>{name}</h3>

            <p
                style={{
                    color: "red",
                    fontWeight: "bold"
                }}
            >
                {price} đ
            </p>

            <button>
                Mua ngay
            </button>
        </div>
    );
}

export default ProductCard;