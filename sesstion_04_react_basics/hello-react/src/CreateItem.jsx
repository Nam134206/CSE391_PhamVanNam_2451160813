import { useState } from "react";

function CreateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" }
    ]);

    const [newName, setNewName] =
        useState("");

    function handleAdd() {
        if (newName.trim() === "") {
            return;
        }

        const newItem = {
            id: Date.now(),
            name: newName
        };

        setItems([...items, newItem]);

        setNewName("");
    }

    return (
        <div>
            <h2>Create Item</h2>

            <input
                value={newName}
                onChange={(e) =>
                    setNewName(e.target.value)
                }
                placeholder="Tên môn học"
            />

            <button onClick={handleAdd}>
                Thêm
            </button>

            {items.map((item) => (
                <div key={item.id}>
                    {item.name}
                </div>
            ))}
        </div>
    );
}

export default CreateItem;