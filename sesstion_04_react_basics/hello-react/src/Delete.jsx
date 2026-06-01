import { useState } from "react";

function DeleteItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh" },
        { id: 2, name: "An" },
        { id: 3, name: "Linh" }
    ]);

    function handleDelete(id) {
        setItems(
            items.filter(
                (item) => item.id !== id
            )
        );
    }

    return (
        <div>
            <h2>Delete Item</h2>

            {items.length === 0 && (
                <p>Danh sách trống</p>
            )}

            {items.map((item) => (
                <div
                    key={item.id}
                    style={{
                        display: "flex",
                        gap: "10px",
                        marginBottom: "10px"
                    }}
                >
                    <span>{item.name}</span>

                    <button
                        onClick={() =>
                            handleDelete(item.id)
                        }
                    >
                        Xóa
                    </button>
                </div>
            ))}
        </div>
    );
}

export default DeleteItem;