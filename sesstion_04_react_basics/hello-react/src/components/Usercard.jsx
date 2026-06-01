function UserCard({ name, email, avatar }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "10px"
            }}
        >
            <img
                src={avatar}
                alt={name}
                width="80"
            />

            <h3>{name}</h3>

            <p>{email}</p>
        </div>
    );
}

export default UserCard;