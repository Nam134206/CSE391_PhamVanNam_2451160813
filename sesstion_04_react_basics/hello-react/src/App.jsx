import LifecycleDemo from "./LifecycleDemo";
import BadCounter from "./BadCounter";
import GoodCounter from "./GoodCounter";
import FlowDemo from "./FlowDemo";

import SimpleVariables from "./SimpleVariables";
import TernaryDemo from "./TernaryDemo";
import ListRendering from "./ListRendering";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
function App() {
    const products = [
        {
            id: 1,
            name: "iPhone 15",
            price: "25.000.000",
            image: "https://picsum.photos/250/150?1"
        },
        {
            id: 2,
            name: "Samsung S24",
            price: "22.000.000",
            image: "https://picsum.photos/250/150?2"
        },
        {
            id: 3,
            name: "Xiaomi 14",
            price: "15.000.000",
            image: "https://picsum.photos/250/150?3"
        }
    ];

    const users = [
        {
            id: 1,
            name: "Nguyễn Văn Minh",
            email: "minh@gmail.com",
            avatar: "https://i.pravatar.cc/100?img=1"
        },
        {
            id: 2,
            name: "Trần Văn An",
            email: "an@gmail.com",
            avatar: "https://i.pravatar.cc/100?img=2"
        },
        {
            id: 3,
            name: "Lê Thị Linh",
            email: "linh@gmail.com",
            avatar: "https://i.pravatar.cc/100?img=3"
        }
    ];
    return (
        <div>
            <h1>Tier 1 - React Flow</h1>

            <LifecycleDemo />

            <hr />

            <BadCounter />

            <hr />

            <GoodCounter />

            <hr />

            <FlowDemo />

            <h1>Tier 2 - JSX Variables</h1>

            <SimpleVariables />

            <hr />

            <TernaryDemo />

            <hr />

            <ListRendering />

            <Header />

            <div style={{ padding: "20px" }}>
                <h2>Danh sách sản phẩm</h2>

                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                        flexWrap: "wrap"
                    }}
                >
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>

                <hr />

                <h2>Danh sách người dùng</h2>

                {users.map((user) => (
                    <UserCard
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        avatar={user.avatar}
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default App;