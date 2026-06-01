function ListRendering() {
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 15000000
        },
        {
            id: 2,
            name: "Chuột",
            price: 300000
        },
        {
            id: 3,
            name: "Bàn phím",
            price: 1200000
        },
        {
            id: 4,
            name: "Tai nghe",
            price: 800000
        },
        {
            id: 5,
            name: "Màn hình",
            price: 4500000
        }
    ];

    const total = products.reduce(
        (sum, product) =>
            sum + product.price,
        0
    );

    return (
        <div style={{ padding: "20px" }}>
            <h2>2.3 List Rendering</h2>

            <table
                border="1"
                cellPadding="10"
                style={{
                    borderCollapse:
                        "collapse"
                }}
            >
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Giá</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(
                        (product) => (
                            <tr
                                key={
                                    product.id
                                }
                            >
                                <td>
                                    {
                                        product.name
                                    }
                                </td>

                                <td
                                    style={{
                                        color:
                                            product.price >
                                            1000000
                                                ? "red"
                                                : "black"
                                    }}
                                >
                                    {product.price.toLocaleString()}
                                    đ
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>

            <h3>
                Tổng giá:
                {" "}
                {total.toLocaleString()}
                đ
            </h3>
        </div>
    );
}

export default ListRendering;