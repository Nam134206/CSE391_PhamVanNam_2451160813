import { useState } from "react";

function UpdateItem() {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Minh",
            age: 20
        },
        {
            id: 2,
            name: "An",
            age: 21
        }
    ]);

    const [editingId, setEditingId] =
        useState(null);

    const [editName, setEditName] =
        useState("");

    function startEdit(item) {
        setEditingId(item.id);
        setEditName(item.name);
    }

    function saveEdit() {
        setItems(
            items.map((item) =>
                item.id === editingId
                    ? {
                          ...item,
                          name: editName
                      }
                    : item
            )
        );

        setEditingId(null);
    }

    return (
        <div>
            <h2>Update Item</h2>

            {items.map((item) => (
                <div
                    key={item.id}
                    style={{
                        marginBottom: "10px"
                    }}
                >
                    {editingId === item.id ? (
                        <>
                            <input
                                value={editName}
                                onChange={(e) =>
                                    setEditName(
                                        e.target.value
                                    )
                                }
                            />

                            <button
                                onClick={
                                    saveEdit
                                }
                            >
                                Lưu
                            </button>
                        </>
                    ) : (
                        <>
                            {item.name} -
                            {item.age} tuổi

                            <button
                                onClick={() =>
                                    startEdit(
                                        item
                                    )
                                }
                            >
                                Sửa
                            </button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default UpdateItem;